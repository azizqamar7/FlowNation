import { gsap } from 'gsap'

export const buttonHoverIx = () => {
  const buttons = document.querySelectorAll('[button]')

  // Apply Interactions on all buttons
  buttons.forEach((button) => {
    const buttonOverlayWrapper = button.querySelector(
      '[button-overlay-wrapper]'
    )
    const buttonOverlay = button.querySelector('[button-overlay]')
    const eyes = button.querySelectorAll('[eye]')

    const calculateScaleValue = () => {
      let buttonRect = button.getBoundingClientRect()
      // Calculate Scale Value for each button Start
      let buttonCenterX = buttonRect.left + buttonRect.width / 2
      let buttonCenterY = buttonRect.top + buttonRect.height / 2

      Math.getDistance = function (x1, y1, x2, y2) {
        let xs = x2 - x1,
          ys = y2 - y1
        xs *= xs
        ys *= ys
        return Math.sqrt(xs + ys)
      }

      let radius = Math.getDistance(
        buttonRect.left,
        buttonRect.top,
        buttonCenterX,
        buttonCenterY
      )

      let fullWidth = radius * 2
      let percentIncrease = fullWidth / 100
      return percentIncrease
    }
    let percentIncrease = calculateScaleValue()
    let exitTime = 0
    let tl = gsap
      .timeline({ paused: true })
      .to(buttonOverlayWrapper, { y: '-50%', duration: 0.3 })
      .to(buttonOverlay, { scale: percentIncrease * 2.5, duration: 0.5 })
      .to(eyes, { y: '300%', duration: 0.3 }, '-=0.5')
      .to(eyes[0], { x: '-300%', duration: 0.3 }, '<')
      .to(eyes[1], { x: '300%', duration: 0.3 }, '<')
      .addPause('exit')
    exitTime = tl.duration()
    tl.to(buttonOverlay, { scale: 0 })
      .set([buttonOverlay, buttonOverlayWrapper], { clearProps: 'all' })
      .set(eyes, { clearProps: 'all' })

    button.addEventListener('mouseenter', () => {
      if (tl.time() < exitTime) {
        tl.play()
      } else {
        tl.restart()
      }
    })

    button.addEventListener('mouseleave', () => {
      if (tl.time() < exitTime) {
        tl.reverse()
      } else {
        tl.play()
      }
    })
  })
}
