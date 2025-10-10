import { setProperty, removeProperty } from './documentProperties'
import { clamp } from './clamp'

export function updateHeaderStyles(headerRef, isInitial, downDelay, upDelay) {
  if (!headerRef.current) {
    return
  }

  let { top, height } = headerRef.current.getBoundingClientRect()
  let scrollY = clamp(
    window.scrollY,
    0,
    document.body.scrollHeight - window.innerHeight,
  )

  if (isInitial.current) {
    setProperty('--header-position', 'sticky')
  }

  setProperty('--content-offset', `${downDelay}px`)

  if (isInitial.current || scrollY < downDelay) {
    setProperty('--header-height', `${downDelay + height}px`)
    setProperty('--header-mb', `${-downDelay}px`)
  } else if (top + height < -upDelay) {
    let offset = Math.max(height, scrollY - upDelay)
    setProperty('--header-height', `${offset}px`)
    setProperty('--header-mb', `${height - offset}px`)
  } else if (top === 0) {
    setProperty('--header-height', `${scrollY + height}px`)
    setProperty('--header-mb', `${-scrollY}px`)
  }

  if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
    setProperty('--header-inner-position', 'fixed')
    removeProperty('--header-top')
    removeProperty('--avatar-top')
  } else {
    removeProperty('--header-inner-position')
    setProperty('--header-top', '0px')
    setProperty('--avatar-top', '0px')
  }
}
