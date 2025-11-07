"use client"

import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useState } from "react"

const comparisonData = [
  { feature: "GPS навігація", basic: false, pro: true, elite: true },
  { feature: "Автоповернення", basic: false, pro: true, elite: true },
  { feature: "Програмування маршруту", basic: false, pro: false, elite: true },
  { feature: "Дальність керування", basic: "300м", pro: "500м", elite: "800м" },
  { feature: "Вантажопідйомність", basic: "1.5кг", pro: "2.5кг", elite: "3кг" },
  { feature: "Дисплей пульта", basic: "LED", pro: "LCD", elite: "Кольоровий LCD" },
  { feature: "Підсвітка", basic: "LED", pro: "LED", elite: "RGB" },
  { feature: "Час роботи", basic: "2год", pro: "4год", elite: "6год" },
  { feature: "Ехолот", basic: false, pro: false, elite: "Опціонально" },
  { feature: "Гарантія", basic: "1 рік", pro: "2 роки", elite: "3 роки" },
]

export function ComparisonSection() {
  const [activeModel, setActiveModel] = useState<"basic" | "pro" | "elite">("pro")

  return (
    <section id="comparison" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Порівняння моделей</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Оберіть модель, що найкраще відповідає вашим потребам
          </p>
        </div>

        {/* Mobile selector */}
        <div className="lg:hidden mb-8 flex gap-2 justify-center">
          <button
            onClick={() => setActiveModel("basic")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeModel === "basic" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveModel("pro")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeModel === "pro" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Pro
          </button>
          <button
            onClick={() => setActiveModel("elite")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeModel === "elite" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Elite
          </button>
        </div>

        <Card className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Характеристика</th>
                <th
                  className={`p-4 font-semibold text-center ${activeModel === "basic" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                >
                  Basic
                </th>
                <th
                  className={`p-4 font-semibold text-center ${activeModel === "pro" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                >
                  Pro
                  <div className="text-xs font-normal text-primary mt-1">Популярно</div>
                </th>
                <th
                  className={`p-4 font-semibold text-center ${activeModel === "elite" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                >
                  Elite
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td
                    className={`p-4 text-center ${activeModel === "basic" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                  >
                    {typeof row.basic === "boolean" ? (
                      row.basic ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.basic}</span>
                    )}
                  </td>
                  <td
                    className={`p-4 text-center ${activeModel === "pro" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                  >
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.pro}</span>
                    )}
                  </td>
                  <td
                    className={`p-4 text-center ${activeModel === "elite" || window.innerWidth >= 1024 ? "" : "hidden"}`}
                  >
                    {typeof row.elite === "boolean" ? (
                      row.elite ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.elite}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  )
}
