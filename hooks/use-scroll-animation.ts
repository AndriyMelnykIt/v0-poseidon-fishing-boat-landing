"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Відключаємо спостереження після появи
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Запуск анімації коли 10% елемента видно
        rootMargin: "50px", // Додатковий відступ для раннього запуску
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}
