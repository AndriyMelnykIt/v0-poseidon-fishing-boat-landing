"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold text-xl mb-4 bg-primary text-primary-foreground px-3 py-1 rounded-md inline-block">
              POSEIDON
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              Професійні карпові кораблики для справжніх ентузіастів риболовлі
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group cursor-pointer"
              >
                <Facebook className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group cursor-pointer"
              >
                <Instagram className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group cursor-pointer"
              >
                <Youtube className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукція</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-secondary-foreground transition-colors text-left cursor-pointer"
                >
                  POSEIDON Basic
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-secondary-foreground transition-colors text-left cursor-pointer"
                >
                  POSEIDON Pro
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-secondary-foreground transition-colors text-left cursor-pointer"
                >
                  POSEIDON Elite
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Аксесуари
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Інформація</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Про компанію
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Доставка та оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Гарантія
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-secondary-foreground transition-colors text-left cursor-pointer"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Підтримка</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Інструкції
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-secondary-foreground transition-colors text-left cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Сервісний центр
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
                  Відгуки
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">© 2025 POSEIDON. Всі права захищені.</p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors cursor-pointer">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
