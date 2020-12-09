import type { Vector } from './types'

function canTouch(): boolean {
  return 'ontouchstart' in window
}

type MouseOrTouchEvent = MouseEvent | TouchEvent

export function isTouch(e: MouseOrTouchEvent): e is TouchEvent {
  return 'touches' in e
}

export function isMulitTouch(e: MouseOrTouchEvent): e is TouchEvent {
  return isTouch(e) && e.touches.length > 1
}

export function isTouchExist(e: TouchEvent): boolean {
  return isTouch(e) && e.touches.length > 0
}

export function getPagePosition(e: MouseOrTouchEvent): Vector {
  return isTouch(e)
    ? {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
      }
    : {
        x: e.pageX,
        y: e.pageY,
      }
}

export function getPointInTarget(e: MouseOrTouchEvent): Vector {
  const target = e.currentTarget as Element
  if (!target) return { x: 0, y: 0 }

  let x, y
  const rect = target.getBoundingClientRect()
  const dx = rect.left + window.pageXOffset
  const dy = rect.top + window.pageYOffset

  if (isTouch(e)) {
    const touch = e.touches[0]
    x = touch.pageX - dx
    y = touch.pageY - dy
  } else {
    x = e.pageX - dx
    y = e.pageY - dy
  }
  return {
    x: x,
    y: y,
  }
}

export function getTouchPointsInTarget(e: TouchEvent): Vector[] {
  const target = e.currentTarget as Element
  if (!target) return []

  const ret = []
  const rect = target.getBoundingClientRect()
  const dx = rect.left + window.pageXOffset
  const dy = rect.top + window.pageYOffset

  for (let i = 0; i < e.touches.length; i++) {
    const touch = e.touches[i]
    ret.push({
      x: touch.pageX - dx,
      y: touch.pageY - dy,
    })
  }

  return ret
}

export interface PointerListeners {
  onDown: (e: MouseOrTouchEvent) => void
  onMove: (e: MouseOrTouchEvent) => void
  onUp: () => void
}

export interface DragArgs {
  base: Vector
  p: Vector
  d: Vector
}

export function useDrag(
  dragCallback: (arg: DragArgs) => void,
  clickCallback: (arg: Vector) => void = () => {}
): PointerListeners {
  let dragging = false
  let base: Vector | null = null
  let past: Vector | null = null
  let current: Vector | null = null
  let downAt = 0

  const onDown = (e: MouseOrTouchEvent) => {
    dragging = true
    base = getPagePosition(e)
    current = { ...base }
    past = { ...base }
    downAt = Date.now()
  }

  const onMove = (e: MouseOrTouchEvent) => {
    if (!dragging) return

    e.preventDefault()
    current = getPagePosition(e)
    if (!dragging || !base || !current || !past) return

    dragCallback({
      base,
      p: { ...current },
      d: { x: current.x - past.x, y: current.y - past.y },
    })
    past = { ...current }
  }

  const onUp = () => {
    if (current && Date.now() - downAt < 100) {
      clickCallback({ ...current })
    } else if (dragging && base && current) {
      dragCallback({ base, p: { ...current }, d: { x: 0, y: 0 } })
    }
    dragging = false
    base = null
    current = null
    past = null
    downAt = 0
  }
  return {
    onDown,
    onMove,
    onUp,
  }
}

export function useWindowPointerEffect(listeners: Partial<PointerListeners>) {
  const _canTouch = canTouch()
  if (listeners.onDown) {
    window.addEventListener('mousedown', listeners.onDown, false)
    if (_canTouch) {
      window.addEventListener('touchstart', listeners.onDown, false)
    }
  }
  if (listeners.onMove) {
    window.addEventListener('mousemove', listeners.onMove, false)
    if (_canTouch) {
      window.addEventListener('touchmove', listeners.onMove, {
        capture: false,
        passive: false,
      })
    }
  }
  if (listeners.onUp) {
    window.addEventListener('mouseup', listeners.onUp, false)
    window.addEventListener('mouseleave', listeners.onUp, false)
    if (_canTouch) {
      window.addEventListener('touchend', listeners.onUp, false)
      window.addEventListener('touchcancel', listeners.onUp, false)
    }
  }
  return () => {
    if (listeners.onDown) {
      window.removeEventListener('mousedown', listeners.onDown, false)
      if (_canTouch) {
        window.removeEventListener('touchstart', listeners.onDown, false)
      }
    }
    if (listeners.onMove) {
      window.removeEventListener('mousemove', listeners.onMove, false)
      if (_canTouch) {
        window.removeEventListener('touchmove', listeners.onMove, {
          capture: false,
        })
      }
    }
    if (listeners.onUp) {
      window.removeEventListener('mouseup', listeners.onUp, false)
      window.removeEventListener('mouseleave', listeners.onUp, false)
      if (_canTouch) {
        window.removeEventListener('touchend', listeners.onUp, false)
        window.removeEventListener('touchcancel', listeners.onUp, false)
      }
    }
  }
}
