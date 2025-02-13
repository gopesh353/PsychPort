import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PromiseSection() {
  const promises = [
    {
      title: "Mental health Made easy",
      cta: "How?",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Discreet delivery",
      cta: "Prove it!",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "100 Days Warranty",
      cta: "What's the T&C?",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Quality You Can Trust",
      cta: "Show Me",
      icon: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-8 bg-gray-50 mt-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-6">The Promise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {promises.map((promise) => (
            <Card key={promise.title} className="text-center flex-1 min-w-[200px] max-w-[250px]">
              <CardContent className="p-4">
                <div className="mb-2 mx-auto w-10 h-10 relative">
                  <Image
                    src={promise.icon}
                    alt=""
                    fill
                    className="p-2"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">{promise.title}</h3>
                <Button variant="link" className="text-primary text-xs p-0">
                  {promise.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

