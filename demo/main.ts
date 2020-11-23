import { h, createElement, render } from 'preact'
import { ReadImageFileDemo, ClipImageDemo } from './files'
import { UseDragDemo } from './events'
import { ClipDemo } from './clip'

const App = () =>
  h('div', null, [
    createElement(ClipDemo, null),
    createElement(ReadImageFileDemo, null),
    createElement(ClipImageDemo, null),
    createElement(UseDragDemo, null),
  ])
render(App(), document.body)
