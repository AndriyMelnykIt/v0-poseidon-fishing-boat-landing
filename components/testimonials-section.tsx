"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Олександр Петренко",
    location: "Київ",
    rating: 5,
    text: "POSEIDON Pro повністю змінив мій підхід до риболовлі. GPS навігація працює бездоганно, а дальність керування перевищила очікування. За 6 місяців жодних проблем!",
    image: "/portrait-fisherman-man.jpg",
  },
  {
    name: "Михайло Коваль",
    location: "Львів",
    rating: 5,
    text: "Придбав Elite модель і не шкодую жодної копійки. Можливість програмувати маршрут — це просто фантастика. Тепер завжди доставляю прикормку точно в потрібне місце.",
    image: "/portrait-man-outdoors.jpg",
  },
  {
    name: "Сергій Мельник",
    location: "Дніпро",
    rating: 5,
    text: "Використовую Basic модель вже рік. Для початківця — це ідеальний варіант. Простий у використанні, надійний, і ціна адекватна. Рекомендую!",
    image: "/portrait-happy-man.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Відгуки наших клієнтів</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Понад 500 задоволених рибалок по всій Україні
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 bg-card">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
