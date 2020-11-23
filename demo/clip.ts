import { h } from 'preact'
import { useState, useEffect, useMemo } from 'preact/hooks'
import * as okanvas from '../src/okanvas'
import { useFileToBase64 } from './files'

export function ClipDemo() {
  const size = { width: 200, height: 200 }
  const { base64, onInput } = useFileToBase64()
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [clipRect, setClipRect] = useState<okanvas.Rectangle>({
    x: 0,
    y: 0,
    ...size,
  })
  const [dragState, setDragState] = useState<any>(null)

  useEffect(() => {
    const _dragState = okanvas.useDrag((arg) => {
      console.log(arg)
    })
    setDragState(_dragState)
    return okanvas.useWindowPointerEffect({
      onMove: _dragState.onMove,
      onUp: _dragState.onUp,
    })
  }, [])

  useEffect(() => {
    if (!base64) return
    okanvas.base64ToImage(base64).then((_image) => {
      setImage(_image)
    })
  }, [base64])

  useEffect(() => {
    if (!image) return
    setClipRect({
      ...clipRect,
      width: image.width,
      height: image.height,
    })
  }, [image])

  const scale = useMemo(() => {
    const { maxRate } = okanvas.getRate(size, image)
    return maxRate
  }, [size, image])

  const viewBox = useMemo(() => {
    const rect = okanvas.getCentralizedViewBox(size, image)
    const pad = 8 * scale
    return `${rect.x - pad} ${rect.y - pad} ${rect.width + pad * 2} ${
      rect.height + pad * 2
    }`
  }, [size, image, scale])

  const imageElm = useMemo(() => {
    if (!image) return null
    return h('image', {
      href: base64,
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    })
  }, [image])

  const clipRectElm = useMemo(() => {
    if (!image) return null
    return h(
      'g',
      {
        transform: `translate(${clipRect.x}, ${clipRect.y})`,
      },
      [
        h('rect', {
          x: 0,
          y: 0,
          width: clipRect.width,
          height: clipRect.height,
          fill: 'none',
          stroke: 'red',
          'stroke-width': 4 * scale,
        }),
        h('circle', {
          cx: 0,
          cy: 0,
          r: 8 * scale,
          fill: 'red',
          stroke: 'none',
        }),
        h(
          'g',
          {
            transform: `translate(${clipRect.width}, ${clipRect.height})`,
          },
          [
            h('circle', {
              cx: 0,
              cy: 0,
              r: 8 * scale,
              fill: 'red',
              stroke: 'none',
            }),
          ]
        ),
      ]
    )
  }, [image, clipRect, scale])

  return h('div', null, [
    h('h2', null, 'clipDemo'),
    h('input', { type: 'file', onInput, accept: 'image/*' }, 'fileToBase64'),
    h(
      'div',
      {
        style: {
          width: '200px',
          height: '200px',
          border: '1px solid #000',
          backgroundColor: '#ccc',
          overflow: 'hidden',
        },
      },
      [
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox,
            ...(dragState
              ? {
                  onMouseDown: dragState.onDown,
                  onTouchStart: dragState.onDown,
                }
              : {}),
            style: {
              width: '100%',
              height: '100%',
            },
          },
          [imageElm, clipRectElm]
        ),
      ]
    ),
  ])
}
