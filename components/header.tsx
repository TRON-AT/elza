"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-background/98 backdrop-blur-lg shadow-sm" : "bg-background/95 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with hover effect */}
          <div className="flex items-center">
            <div className="text-xl lg:text-2xl font-bold tracking-tight text-foreground group cursor-pointer">
              ELZA<span className="text-accent group-hover:scale-110 inline-block transition-transform">.</span>
            </div>
          </div>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#capabilities"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Capabilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#manufacturing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Manufacturing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* CTA Button with enhanced hover effect */}
          <div className="hidden md:block">
            <Button size="default" className="font-medium relative overflow-hidden group">
              <span className="relative z-10">Request Quote</span>
              <span className="absolute inset-0 bg-accent-foreground/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <a
                href="#capabilities"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-secondary rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </a>
              <a
                href="#products"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-secondary rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#manufacturing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-secondary rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manufacturing
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-secondary rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <Button size="default" className="w-full mt-2">
                Request Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
