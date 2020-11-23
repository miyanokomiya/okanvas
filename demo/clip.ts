import { h, createElement } from 'preact'
import { useState, useEffect, useMemo, useCallback } from 'preact/hooks'
import * as okanvas from '../src/okanvas'
import { useFileToBase64 } from './files'

function getPedal(
  p: okanvas.Vector,
  base: okanvas.Vector,
  vec: okanvas.Vector
): okanvas.Vector {
  const v1 = vec
  const v2 = { x: p.x - base.x, y: p.y - base.y }
  const dd = v1.x * v1.x + v1.y * v1.y
  const dot = v1.x * v2.x + v1.y * v2.y
  const t = dot / dd
  return { x: v1.x * t, y: v1.y * t }
}

export function ClipDemo() {
  const { base64, onInput } = useFileToBase64()

  return h('div', null, [
    h('h2', null, 'clipDemo'),
    h('input', { type: 'file', onInput, accept: 'image/*' }, 'fileToBase64'),
    createElement(ClipCanvas, { base64, clipSize: { width: 160, height: 90 } }),
  ])
}

interface Props {
  base64: string
  clipSize?: okanvas.Size
  canvasSize?: okanvas.Size
}

export function ClipCanvas({ base64, clipSize, canvasSize }: Props) {
  if (!clipSize || !canvasSize) return null

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [clipRect, setClipRect] = useState<okanvas.Rectangle>({
    x: 0,
    y: 0,
    ...clipSize,
  })
  const [clipRectOrg, setClipRectOrg] = useState<okanvas.Rectangle | null>(null)
  const [dragState, setDragState] = useState<okanvas.DragArgs | null>(null)
  const [
    dragListeners,
    setDragListeners,
  ] = useState<okanvas.PointerListeners | null>(null)
  const [dragMode, setDragMode] = useState<'' | 'move' | 'resize'>('')

  useEffect(() => {
    const _dragListeners = okanvas.useDrag((arg) => {
      setDragState(arg)
    })
    setDragListeners(_dragListeners)
    return okanvas.useWindowPointerEffect({
      onMove: _dragListeners.onMove,
      onUp: () => {
        _dragListeners.onUp()
        setDragMode('')
        setDragState(null)
        setClipRectOrg(null)
      },
    })
  }, [])

  const onStartMove = useCallback(
    (e: any) => {
      if (!dragListeners) return
      setDragMode('move')
      setClipRectOrg(clipRect)
      dragListeners.onDown(e)
    },
    [clipRect, dragListeners]
  )
  const onStartResize = useCallback(
    (e: any) => {
      if (!dragListeners) return
      setDragMode('resize')
      setClipRectOrg(clipRect)
      dragListeners.onDown(e)
    },
    [clipRect, dragListeners]
  )

  useEffect(() => {
    if (!base64) return
    okanvas.base64ToImage(base64).then((_image) => {
      setImage(_image)
    })
  }, [base64])

  const scale = useMemo(() => {
    const { maxRate } = okanvas.getRate(clipSize, image)
    return maxRate
  }, [clipSize, image])

  const viewBox = useMemo(() => {
    const rect = okanvas.getCentralizedViewBox(clipSize, image)
    return `${rect.x} ${rect.y} ${rect.width} ${rect.height}`
  }, [clipSize, image, scale])

  useEffect(() => {
    const rect = okanvas.getCentralizedViewBox(clipSize, image)
    setClipRect({
      x: rect.x,
      y: rect.y,
      width: clipSize.width * scale,
      height: clipSize.height * scale,
    })
  }, [clipSize, image, scale])

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

  useEffect(() => {
    if (!dragMode) return
    if (!dragState) return
    if (!clipRectOrg) return
    if (dragMode === 'move') {
      setClipRect({
        ...clipRectOrg,
        x: clipRectOrg.x + (dragState.p.x - dragState.base.x) * scale,
        y: clipRectOrg.y + (dragState.p.y - dragState.base.y) * scale,
      })
    } else if (dragMode === 'resize') {
      const beforeDiagonal = {
        x: clipRectOrg.width + (dragState.p.x - dragState.base.x) * scale,
        y: clipRectOrg.height + (dragState.p.y - dragState.base.y) * scale,
      }
      const afterDiagonal = getPedal(
        beforeDiagonal,
        { x: 0, y: 0 },
        {
          x: clipSize.width,
          y: clipSize.height,
        }
      )
      setClipRect({
        ...clipRectOrg,
        width: afterDiagonal.x,
        height: afterDiagonal.y,
      })
    }
  }, [clipRectOrg, dragMode, dragState, scale, clipSize])

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
        h(
          'g',
          {
            ...(dragListeners
              ? { onMouseDown: onStartMove, onTouchStart: onStartMove }
              : {}),
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
        h(
          'g',
          {
            transform: `translate(${clipRect.width}, ${clipRect.height})`,
            ...(dragListeners
              ? { onMouseDown: onStartResize, onTouchStart: onStartResize }
              : {}),
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

  return h(
    'div',
    {
      style: {
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
        padding: '8px',
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
          style: {
            width: '100%',
            height: '100%',
            overflow: 'visible',
          },
        },
        [imageElm, clipRectElm]
      ),
    ]
  )
}
ClipCanvas.defaultProps = {
  clipSize: { width: 200, height: 200 },
  canvasSize: { width: 200, height: 200 },
}
