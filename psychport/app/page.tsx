"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import NavBar from "./components/nav-bar"
import ServicesSection from "./components/services-section"
import PromiseSection from "./components/promise-section"
import Footer from "./components/footer"
import MentalHealthTest from "./components/mental-health-test"
import Testimonials from "./components/testimonials"
import BestSellers from "./components/best-sellers"
import PremiumPlans from "./components/premium-plans"
import VideoSection from "./components/video-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] bg-gradient-to-b from-brand-primary to-brand-light"
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            It&apos;s a good day to feel good.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl mb-8 text-white"
          >
            Mental health essentials for the modern Indian.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-white text-brand-primary hover:bg-brand-light transform hover:scale-105 transition-transform"
            >
              SHOP NOW
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <ServicesSection />

      {/* Mental Health Test Section */}
      <MentalHealthTest />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Premium Plans Section */}
      <PremiumPlans />

      {/* Video Section */}
      <VideoSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* full Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-brand-primary"
          >
            Here&apos;s a quick video
          </motion.h2>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-3xl mx-auto aspect-video"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/TGEzhULd5Yw"
              title="Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <PromiseSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

