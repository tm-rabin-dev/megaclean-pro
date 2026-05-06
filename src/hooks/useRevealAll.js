import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useRevealAll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
      )

      document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
        el.classList.remove('is-visible')
        observer.observe(el)
      })

      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])
}
