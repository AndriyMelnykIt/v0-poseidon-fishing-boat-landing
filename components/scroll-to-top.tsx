"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
