import * as files from '../src/files'
import { image200x100 } from './assets'

describe('files', () => {
  describe('fileToBase64', () => {
    it('get base64 of the file', async () => {
      const base64 = await files.fileToBase64(new File([], 'tmp.txt'))
      expect(base64).toContain('data')
    })
  })

  describe('base64ToImage', () => {
    it('convert base64 to image', async () => {
      const image = await files.base64ToImage(image200x100)
      expect(image.width).toBe(200)
      expect(image.height).toBe(100)
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
      const clipeed = await files.clipImage(image200x100, rect)
      expect(clipeed).toContain('data')
    })
    it('accept arg: Image', async () => {
      const image = await files.base64ToImage(image200x100)
      const clipeed = await files.clipImage(image, rect)
      expect(clipeed).toContain('data')
    })
    it('set size', async () => {
      const image = await files.base64ToImage(image200x100)
      const clipeed = await files.clipImage(image, rect, {
        width: 20,
        height: 30,
      })
      expect(clipeed).toContain('data')
    })
  })

  describe('clipImageToBlob', () => {
    const rect = {
      x: -10,
      y: 10,
      width: 20,
      height: 30,
    }
    it('get blob of the clipped image', async () => {
      const clipeed = await files.clipImageToBlob(image200x100, rect)
      expect(clipeed instanceof Blob).toBe(true)
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
      const clipeed = await files.drawRectOnImage(image200x100, rect)
      expect(clipeed).toContain('data')
    })
    it('set custom line styles', async () => {
      const clipeed = await files.drawRectOnImage(
        image200x100,
        rect,
        (ctx) => (ctx.globalAlpha = 0.4)
      )
      expect(clipeed).toContain('data')
    })
  })
})
