import * as files from '../src/files'
import { imageBase64 } from './assets'

describe('files', () => {
  it('base64ToImage', async () => {
    const image = await files.base64ToImage(imageBase64)
    expect(image.width).toBeGreaterThan(0)
    expect(image.height).toBeGreaterThan(0)
  })
})
