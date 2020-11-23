import { Rectangle } from './types'

export type ImageSrc = string | HTMLImageElement

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => resolve(fileReader.result as string)
    fileReader.onerror = reject
    fileReader.readAsDataURL(file)
  })
}

export function base64ToImage(base64: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = base64
  })
}

async function toImage(src: ImageSrc): Promise<HTMLImageElement> {
  if (src instanceof Image) return src
  const image = await base64ToImage(src)
  return image
}

export async function clipImage(
  src: ImageSrc,
  rect: Rectangle,
  size?: { width: number; height: number }
): Promise<string> {
  const _size = size ?? { width: rect.width, height: rect.height }

  const image = await toImage(src)
  const canvas = document.createElement('canvas')
  canvas.width = _size.width
  canvas.height = _size.height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Failed to get 2d-context from a canvas.')

  ctx.drawImage(
    image,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    0,
    0,
    canvas.width,
    canvas.height
  )
  return canvas.toDataURL()
}

export async function drawRectOnImage(
  src: ImageSrc,
  rect: Rectangle,
  setLineStyle?: (ctx: CanvasRenderingContext2D) => void
): Promise<string> {
  const image = await toImage(src)
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Failed to get 2d-context from a canvas.')

  ctx.drawImage(image, 0, 0, image.width, image.height)
  if (setLineStyle) {
    setLineStyle(ctx)
  } else {
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3
  }
  ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
  return canvas.toDataURL()
}
