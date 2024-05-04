import { gsap } from 'gsap'
import { buttonHoverIx } from '../helpers/button-hover'
import { sectioHomeHeroIx } from './section-hero'
import { sectionWizardIx } from './section-wizard'

console.log('Hello from Home folder')

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })

  // Run Button Hover Interaction
  if (window.innerWidth > 990) {
    buttonHoverIx()
  }

  sectioHomeHeroIx()
  sectionWizardIx()
})
