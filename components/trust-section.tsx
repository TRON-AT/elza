"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TrustSection() {
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

  const certifications = [
    "ISO 9001:2015 Certified",
    "ISO 14001:2015 Certified",
    "CE Certified Products",
    "ROHS Compliant",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with animation */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-muted group">
              <img
                src="/quality-control-testing-precision-engineering-labo.jpg"
                alt="Quality Control"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content with animation */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-sm font-mono uppercase tracking-wider text-accent mb-4">Quality & Compliance</h2>
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              Trusted by Leading Brands Worldwide
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality and compliance has made us the preferred manufacturing partner for major Indian
              and international brands.
            </p>

            {/* Certifications with staggered animation */}
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 group cursor-default transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">{cert}</span>
                </div>
              ))}
            </div>

            {/* Stats with animation */}
            <div
              className={`grid grid-cols-2 gap-6 pt-8 border-t border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  10M+
                </div>
                <div className="text-sm text-muted-foreground">Units Manufactured Annually</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  99.8%
                </div>
                <div className="text-sm text-muted-foreground">Quality Acceptance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
