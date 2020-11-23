import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import * as okanvas from '../src/okanvas'

function vectorInfo(name: string, vector: okanvas.Vector | null) {
  return vector
    ? h('p', null, `${name}: { x: ${vector.x}, y: ${vector.y} }`)
    : h('p', null, `${name}: null`)
}

export function UseDragDemo() {
  const [base, setBase] = useState<okanvas.Vector | null>(null)
  const [current, setCurrent] = useState<okanvas.Vector | null>(null)
  const [diff, setDiff] = useState<okanvas.Vector | null>(null)
  const [dragState, setDragState] = useState<any>(null)

  useEffect(() => {
    const _dragState = okanvas.useDrag((arg) => {
      setBase(arg.base)
      setCurrent(arg.p)
      setDiff(arg.d)
    })
    setDragState(_dragState)
    return okanvas.useWindowPointerEffect({
      onMove: _dragState.onMove,
      onUp: _dragState.onUp,
    })
  }, [])

  return h('div', null, [
    h('h2', null, 'useDrag'),
    vectorInfo('base', base),
    vectorInfo('current', current),
    vectorInfo('diff', diff),
    h('div', {
      ...(dragState
        ? {
            onMouseDown: dragState.onDown,
            onTouchStart: dragState.onDown,
          }
        : {}),
      style: {
        border: '1px solid #000',
        width: '200px',
        height: '200px',
      },
    }),
  ])
}
