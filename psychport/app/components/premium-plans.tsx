"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const plans = [
  {
    name: "Start",
    price: "Free",
    features: ["Basic features", "Limited access", "Community support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$19.99",
    features: ["All basic features", "Priority support", "Advanced analytics"],
    cta: "Choose Basic",
    highlighted: true,
  },
  {
    name: "Expert",
    price: "$129.99",
    features: ["All premium features", "24/7 support", "Custom solutions"],
    cta: "Choose Expert",
    highlighted: false,
  },
]

export default function PremiumPlans() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Premium Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works best for you and your mental wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full ${
                  plan.highlighted ? "bg-brand-primary text-white shadow-xl scale-105" : "bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pt-8 pb-4">
                  <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-sm">/month</span>}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-center">
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-brand-primary hover:bg-gray-100"
                        : "bg-brand-primary text-white hover:bg-brand-secondary"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

