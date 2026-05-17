import { useEffect } from 'react'

const REVEAL_SELECTOR =
  '.flow-step, .problem-card, .feat-card, .step-item, .vision-card'

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
