import { h } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import * as okanvas from '../src/okanvas'

const styles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export function ImageRect(props: { src: string }) {
  return h(
    'div',
    {
      style: {
        ...styles.flexCenter,
        border: '1px solid #000',
        width: '200px',
        height: '200px',
      },
    },
    [
      h('img', {
        src: props.src,
        style: { maxWidth: '100%', maxHeight: '100%' },
      }),
    ]
  )
}

export function useFileToBase64() {
  const [base64, setBase64] = useState('')
  const onInput = useCallback(async (e: any) => {
    if (!e?.target?.files) return

    const result = await okanvas.fileToBase64(e.target.files[0])
    setBase64(result)
  }, [])
  return {
    base64,
    onInput,
  }
}

export function ReadImageFileDemo() {
  const { base64, onInput } = useFileToBase64()

  return h('div', null, [
    h('h2', null, 'fileToBase64'),
    h('input', { type: 'file', onInput, accept: 'image/*' }, 'fileToBase64'),
    ImageRect({ src: base64 }),
  ])
}

export function ClipImageDemo() {
  const [base64, setBase64] = useState('')
  const [clippedBase64, setClippedBase64] = useState('')
  const [resizedBase64, setResizedBase64] = useState('')

  const onInput = useCallback(async (e: any) => {
    if (!e?.target?.files) return

    const _base64 = await okanvas.fileToBase64(e.target.files[0])
    const _image = await okanvas.base64ToImage(_base64)
    const rect = {
      x: _image.width * 0.3,
      y: _image.height * 0.2,
      width: _image.width * 0.4,
      height: _image.height * 0.6,
    }
    const srcWithRect = await okanvas.drawRectOnImage(_image, rect)
    const _clippedBase64 = await okanvas.clipImage(_image, rect)
    const _resizedBase64 = await okanvas.clipImage(_image, rect, {
      width: rect.width * 2,
      height: rect.height,
    })
    setBase64(srcWithRect)
    setClippedBase64(_clippedBase64)
    setResizedBase64(_resizedBase64)
  }, [])

  return h('div', null, [
    h('h2', null, 'clipImage'),
    h('input', { type: 'file', accept: 'image/*', onInput }, 'clipImage'),
    h('p', null, 'src & rectangle'),
    ImageRect({ src: base64 }),
    h('p', null, 'clipped'),
    ImageRect({ src: clippedBase64 }),
    h('p', null, 'clipped & resized: width * 2'),
    ImageRect({ src: resizedBase64 }),
  ])
}
