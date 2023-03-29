export function mouseFollower(element: HTMLElement | string, trasformStyle: string = '') {
  const el = typeof element === 'string' ? (document.querySelector(element) as HTMLElement) : element
  document.addEventListener('mousemove', (e) => {
    const boxX = el.offsetLeft + el.offsetWidth / 2
    const boxY = el.offsetTop + el.offsetHeight / 2
    const angleX = (e.clientY - boxY) * -0.01
    const angleY = (e.clientX - boxX) * 0.01

    const value = `rotate3d(1, 0, 0, ${angleX}deg) rotate3d(0, 1, 0, ${angleY}deg)`
    el.style.transform = `${value} ${trasformStyle}`
  })
}
