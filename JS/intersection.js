//
// Code by gaschavardes
// https://github.com/gaschavardes
//

import Bowser from 'bowser';
export default class Intersection {
  constructor () {
    this.isMobile = Bowser.getParser(window.navigator.userAgent).parsedResult.platform.type !== 'desktop'
    this.init()
    document.addEventListener('newChildren', this.init.bind(this))
  }
  init () {
    this.items = Array.from(document.querySelectorAll('.to-animate'))

    // eslint-disable-next-line
    let observer = new IntersectionObserver(this.animate.bind(this), {
      threshold: this.isMobile ? 0.01 : 0.2,
      rootMargin: '100px 500px'
    })
    this.items.map(el => {
      observer.observe(el)
    })

  }
  animate (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden')
      }
    }
  }

}
