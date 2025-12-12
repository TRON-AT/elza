"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cog, Factory, Microscope, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CapabilitiesSection() {
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

  const capabilities = [
    {
      icon: Microscope,
      title: "R&D Excellence",
      description:
        "State-of-the-art research facility with dedicated engineering team for continuous innovation and product development.",
    },
    {
      icon: Factory,
      title: "Backward Integration",
      description:
        "Complete control over supply chain from raw materials to finished products ensuring quality and cost efficiency.",
    },
    {
      icon: Cog,
      title: "Advanced Tooling",
      description:
        "In-house tool room with precision CNC machines and die-making capabilities for custom component manufacturing.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "ISO certified processes with rigorous testing protocols ensuring consistent quality standards across all products.",
    },
  ]

  return (
    <section id="capabilities" ref={sectionRef} className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-2xl mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-mono uppercase tracking-wider text-accent mb-4">Core Capabilities</h2>
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            Engineering-Driven Manufacturing Excellence
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our integrated approach ensures precision, quality, and reliability at every stage of production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-3">{capability.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
