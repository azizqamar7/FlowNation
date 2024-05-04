import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const sectionWizardIx = () => {
  const sectionWizardTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-wizard',
      start: 'top 60%',
      //   markers: true,
    },
  })

  sectionWizardTl
    .from('.wizard_col-1', { opacity: 0, y: '40px', duration: 0.5 })
    .from('.wizard_col-2', { opacity: 0, y: '40px', duration: 0.5 }, '<40%')
}
