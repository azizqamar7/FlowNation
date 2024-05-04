import { gsap } from 'gsap'
import { buttonHoverIx } from '../helpers/button-hover'

console.log('Hello from Join folder')

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Run Button Hover Interaction
  if (window.innerWidth > 990) {
    buttonHoverIx()
  }

  const formIx = () => {
    const formTl = gsap.timeline()

    formTl
      .from('.form_row-1 h1', { opacity: 0, y: '20%', duration: 0.7 })
      .from(
        '.feature-block',
        { opacity: 0, y: '-50%', duration: 0.5, stagger: { amount: 0.5 } },
        '<60%'
      )
      .from('form h2', { opacity: 0, y: '30%', duration: 0.5 }, '<')
      .from(
        '.form_input-row',
        { opacity: 0, y: '-50%', duration: 0.5, stagger: { amount: 0.5 } },
        '<60%'
      )
      .from(
        '.form_image-wrapper img',
        { opacity: 0, y: '4%', duration: 0.5 },
        '<'
      )
      .from('.form_image-bg', { scale: 0.5, opacity: 0, duration: 0.5 }, '<60%')
  }

  formIx()
})
