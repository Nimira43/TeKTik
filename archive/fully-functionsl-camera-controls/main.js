import { createScene } from './src/createScene.js'

window.onload = () => {
  window.scene = createScene()
  document.addEventListener('mousedown', window.scene.onMouseDown, false)
  document.addEventListener('mouseup', window.scene.onMouseUp, false)
  document.addEventListener('mousemove', window.scene.onMouseMove, false)
  window.scene.start()
}

