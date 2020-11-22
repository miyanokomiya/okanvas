import * as okanvas from '../src/okanvas'

describe('okanvas', () => {
  it('some exports', () => {
    expect(okanvas.useDrag).not.toBe(undefined)
    expect(okanvas.fileToBase64).not.toBe(undefined)
  })
})
