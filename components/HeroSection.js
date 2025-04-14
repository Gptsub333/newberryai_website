"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-transparent to-transparent opacity-70" />

      {/* Animated particles or grid (simplified version) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/images/background.jpg" alt="Background Pattern" fill className="object-cover" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="heading-xl mb-6">
              Transforming Business with <span className="gradient-text">Advanced AI</span> Solutions
            </h1>
            <p className="paragraph mb-8 max-w-xl">
              NewberryAI delivers cutting-edge artificial intelligence solutions that help businesses innovate, optimize
              operations, and drive growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div
            className={`relative h-[400px] md:h-[500px] transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-2xl opacity-20 blur-xl transform -rotate-6" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="AI Technology Visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
