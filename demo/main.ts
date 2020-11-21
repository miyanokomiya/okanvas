import { h, createElement, render } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import * as okanvas from '../src/okanvas'

const styles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

function ImageRect(props: { src: string }) {
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

function ReadImageFileDemo() {
  const [base64, setBase64] = useState('')

  const onInput = useCallback(async (e: any) => {
    if (!e?.target?.files) return

    const result = await okanvas.files.readImageFile(e.target.files[0])
    setBase64(result.base64)
  }, [])

  return h('div', null, [
    h('h2', null, 'readImageFile'),
    h('input', { type: 'file', onInput }, 'readImageFile'),
    ImageRect({ src: base64 }),
  ])
}

const App = () => h('div', null, [createElement(ReadImageFileDemo, null)])
render(App(), document.body)
