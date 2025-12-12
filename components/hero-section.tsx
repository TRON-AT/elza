"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={heroRef} className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent animate-gradient-shift" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm mb-6 md:mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Trusted by Leading Brands
              </span>
            </div>

            {/* Main Headline with animation */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 md:mb-6 lg:mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              R&D-Led, Backward-Integrated{" "}
              <span className="text-accent relative inline-block">
                OEM/ODM Manufacturer
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/20 animate-slide-in"></span>
              </span>
            </h1>

            {/* Subheadline with animation */}
            <p
              className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8 md:mb-10 lg:mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Premium ceiling fans, fan components, and moulded magnets engineered with precision. Trusted manufacturing
              partner with deep capability in R&D, tooling, and integrated production.
            </p>

            {/* CTA Buttons with animation */}
            <div
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button size="lg" className="text-base font-medium group relative overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Request a Quote</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-accent-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent group w-full sm:w-auto"
              >
                <span className="group-hover:text-accent transition-colors">View Capabilities</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/modern-ceiling-fan-industrial-design.jpg"
                alt="Premium ceiling fan with modern industrial design"
                fill
                className="object-cover"
                priority
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>

            {/* Decorative accent element - hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-accent/5 rounded-lg -z-10" />
          </div>
        </div>

        {/* Stats with animation */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-24 pt-8 md:pt-12 border-t border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {[
            { value: "25+", label: "Years of Excellence" },
            { value: "500+", label: "Global Partners" },
            { value: "100%", label: "Quality Assured" },
            { value: "50+", label: "Countries Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group cursor-default text-center lg:text-left"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
