"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6952-t4N02vWNVr3m3arEgTSdpRltaVTom1.jpg",
      caption: "Poseidon Orange - Потужний та яскравий",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7012-WnYQx3GQFKzQ5WSF97j1sRFmRP2BFF.jpg",
      caption: "Poseidon White - Класичний дизайн",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6974-BWSIFkCzzbw48SS2kUHx1RuuWFVeQ1.jpg",
      caption: "Poseidon Yellow - Стильний та помітний",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden pt-16">
        {/* Carousel Images */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={image.url}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
        </div>

        {/* Caption */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-2xl bg-background/40 backdrop-blur-md px-8 py-3 rounded-full border border-primary/30">
            {carouselImages[currentImageIndex].caption}
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentImageIndex
                  ? "bg-primary w-16 shadow-lg shadow-primary/50"
                  : "bg-white/50 w-10 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="relative bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Нове покоління карпових корабликів 2025
            </div>

            {/* Main heading */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 text-balance leading-none tracking-tight">
              <span className="block text-foreground">POSEIDON</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Технологія майбутнього вже тут
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Радіокеровані кораблики нового покоління. GPS, потужність, точність. Для тих, хто не йде на компроміси.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="text-base px-10 py-6 font-semibold hover:scale-105 transition-transform cursor-pointer shadow-lg"
                onClick={() => scrollToSection("pricing")}
              >
                Вибрати модель
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-10 py-6 font-semibold hover:scale-105 transition-all cursor-pointer border-2 bg-background/80 backdrop-blur-sm"
                asChild
              >
                <a href="https://www.tiktok.com/@poseidon.carp" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  Подивитись в дії
                </a>
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card/70 backdrop-blur-md border-2 border-primary/30 rounded-xl p-6 hover:bg-card/90 hover:scale-105 hover:border-primary/50 transition-all shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">500м</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Дальність</div>
              </div>
              <div className="bg-card/70 backdrop-blur-md border-2 border-primary/30 rounded-xl p-6 hover:bg-card/90 hover:scale-105 hover:border-primary/50 transition-all shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">2.5кг</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Вантаж</div>
              </div>
              <div className="bg-card/70 backdrop-blur-md border-2 border-primary/30 rounded-xl p-6 hover:bg-card/90 hover:scale-105 hover:border-primary/50 transition-all shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">GPS</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Навігація</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
