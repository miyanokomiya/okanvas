import * as target from '../src/canvas'

describe('canvas', () => {
  describe('getRate', () => {
    describe('viewSize: { width: 10, height: 20 }', () => {
      const viewSize = {
        width: 10,
        height: 20,
      }
      it.each([
        [null, { minRate: 1, maxRate: 1, rateW: 1, rateH: 1 }],
        [
          { width: 10, height: 20 },
          { minRate: 1, maxRate: 1, rateW: 1, rateH: 1 },
        ],
        [
          { width: 20, height: 10 },
          { minRate: 0.5, maxRate: 2, rateW: 2, rateH: 0.5 },
        ],
        [
          { width: 20, height: 60 },
          { minRate: 2, maxRate: 3, rateW: 2, rateH: 3 },
        ],
      ])('objectSize: %s => %s', (objectSize, result) => {
        expect(target.getRate(viewSize, objectSize)).toEqual(result)
      })
    })
  })

  describe('getViewBoxSize', () => {
    it('objectSize can null', () => {
      expect(target.getViewBoxSize(null, 2, 3)).toEqual({
        width: 1,
        height: 1,
      })
    })
    describe('objectSize: { width: 10, height: 20 }', () => {
      const objectSize = {
        width: 10,
        height: 20,
      }
      it.each([
        [1, 1, { width: 10, height: 20 }],
        [3, 2, { width: 10, height: 30 }],
        [2, 3, { width: 15, height: 20 }],
      ])('rateW: %s, rateH: %s => %s', (rateW, rateH, result) => {
        expect(target.getViewBoxSize(objectSize, rateW, rateH)).toEqual(result)
      })
    })
  })

  describe('getViewBoxMargin', () => {
    const viewBoxSize = {
      width: 10,
      height: 20,
    }

    describe('viewBoxSize: { width: 10, height: 20 }', () => {
      it.each([
        [null, { x: 0, y: 0 }],
        [
          { width: 10, height: 20 },
          { x: 0, y: 0 },
        ],
        [
          { width: 14, height: 26 },
          { x: -2, y: -3 },
        ],
      ])('objectSize: %s => %s', (objectSize, result) => {
        expect(target.getViewBoxMargin(viewBoxSize, objectSize)).toEqual(result)
      })
    })
  })

  describe('getCentralizedViewBox', () => {
    const viewSize = {
      width: 10,
      height: 20,
    }

    describe('viewSize: { width: 10, height: 20 }', () => {
      it.each([
        [null, { x: 0, y: 0, width: 10, height: 20 }],
        [
          { width: 10, height: 20 },
          { x: -0, y: -0, width: 10, height: 20 },
        ],
        [
          { width: 20, height: 40 },
          { x: -0, y: -0, width: 20, height: 40 },
        ],
        [
          { width: 20, height: 20 },
          { x: -0, y: -10, width: 20, height: 40 },
        ],
        [
          { width: 10, height: 30 },
          { x: -2.5, y: -0, width: 15, height: 30 },
        ],
      ])('objectSize: %s => %s', (objectSize, result) => {
        expect(target.getCentralizedViewBox(viewSize, objectSize)).toEqual(
          result
        )
      })
    })
  })
})
