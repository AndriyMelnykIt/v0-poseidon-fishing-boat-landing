"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Anchor } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-elegant shadow-lg" : "bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-2 font-serif font-bold text-2xl text-primary group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6 text-accent group-hover:-rotate-12 transition-transform" />
              POSEIDON
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
            >
              Особливості
            </button>
            <button
              onClick={() => scrollToSection("comparison")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
            >
              Моделі
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
            >
              Ціни
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("pricing")}
            >
              Замовити зараз
            </Button>
          </div>

          <button
            className="md:hidden glass-elegant rounded-lg p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {["features", "comparison", "gallery", "pricing"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium text-foreground/70 hover:text-primary text-left py-2 px-4 rounded-lg hover:bg-muted transition-all cursor-pointer"
              >
                {section === "features" && "Особливості"}
                {section === "comparison" && "Моделі"}
                {section === "gallery" && "Галерея"}
                {section === "pricing" && "Ціни"}
              </button>
            ))}
            <Button
              className="font-medium mt-4 bg-primary hover:bg-primary/90 cursor-pointer"
              onClick={() => scrollToSection("pricing")}
            >
              Замовити зараз
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
