"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Яка дальність керування корабликом?",
    answer:
      "Залежить від моделі: Basic — 300м, Pro — 500м, Elite — 800м. Всі моделі мають стабільний зв'язок без перешкод.",
  },
  {
    question: "Скільки часу працює кораблик від одного заряду?",
    answer:
      "Basic — до 2 годин, Pro — до 4 годин, Elite — до 6 годин безперервної роботи. Час залежить від умов використання.",
  },
  {
    question: "Чи можна використовувати кораблик у дощ або туман?",
    answer: "Так! Всі моделі мають водонепроникний корпус (IP67) і можуть працювати у будь-яких погодних умовах.",
  },
  {
    question: "Чи складно керувати корабликом для початківця?",
    answer:
      "Ні! Пульт управління інтуїтивно зрозумілий. До кожної моделі додається детальна інструкція українською мовою та навчальне відео.",
  },
  {
    question: "Яка гарантія на кораблики?",
    answer:
      "Basic — 1 рік, Pro — 2 роки, Elite — 3 роки офіційної гарантії. Також пропонуємо платне сервісне обслуговування.",
  },
  {
    question: "Чи доставляєте по всій Україні?",
    answer:
      "Так, ми доставляємо по всій Україні службами доставки Нова Пошта та УкрПошта. Доставка безкоштовна при замовленні від 15,000 грн.",
  },
  {
    question: "Чи можна повернути товар, якщо не підійде?",
    answer:
      "Так, ви можете повернути товар протягом 14 днів з моменту отримання, якщо він не використовувався і збережено товарний вигляд.",
  },
  {
    question: "Які акумулятори використовуються?",
    answer:
      "Використовуються якісні Li-Ion акумулятори. До кожної моделі входить зарядний пристрій. Додаткові акумулятори можна придбати окремо.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Часті питання</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Відповіді на найпопulярніші питання про кораблики POSEIDON
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
