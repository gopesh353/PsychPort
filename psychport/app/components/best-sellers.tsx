"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "bag",
    price: 1133.0,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwb967c19d/images/hi-res/2024-L7-CK2-30840593-1-04-1.jpg?sw=504&sh=672",
    isNew: false,
  },
  {
    id: 2,
    name: "table",
    price: 436.0,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwb967c19d/images/hi-res/2024-L7-CK2-30840593-1-04-1.jpg?sw=504&sh=672",
    isNew: false,
  },
  {
    id: 3,
    name: "chair",
    price: 32.0,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwb967c19d/images/hi-res/2024-L7-CK2-30840593-1-04-1.jpg?sw=504&sh=672",
    isNew: true,
  },
  {
    id: 4,
    name: "product",
    price: 75.0,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwb967c19d/images/hi-res/2024-L7-CK2-30840593-1-04-1.jpg?sw=504&sh=672",
    isNew: false,
  },
  {
    id: 5,
    name: "product",
    price: 70.0,
    image: "https://www.charleskeith.in/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-in-products/default/dwb967c19d/images/hi-res/2024-L7-CK2-30840593-1-04-1.jpg?sw=504&sh=672",
    isNew: true,
  }
]

export default function BestSellers() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("product-container")
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-brand-primary">Best Sellers</h2>
          <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
            Shop All
          </Button>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-brand-primary hover:text-brand-secondary"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            id="product-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x px-4 -mx-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="min-w-[280px] flex-shrink-0 snap-start"
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0 relative">
                    {product.isNew && (
                      <span className="absolute top-2 right-2 bg-brand-primary text-white px-2 py-1 text-xs font-semibold rounded">
                        New
                      </span>
                    )}
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-4">
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                    <Button className="w-full bg-brand-primary hover:bg-brand-secondary text-white">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-brand-primary hover:text-brand-secondary"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

