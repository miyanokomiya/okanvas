import throttle from 'just-throttle'
import type { Vector } from './types'

const THROTTLE = 1000 / 60
const CAN_TOUCH = 'ontouchstart' in window

export function isTouch(e: MouseEvent | TouchEvent): e is TouchEvent {
  return 'touches' in e
}

export function isMulitTouch(e: MouseEvent | TouchEvent): e is TouchEvent {
  return isTouch(e) && e.touches.length > 1
}

export function isTouchExist(e: TouchEvent): boolean {
  return isTouch(e) && e.touches.length > 0
}

export function getPagePosition(e: MouseEvent | TouchEvent): Vector {
  if (isTouch(e)) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    }
  } else {
    return {
      x: e.pageX,
      y: e.pageY,
    }
  }
}

export function getPointInTarget(e: MouseEvent | TouchEvent): Vector {
  const target = (e.currentTarget || e.target) as Element
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
  const target = (e.currentTarget || e.target) as Element
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

export function useDrag(
  dragCallback: (arg: { base: Vector; p: Vector; d: Vector }) => void,
  clickCallback: (arg: Vector) => void = () => {}
): {
  onDown: (e: MouseEvent | TouchEvent) => void
  onMove: (e: MouseEvent | TouchEvent) => void
  onUp: () => void
} {
  let dragging = false
  let base: Vector | null = null
  let past: Vector | null = null
  let current: Vector | null = null
  let downAt = 0

  const onDown = (e: MouseEvent | TouchEvent) => {
    dragging = true
    base = getPagePosition(e)
    current = { ...base }
    downAt = Date.now()
  }

  const throttleedCallback = throttle(
    () => {
      if (!dragging) return
      if (!base) return
      if (!current) return

      if (past) {
        dragCallback({
          base,
          p: { ...current },
          d: { x: current.x - past.x, y: current.y - past.y },
        })
      }
      past = { ...current }
    },
    THROTTLE,
    true
  )

  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return

    e.preventDefault()
    current = getPagePosition(e)
    throttleedCallback()
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

export function useWindowMouseEffect(listeners: {
  onDown?: (e: MouseEvent | TouchEvent) => void
  onMove?: (e: MouseEvent | TouchEvent) => void
  onUp?: () => void
}) {
  if (listeners.onDown) {
    window.addEventListener('mousedown', listeners.onDown, false)
    if (CAN_TOUCH) {
      window.addEventListener('touchstart', listeners.onDown, false)
    }
  }
  if (listeners.onMove) {
    window.addEventListener('mousemove', listeners.onMove, false)
    if (CAN_TOUCH) {
      window.addEventListener('touchmove', listeners.onMove, {
        capture: false,
        passive: false,
      })
    }
  }
  if (listeners.onUp) {
    window.addEventListener('mouseup', listeners.onUp, false)
    window.addEventListener('mouseleave', listeners.onUp, false)
    if (CAN_TOUCH) {
      window.addEventListener('touchend', listeners.onUp, false)
      window.addEventListener('touchcancel', listeners.onUp, false)
    }
  }
  return () => {
    if (listeners.onDown) {
      window.removeEventListener('mousedown', listeners.onDown, false)
      if (CAN_TOUCH) {
        window.removeEventListener('touchstart', listeners.onDown, false)
      }
    }
    if (listeners.onMove) {
      window.removeEventListener('mousemove', listeners.onMove, false)
      if (CAN_TOUCH) {
        window.removeEventListener('touchmove', listeners.onMove, {
          capture: false,
        })
      }
    }
    if (listeners.onUp) {
      window.removeEventListener('mouseup', listeners.onUp, false)
      window.removeEventListener('mouseleave', listeners.onUp, false)
      if (CAN_TOUCH) {
        window.removeEventListener('touchend', listeners.onUp, false)
        window.removeEventListener('touchcancel', listeners.onUp, false)
      }
    }
  }
}