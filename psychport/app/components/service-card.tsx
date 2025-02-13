import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  longDescription: string
}

export default function ServiceCard({ title, description, icon, longDescription }: ServiceCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 mx-auto w-16 h-16 relative rounded-full bg-brand-light">
          <Image src={icon || "/placeholder.svg"} alt="" fill className="p-3" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-brand-primary">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <p className="text-sm text-gray-600 mb-4">{longDescription}</p>
        <Button
          variant="outline"
          className="w-full border-brand-primary text-brand-primary hover:bg-brand-light hover:text-brand-primary"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

