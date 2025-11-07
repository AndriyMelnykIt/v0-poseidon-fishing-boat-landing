"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const plans = [
  {
    name: "POSEIDON Basic",
    price: "18,500",
    description: "Ідеальний вибір для початківців",
    features: [
      "Дальність керування 300м",
      "Базовий пульт управління",
      "Вантажопідйомність 1.5кг",
      "LED підсвітка",
      "Водонепроникний корпус",
      "Гарантія 1 рік",
    ],
  },
  {
    name: "POSEIDON Pro",
    price: "28,900",
    description: "Для професіоналів та ентузіастів",
    features: [
      "Дальність керування 500м",
      "GPS навігація",
      "Автоповернення",
      "Вантажопідйомність 2.5кг",
      "Рідкокристалічний дисплей",
      "LED підсвітка",
      "Водонепроникний корпус",
      "Гарантія 2 роки",
    ],
    popular: true,
  },
  {
    name: "POSEIDON Elite",
    price: "42,500",
    description: "Топова модель з усіма функціями",
    features: [
      "Дальність керування 800м",
      "Преміум GPS навігація",
      "Програмування маршруту",
      "Автоповернення",
      "Вантажопідйомність 3кг",
      "Преміум пульт з кольоровим LCD",
      "RGB підсвітка",
      "Ехолот (опціонально)",
      "Гарантія 3 роки",
    ],
  },
]

export function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const titleAnimation = useScrollAnimation()
  const cardsAnimation = useScrollAnimation()

  const handleOrder = (planName: string) => {
    setSelectedPlan(planName)
    setShowOrderModal(true)
  }

  return (
    <>
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            ref={titleAnimation.ref}
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
              titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Оберіть свою модель</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Три варіанти для різних потреб та бюджету
            </p>
          </div>

          <div ref={cardsAnimation.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative transition-all duration-700 cursor-pointer ${
                  plan.popular ? "border-primary shadow-lg md:scale-105 bg-card" : "bg-card"
                } ${hoveredPlan === index ? "shadow-2xl scale-105" : ""} ${
                  cardsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: cardsAnimation.isVisible ? `${index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Найпопулярніше
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">грн</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleOrder(plan.name)}
                >
                  Замовити зараз
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showOrderModal && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowOrderModal(false)}
        >
          <Card className="w-full max-w-md p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">Замовлення {selectedPlan}</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              Заповніть форму і наш менеджер зв'яжеться з вами протягом 15 хвилин для уточнення деталей замовлення.
            </p>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ім'я</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше ім'я"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+380"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email (опціонально)</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Коментар</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                  placeholder="Додаткова інформація..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Відправити замовлення
              </Button>
            </form>
          </Card>
        </div>
      )}
    </>
  )
}
