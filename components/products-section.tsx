"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function ProductsSection() {
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

  const products = [
    {
      category: "01",
      title: "Ceiling Fans",
      description:
        "Premium OEM/ODM ceiling fans with advanced BLDC technology, superior aerodynamics, and energy-efficient designs for leading brands.",
      image: "/modern-ceiling-fan-industrial-design.jpg",
    },
    {
      category: "02",
      title: "Fan Components",
      description:
        "Precision-engineered motor assemblies, blades, hubs, and mechanical components manufactured to exact specifications.",
      image: "/precision-manufacturing-fan-motor-components.jpg",
    },
    {
      category: "03",
      title: "Moulded Magnets",
      description:
        "High-performance ferrite and neodymium magnets for motors and industrial applications with consistent magnetic properties.",
      image: "/industrial-magnets-manufacturing-precision.jpg",
    },
  ]

  return (
    <section id="products" ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-2xl mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-mono uppercase tracking-wider text-accent mb-4">Product Range</h2>
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            Comprehensive Manufacturing Solutions
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/2] overflow-hidden bg-muted relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="text-xs font-mono text-accent mb-3 group-hover:text-accent-foreground transition-colors">
                  {product.category}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{product.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
