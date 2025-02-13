import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MentalHealthTest() {
  return (
    <section className="py-20 bg-[#734f96] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Take a Free Mental Health Test
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Today! Know How You Feel.
            </h3>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Scientifically validated standard assessments - quickest way to determine if you are suffering from symptoms of any mental health disorder.
            </p>
            <Button size="lg" variant="secondary" className="text-[#4834D4] bg-white hover:bg-gray-100 text-lg px-8">
              Get a Free Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

