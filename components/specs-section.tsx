"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const specs = {
  general: [
    { label: "Довжина", value: "65 см" },
    { label: "Ширина", value: "28 см" },
    { label: "Вага", value: "3.2 кг" },
    { label: "Вантажопідйомність", value: "2.5 кг" },
  ],
  performance: [
    { label: "Максимальна швидкість", value: "5 км/год" },
    { label: "Дальність керування", value: "500 м" },
    { label: "Час роботи", value: "3-4 години" },
    { label: "Час зарядки", value: "2-3 години" },
  ],
  features: [
    { label: "GPS модуль", value: "✓ Так" },
    { label: "Автоповернення", value: "✓ Так" },
    { label: "LED підсвітка", value: "✓ Так" },
    { label: "Сигналізація", value: "✓ Так" },
  ],
}

export function SpecsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const titleAnimation = useScrollAnimation()
  const cardsAnimation = useScrollAnimation()

  return (
    <section id="specs" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Технічні характеристики</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Детальна специфікація корабликів POSEIDON
          </p>
        </div>

        <div ref={cardsAnimation.ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            className={`p-8 bg-card transition-all duration-700 cursor-pointer ${
              hoveredCard === 0 ? "shadow-2xl scale-105 border-primary" : "hover:shadow-lg"
            } ${cardsAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 0 ? "bg-primary scale-110" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={hoveredCard === 0 ? "text-primary-foreground" : "text-primary"}
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="m15 19-3 3-3-3" />
                  <path d="m19 15 3-3-3-3" />
                  <path d="M2 12h20" />
                  <path d="m5 9-3 3 3 3" />
                  <path d="m9 5 3-3 3 3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Загальні параметри</h3>
            </div>
            <div className="space-y-4">
              {specs.general.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-card-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            className={`p-8 bg-card transition-all duration-700 cursor-pointer ${
              hoveredCard === 1 ? "shadow-2xl scale-105 border-primary" : "hover:shadow-lg"
            } ${cardsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{ transitionDelay: cardsAnimation.isVisible ? "200ms" : "0ms" }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 1 ? "bg-primary scale-110" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={hoveredCard === 1 ? "text-primary-foreground" : "text-primary"}
                >
                  <path d="M12 2v20" />
                  <path d="m15 19-3 3-3-3" />
                  <path d="m19 15 3-3-3-3" />
                  <path d="M2 12h20" />
                  <path d="m5 9-3 3 3 3" />
                  <path d="m9 5 3-3 3 3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Продуктивність</h3>
            </div>
            <div className="space-y-4">
              {specs.performance.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-card-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            className={`p-8 bg-card transition-all duration-700 cursor-pointer ${
              hoveredCard === 2 ? "shadow-2xl scale-105 border-primary" : "hover:shadow-lg"
            } ${cardsAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            style={{ transitionDelay: cardsAnimation.isVisible ? "400ms" : "0ms" }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 2 ? "bg-primary scale-110" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={hoveredCard === 2 ? "text-primary-foreground" : "text-primary"}
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Функції</h3>
            </div>
            <div className="space-y-4">
              {specs.features.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-primary">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
