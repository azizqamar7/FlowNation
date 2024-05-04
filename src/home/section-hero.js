import { gsap } from 'gsap'

export const sectioHomeHeroIx = () => {
  const sectioHomeHeroTl = gsap.timeline()

  sectioHomeHeroTl.clear().progress()
  sectioHomeHeroTl
    .from('.brand-logo .logo-wrapper', {
      y: '200%',
      duration: 0.7,
      delay: 0.5,
    })
    .from(
      '.navbar_component .button',
      { y: '-300%', ease: 'back.out(1.7)', duration: 0.7 },
      '<'
    )
    .from('.top_sub-title', { opacity: 0, y: '20%', duration: 0.5 })
    .from('.title', { opacity: 0, y: '10%', duration: 0.5 }, '<40%')
    .from(
      '.section_home-hero p',
      {
        y: '50%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.oout',
      },
      '<'
    )
    .from(
      '[hero-button]',
      { y: '50%', opacity: 0, duration: 0.5, ease: 'power1.out' },
      '<20%'
    )
}
