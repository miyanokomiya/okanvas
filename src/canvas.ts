import { Size, Rectangle } from './types'

export function getRate(
  viewSize: Size,
  objectSize: Size | null
): { minRate: number; maxRate: number; rateW: number; rateH: number } {
  if (!objectSize) return { minRate: 1, maxRate: 1, rateW: 1, rateH: 1 }

  const rateW = objectSize.width / viewSize.width
  const rateH = objectSize.height / viewSize.height
  return {
    minRate: Math.min(rateW, rateH),
    maxRate: Math.max(rateW, rateH),
    rateW,
    rateH,
  }
}

export function getViewBoxSize(
  objectSize: Size | null,
  rateW: number,
  rateH: number
): {
  width: number
  height: number
} {
  if (!objectSize) return { width: 1, height: 1 }
  if (rateW > rateH) {
    return {
      width: objectSize.width,
      height: (objectSize.height / rateH) * rateW,
    }
  } else {
    return {
      width: (objectSize.width / rateW) * rateH,
      height: objectSize.height,
    }
  }
}

export function getViewBoxMargin(
  viewBoxSize: Size,
  objectSize: Size | null
): {
  x: number
  y: number
} {
  if (!objectSize) return { x: 0, y: 0 }
  return {
    x: (viewBoxSize.width - objectSize.width) / 2,
    y: (viewBoxSize.height - objectSize.height) / 2,
  }
}

export function getCentralizedViewBox(
  viewSize: Size,
  objectSize: Size | null
): Rectangle {
  const { rateW, rateH } = getRate(viewSize, objectSize)
  const viewBoxSize = getViewBoxSize(objectSize, rateW, rateH)
  const viewBoxMargin = getViewBoxMargin(viewBoxSize, objectSize)
  return {
    x: -viewBoxMargin.x,
    y: -viewBoxMargin.y,
    ...viewBoxSize,
  }
}
