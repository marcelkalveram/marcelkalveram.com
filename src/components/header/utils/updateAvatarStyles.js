import { setProperty } from './documentProperties'
import { clamp } from './clamp'

export function updateAvatarStyles(isHomePage, downDelay) {
  if (!isHomePage) {
    return
  }

  let fromScale = 1
  let toScale = 36 / 64
  let fromX = 0
  let toX = 2 / 16

  let scrollY = downDelay - window.scrollY

  let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
  scale = clamp(scale, fromScale, toScale)

  let x = (scrollY * (fromX - toX)) / downDelay + toX
  x = clamp(x, fromX, toX)

  setProperty(
    '--avatar-image-transform',
    `translate3d(${x}rem, 0, 0) scale(${scale})`,
  )

  let borderScale = 1 / (toScale / scale)
  let borderX = (-toX + x) * borderScale
  let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

  setProperty('--avatar-border-transform', borderTransform)
  setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
}
