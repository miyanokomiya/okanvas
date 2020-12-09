import * as target from '../src/events'

describe('events', () => {
  const currentTarget = {
    getBoundingClientRect: () => ({
      left: 100,
      top: 200,
      width: 300,
      height: 400,
    }),
  }
  const touches1 = [{ pageX: 110, pageY: 220 }]
  const touches2 = [...touches1, { pageX: 330, pageY: 440 }]
  beforeEach(() => {
    ;(window.pageXOffset as any) = 0
    ;(window.pageYOffset as any) = 0
  })

  describe('isTouch', () => {
    it('check touch events', () => {
      expect(target.isTouch({ touches: touches1 } as any)).toBe(true)
      expect(target.isTouch({} as any)).toBe(false)
    })
  })

  describe('isMulitTouch', () => {
    it('check multi touches', () => {
      expect(target.isMulitTouch({} as any)).toBe(false)
      expect(target.isMulitTouch({ touches: touches1 } as any)).toBe(false)
      expect(target.isMulitTouch({ touches: touches2 } as any)).toBe(true)
    })
  })

  describe('isTouchExist', () => {
    it('check multi touches', () => {
      expect(target.isTouchExist({} as any)).toBe(false)
      expect(target.isTouchExist({ touches: touches1 } as any)).toBe(true)
      expect(target.isTouchExist({ touches: touches2 } as any)).toBe(true)
    })
  })

  describe('getPagePosition', () => {
    describe('touches', () => {
      const event = { touches: touches1 } as any
      it('get pageX & pageY', () => {
        expect(target.getPagePosition(event)).toEqual({ x: 110, y: 220 })
      })
    })
    describe('mouse', () => {
      const event = {
        pageX: 1,
        pageY: 2,
      } as any
      it('get pageX & pageY', () => {
        expect(target.getPagePosition(event)).toEqual({ x: 1, y: 2 })
      })
    })
  })

  describe('getPointInTarget', () => {
    describe('touches', () => {
      const event = { currentTarget, touches: touches2 } as any
      it('get a point in the target', () => {
        expect(target.getPointInTarget(event)).toEqual({ x: 10, y: 20 })
      })
    })
    describe('mouse', () => {
      const event = {
        currentTarget,
        pageX: 110,
        pageY: 220,
      } as any
      it('get pageX & pageY', () => {
        expect(target.getPointInTarget(event)).toEqual({ x: 10, y: 20 })
      })
    })
  })

  describe('getTouchPointsInTarget', () => {
    it('get points in the target', () => {
      const event = { currentTarget, touches: touches2 } as any
      expect(target.getTouchPointsInTarget(event)).toEqual([
        { x: 10, y: 20 },
        { x: 230, y: 240 },
      ])
    })
  })

  describe('useDrag', () => {
    it('get dragging information', () => {
      const event = { touches: touches1 } as any
      const onDrag = jest.fn()
      const preventDefault = jest.fn()
      const dragState = target.useDrag(onDrag)
      Date.now = () => 0
      dragState.onDown(event)
      dragState.onMove({
        preventDefault,
        touches: [{ pageX: 111, pageY: 222 }],
      } as any)
      dragState.onMove({
        preventDefault,
        touches: [{ pageX: 115, pageY: 227 }],
      } as any)
      Date.now = () => 100
      dragState.onUp()
      expect(preventDefault).toHaveBeenCalledTimes(2)
      expect(onDrag).toHaveBeenCalledTimes(3)
      expect(onDrag).toHaveBeenNthCalledWith(1, {
        base: { x: 110, y: 220 },
        p: { x: 111, y: 222 },
        d: { x: 1, y: 2 },
      })
      expect(onDrag).toHaveBeenNthCalledWith(2, {
        base: { x: 110, y: 220 },
        p: { x: 115, y: 227 },
        d: { x: 4, y: 5 },
      })
      expect(onDrag).toHaveBeenNthCalledWith(3, {
        base: { x: 110, y: 220 },
        p: { x: 115, y: 227 },
        d: { x: 0, y: 0 },
      })
    })
    it('emulate click', () => {
      const event = { touches: touches1 } as any
      const onDrag = jest.fn()
      const onClick = jest.fn()
      const preventDefault = jest.fn()
      const dragState = target.useDrag(onDrag, onClick)
      Date.now = () => 0
      dragState.onDown(event)
      dragState.onMove({
        preventDefault,
        touches: [{ pageX: 111, pageY: 222 }],
      } as any)
      Date.now = () => 99
      dragState.onUp()
      expect(preventDefault).toHaveBeenCalledTimes(1)
      expect(onDrag).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenNthCalledWith(1, { x: 111, y: 222 })
    })
  })

  describe('useWindowPointerEffect', () => {
    describe('empty listeners', () => {
      beforeEach(() => {
        window.ontouchstart = jest.fn()
      })
      it('do nothing', () => {
        window.addEventListener = jest.fn()
        window.removeEventListener = jest.fn()
        target.useWindowPointerEffect({})()
        expect(window.addEventListener).toHaveReturnedTimes(0)
        expect(window.removeEventListener).toHaveReturnedTimes(0)
      })
    })
    describe('can touch', () => {
      beforeEach(() => {
        window.ontouchstart = jest.fn()
      })
      it('attach all pointer listeners', () => {
        window.addEventListener = jest.fn()
        const listeners = {
          onDown: jest.fn(),
          onMove: jest.fn(),
          onUp: jest.fn(),
        }
        target.useWindowPointerEffect(listeners)
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          1,
          'mousedown',
          listeners.onDown,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          2,
          'touchstart',
          listeners.onDown,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          3,
          'mousemove',
          listeners.onMove,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          4,
          'touchmove',
          listeners.onMove,
          { capture: false, passive: false }
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          5,
          'mouseup',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          6,
          'mouseleave',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          7,
          'touchend',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          8,
          'touchcancel',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveReturnedTimes(8)
      })
      it('return a function to detach all listeners', () => {
        window.addEventListener = jest.fn()
        window.removeEventListener = jest.fn()
        const listeners = {
          onDown: jest.fn(),
          onMove: jest.fn(),
          onUp: jest.fn(),
        }
        target.useWindowPointerEffect(listeners)()
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          1,
          'mousedown',
          listeners.onDown,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          2,
          'touchstart',
          listeners.onDown,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          3,
          'mousemove',
          listeners.onMove,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          4,
          'touchmove',
          listeners.onMove,
          { capture: false }
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          5,
          'mouseup',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          6,
          'mouseleave',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          7,
          'touchend',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          8,
          'touchcancel',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveReturnedTimes(8)
      })
    })
    describe('cannot touch', () => {
      beforeEach(() => {
        delete window.ontouchstart
      })
      it('attach only mouse events', () => {
        window.addEventListener = jest.fn()
        const listeners = {
          onDown: jest.fn(),
          onMove: jest.fn(),
          onUp: jest.fn(),
        }
        target.useWindowPointerEffect(listeners)
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          1,
          'mousedown',
          listeners.onDown,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          2,
          'mousemove',
          listeners.onMove,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          3,
          'mouseup',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
          4,
          'mouseleave',
          listeners.onUp,
          false
        )
        expect(window.addEventListener).toHaveReturnedTimes(4)
      })
      it('return a function to detach all listeners', () => {
        window.addEventListener = jest.fn()
        window.removeEventListener = jest.fn()
        const listeners = {
          onDown: jest.fn(),
          onMove: jest.fn(),
          onUp: jest.fn(),
        }
        target.useWindowPointerEffect(listeners)()
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          1,
          'mousedown',
          listeners.onDown,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          2,
          'mousemove',
          listeners.onMove,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          3,
          'mouseup',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
          4,
          'mouseleave',
          listeners.onUp,
          false
        )
        expect(window.removeEventListener).toHaveReturnedTimes(4)
      })
    })
  })
})
