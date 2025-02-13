'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Puja Mittal",
    role: "Homemaker",
    content: "I was unsure about starting therapy when I reached out to Psych Port. Their personalized therapy plans, 24/7 support & absolute flexibility in terms of choosing time or therapist got me to enrol. I have learnt to manage my anxiety so well. My panic attacks are a thing of distant past now."
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">
          What People Say About <span className="text-[#734f96]">Psych Port</span>
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{testimonials[currentSlide].name}</h3>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {testimonials[currentSlide].content}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border-2 border-[#AC78BA] text-[#AC78BA] hover:bg-[#AC78BA] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full border-2 border-[#AC78BA] text-[#AC78BA] hover:bg-[#AC78BA] hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

