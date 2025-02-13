import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-sm text-muted-foreground hover:text-primary">Shop</a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="/faqs" className="text-sm text-muted-foreground hover:text-primary">FAQs</a></li>
              <li><a href="/track" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</a></li>
              <li><a href="/shipping" className="text-sm text-muted-foreground hover:text-primary">Free Guides</a></li>
              <li>
                <a href="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                      </a>
                      </li>
            </ul>
          </div>

          {/* EXTRA */}
                    <div>
                                <h3 className="font-semibold mb-4">Fun Stuff</h3>
                                            <ul className="space-y-2">
                                                          <li><a href="/careers" className="text-sm text-muted-foreground hover:text-primary">CAN</a></li>
                                                                        <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary">BE</a></li>
                                                                           <li><a href="/beta" className="text-sm text-muted-foreground hover:text-primary">ADDED</a></li>
                                                                                                                                            </ul>
                                                                                                                                                      </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="text-sm text-muted-foreground">
              Noida Sector 34, Uttar Pradesh
            </p>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">For queries, Email us at</p>
              <a href="mailto:info@psychport.com" className="text-sm text-primary hover:underline">
                info@psychport.com
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Share email and get discount</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get expert advice, pro tips, and insider discounts.
            </p>
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email and get 10% off"
                className="bg-white"
              />
              <Button className="w-full bg-navy-900 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

