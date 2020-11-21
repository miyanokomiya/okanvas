import * as files from '../src/files'
import { imageBase64 } from './assets'

describe('files', () => {
  describe('fileToBase64', () => {
    it('get base64 of the file', async () => {
      const base64 = await files.fileToBase64(new File([], 'tmp.txt'))
      expect(base64).toContain('data')
    })
  })

  describe('base64ToImage', () => {
    it('convert base64 to image', async () => {
      const image = await files.base64ToImage(imageBase64)
      expect(image.width).toBeGreaterThan(0)
      expect(image.height).toBeGreaterThan(0)
    })
  })

  describe('clipImage', () => {
    const rect = {
      x: -10,
      y: 10,
      width: 20,
      height: 30,
    }
    it('get base64 of the clipped image', async () => {
      const clipeed = await files.clipImage(imageBase64, rect)
      expect(clipeed).toContain('data')
    })
    it('accept arg: Image', async () => {
      const image = await files.base64ToImage(imageBase64)
      const clipeed = await files.clipImage(image, rect)
      expect(clipeed).toContain('data')
    })
    it('set size', async () => {
      const image = await files.base64ToImage(imageBase64)
      const clipeed = await files.clipImage(image, rect, {
        width: 20,
        height: 30,
      })
      expect(clipeed).toContain('data')
    })
  })

  describe('drawRectOnImage', () => {
    const rect = {
      x: -10,
      y: 10,
      width: 20,
      height: 30,
    }
    it('get base64 of the image with clipping rectangle', async () => {
      const clipeed = await files.drawRectOnImage(imageBase64, rect)
      expect(clipeed).toContain('data')
    })
    it('set custom line styles', async () => {
      const clipeed = await files.drawRectOnImage(
        imageBase64,
        rect,
        (ctx) => (ctx.globalAlpha = 0.4)
      )
      expect(clipeed).toContain('data')
    })
  })
})
