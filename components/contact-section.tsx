"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Зв'яжіться з нами</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Маєте питання? Ми завжди раді допомогти вам з вибором
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 bg-background/95 z-10 flex flex-col items-center justify-center animate-in fade-in duration-300">
                  <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Дякуємо!</h3>
                  <p className="text-muted-foreground">Ваше повідомлення успішно відправлено</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-card-foreground">
                      Ім'я <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Ваше ім'я"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-card-foreground">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="+380 XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-card-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="transition-all focus:scale-[1.02]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-card-foreground">
                    Повідомлення <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Розкажіть нам про ваші потреби..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="transition-all focus:scale-[1.02]"
                  />
                </div>

                <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Відправлення..." : "Відправити повідомлення"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">Телефон</h3>
                  <p className="text-sm text-muted-foreground">+380 XX XXX XX XX</p>
                  <p className="text-sm text-muted-foreground">Пн-Нд: 9:00 - 21:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">info@poseidon.ua</p>
                  <p className="text-sm text-muted-foreground">sales@poseidon.ua</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">Адреса</h3>
                  <p className="text-sm text-muted-foreground">м. Київ, вул. Рибальська, 1</p>
                  <p className="text-sm text-muted-foreground">Україна, 01001</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
