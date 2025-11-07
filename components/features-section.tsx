"use client"

import { Card } from "@/components/ui/card"
import { Navigation, Battery, Radio, Target, Gauge, Shield } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Navigation,
    title: "GPS Навігація",
    description: "Точне позиціонування та автоповернення до точки старту одним натисканням",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Radio,
    title: "Потужний сигнал",
    description: "Надійний радіозв'язок на відстані до 500 метрів без перешкод",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Battery,
    title: "Тривала автономність",
    description: "Акумулятори на 12000mAh забезпечують до 4 годин безперервної роботи",
    gradient: "from-accent to-primary",
  },
  {
    icon: Target,
    title: "Висока точність",
    description: "Доставка прикормки точно в обрану точку завдяки стабільній системі керування",
    gradient: "from-primary via-accent to-secondary",
  },
  {
    icon: Gauge,
    title: "Швидкість до 5 км/год",
    description: "Потужні двигуни забезпечують швидку доставку навіть проти течії та вітру",
    gradient: "from-secondary via-primary to-accent",
  },
  {
    icon: Shield,
    title: "Водонепроникний",
    description: "Повна захист від води (IP67) та міцний корпус для тривалої експлуатації",
    gradient: "from-accent via-secondary to-primary",
  },
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const titleAnimation = useScrollAnimation()
  const cardsAnimation = useScrollAnimation()

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={titleAnimation.ref}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-6 py-2 glass neon-border rounded-full text-sm font-bold text-primary">
            🔥 Преміум технології
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Професійний рівень
            </span>
            <br />у кожній деталі
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 text-pretty leading-relaxed font-medium">
            Передові технології для максимальної ефективності
          </p>
        </div>

        <div ref={cardsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-500 cursor-pointer glass neon-border ${
                hoveredIndex === index ? "scale-110 shadow-2xl rotate-2" : "hover:scale-105"
              } ${cardsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{
                transitionDelay: cardsAnimation.isVisible ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredIndex === index ? "scale-125 rotate-12 animate-pulse-glow" : ""
                }`}
              >
                <feature.icon className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
