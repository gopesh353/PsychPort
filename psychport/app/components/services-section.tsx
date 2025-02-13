"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ServicesSection() {
  const services = [
    {
      title: "Sagé",
      image: "",
    },
    {
      title: "Iris",
      image: "",
    },
    {
      title: "Calm",
      image: "",
    },
    {
      title: "Libraria",
      image: "",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold">
              Our Services
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-lg">
              Clean, professional mental health services. Learn more about the PsychPort difference.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800 rounded-none px-8">
                EXPLORE SERVICES
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-4 gap-6" // Updated grid layout
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-3xl relative overflow-hidden">
                  {" "}
                  {/* Updated image container */}
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <p className="text-lg font-medium">{service.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

