"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company with animation */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="text-xl font-bold tracking-tight text-foreground mb-6 group cursor-pointer">
              ELZA<span className="text-accent group-hover:scale-110 inline-block transition-transform">.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium OEM/ODM manufacturer of ceiling fans, components, and moulded magnets.
            </p>
          </div>

          {/* Products with animation */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h4 className="text-sm font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {["Ceiling Fans", "Fan Components", "Moulded Magnets", "Custom Solutions"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors relative group inline-block"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links with animation */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="text-sm font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Capabilities", href: "#capabilities" },
                { name: "Certifications", href: "#" },
                { name: "Careers", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors relative group inline-block"
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with animation */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h4 className="text-sm font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                123 Industrial Area
                <br />
                Mumbai, India 400001
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 (0) 1234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@elzainternational.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  sales@elzainternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with animation */}
        <div
          className={`pt-8 border-t border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Elza International. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-accent transition-colors relative group inline-block"
              >
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-accent transition-colors relative group inline-block"
              >
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
