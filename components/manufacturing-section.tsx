"use client"

import { useEffect, useRef, useState } from "react"

export function ManufacturingSection() {
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

  const processes = [
    {
      number: "01",
      title: "Design & Engineering",
      description: "CAD/CAM design with prototyping and testing",
    },
    {
      number: "02",
      title: "Tool Making",
      description: "Precision dies and moulds manufactured in-house",
    },
    {
      number: "03",
      title: "Production",
      description: "Automated assembly lines with quality checkpoints",
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Comprehensive testing and certification",
    },
  ]

  return (
    <section id="manufacturing" ref={sectionRef} className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-mono uppercase tracking-wider text-accent-foreground/70 mb-4">
              Manufacturing Process
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              Integrated Production From Raw Material to Finished Product
            </h3>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Our backward-integrated facility ensures complete control over quality, cost, and delivery timelines with
              state-of-the-art machinery and processes.
            </p>

            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-primary-foreground/10 group">
              <img
                src="/industrial-manufacturing-facility-precision-machin.jpg"
                alt="Manufacturing Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {processes.map((process, index) => (
                <div
                  key={index}
                  className={`flex gap-6 group cursor-default transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-primary-foreground/20 group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    {process.number}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-accent-foreground transition-colors">
                      {process.title}
                    </h4>
                    <p className="text-primary-foreground/70 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
