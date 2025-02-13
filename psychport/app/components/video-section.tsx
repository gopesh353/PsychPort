"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    title: "Tedx",
    url: "https://www.youtube.com/embed/2xt5sXU7pyI",
  },
  {
    id: 2,
    title: "On the road with Cymbiotika",
    url: "https://youtube.com/embed/PiG3nl-0KEs?si=TYzubLO-kh0k0M5O",
  },
  {
    id: 3,
    title: "3 reasons to take Glutathione",
    url: "https://youtube.com/embed/jIz-z8jzZg8?si=VT43uWXBF-3do1NR",
  },
  {
    id: 4,
    title: "Realistic approach to micro-dosing",
    url: "https://youtube.com/embed/ZgfgOIaoWiA?si=dLWsWcvTKUArGWLx",
  },
  {
    id: 5,
    title: "Natural energy before your workout",
    url: "https://youtube.com/embed/n9tg6-ZZuUU?si=Ad7n0IxYlGpbCuaV",
  },
]

export default function VideoSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("video-container")
    if (container) {
      const scrollAmount = 300
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What others are saying</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg text-brand-primary hover:text-brand-secondary"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div id="video-container" className="flex gap-4 overflow-x-auto snap-x scrollbar-hide">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="relative min-w-[250px] sm:min-w-[300px] aspect-[9/16] snap-start"
                onHoverStart={() => setHoveredVideo(video.id)}
                onHoverEnd={() => setHoveredVideo(null)}
              >
                <div className="absolute top-2 right-2 z-10">
                  <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>

                <iframe
                  className="w-full h-full rounded-lg"
                  src={`${video.url}${hoveredVideo === video.id ? '?autoplay=1&mute=1' : ''}`}
                  title={video.title}
                  aria-label={`Playing ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg text-brand-primary hover:text-brand-secondary"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

