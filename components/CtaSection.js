import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-900/20 to-emerald-900/20">
      <div className="container-custom">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="paragraph mb-8">
              Contact us today to discuss how our AI solutions can help your business innovate, optimize operations, and
              drive growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
