import { h, createElement, render } from 'preact'
import { ReadImageFileDemo, ClipImageDemo } from './files'
import { UseDragDemo } from './events'

const App = () =>
  h('div', null, [
    createElement(ReadImageFileDemo, null),
    createElement(ClipImageDemo, null),
    createElement(UseDragDemo, null),
  ])
render(App(), document.body)
