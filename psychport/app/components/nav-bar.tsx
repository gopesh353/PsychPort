"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bell, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesDropdown } from "./services-dropdown"

export default function NavBar() {
  return (
    <header className="border-b relative">
      <div className="bg-brand-light text-center py-2 px-4">
        <p className="text-brand-primary">Mental Health - For All of You!</p>
      </div>

      <nav className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between relative">
          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
            >
              About us
            </Link>
            <ServicesDropdown />
            <Link
              href="/shop"
              className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Deals
            </Link>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <Image src="/LightBG_SVG.svg" alt="Psych Port Logo" width={40} height={40} className="mr-2" />
              <span className="text-2xl text-brand-primary">Psych Port</span>
            </motion.div>
          </Link>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" className="text-brand-primary hover:text-brand-secondary">
                <Bell className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" className="text-brand-primary hover:text-brand-secondary">
                <User className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" className="text-brand-primary hover:text-brand-secondary">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  )
}

