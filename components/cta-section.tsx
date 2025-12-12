"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent animate-gradient-shift" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Partner With a Trusted OEM/ODM Manufacturer
          </h2>
          <p
            className={`text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Whether you need custom ceiling fans, precision components, or industrial magnets, our team is ready to
            discuss your requirements.
          </p>

          {/* CTA Buttons with animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Button size="lg" className="text-base font-medium group relative overflow-hidden">
              <span className="relative z-10">Request a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-accent-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-medium bg-transparent group">
              <span className="group-hover:text-accent transition-colors">Schedule a Call</span>
            </Button>
          </div>

          {/* Contact Info with animation */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center justify-center gap-2 group cursor-pointer hover:text-accent transition-colors">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>sales@elzainternational.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 group cursor-pointer hover:text-accent transition-colors">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>+91 (0) 1234 567 890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
