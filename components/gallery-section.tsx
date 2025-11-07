"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7036-5IzWIAc2YQ1xc6VAEKlBtcz6jh4zGq.jpg",
    alt: "Poseidon Bait Boat - комплект з пультом та батареєю",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6752-ki6cFZf6271twcNRzq58dZXFzDrxYk.jpg",
    alt: "Червоний Poseidon на дерев'яній підставці",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6961-4ejHvspmOhOi1RhAhU5ZvHcsRDY05W.jpg",
    alt: "Помаранчевий Poseidon з чорним логотипом",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6950-xM8jmhyLdgW0PnfNCHUDCjvEgSHBpX.jpg",
    alt: "Білий Poseidon - вид збоку",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6929-4uKs5XdaUkpAZrhBsCMfXFsGhqKi4L.jpg",
    alt: "Червоний Poseidon на підставці",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6920-uCTW9HFqsEw803lNSEGG5rvDFtoRjL.jpg",
    alt: "Білий Poseidon з подвійними бункерами",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6977-gBUpyikz9XV53sNozmel1Kkm13mDSt.jpg",
    alt: "Червоний Poseidon з LED підсвіткою",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6976-HlRD66pKLfJ2BmXU0JHU7xJBfXKrJW.jpg",
    alt: "Poseidon з увімкненою підсвіткою",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7024-DDcw1kRgFUvQstwbCKy4OMgP8ag7cs.jpg",
    alt: "Poseidon - вид зверху з відкритими відсіками",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const titleAnimation = useScrollAnimation()
  const galleryAnimation = useScrollAnimation()

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Галерея</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Переконайтеся у якості та функціональності корабликів POSEIDON
          </p>
        </div>

        <div
          ref={galleryAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : ""
              } transition-all duration-700 ${
                galleryAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                transitionDelay: galleryAnimation.isVisible ? `${index * 80}ms` : "0ms",
              }}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative ${index === 0 ? "h-96 md:h-full" : "h-64"}`}>
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-3 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-3 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
