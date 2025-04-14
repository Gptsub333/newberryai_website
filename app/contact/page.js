"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="paragraph mb-8">
              Have a question or interested in our services? Get in touch with our team and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="paragraph mb-8">
                Whether you&apos;re curious about our services, looking for a demo, or ready to start a project, our team is
                here to answer your questions and help you find the right AI solution for your business.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-3 rounded-lg">
                    <MapPin className="text-violet-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-400">123 AI Boulevard, Tech District, San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-3 rounded-lg">
                    <Mail className="text-violet-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:info@newberryai.com"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      info@newberryai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-3 rounded-lg">
                    <Phone className="text-violet-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-violet-400 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Office Location"
                  fill
                  className="object-cover"
                />
              </div> */}
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-900 rounded-xl p-8">
                <h2 className="heading-md mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-900/20 border border-green-800 text-green-400 rounded-lg p-4 mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We&apos;ve received your inquiry and will get back to you shortly.</p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-consulting">AI Consulting</option>
                      <option value="machine-learning">Machine Learning</option>
                      <option value="natural-language-processing">Natural Language Processing</option>
                      <option value="computer-vision">Computer Vision</option>
                      <option value="predictive-analytics">Predictive Analytics</option>
                      <option value="custom-ai-solutions">Custom AI Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="paragraph">Find answers to common questions about our services, process, and technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What industries do you work with?",
                answer:
                  "We work with a wide range of industries including healthcare, finance, retail, manufacturing, and more. Our AI solutions are adaptable to various business contexts and challenges.",
              },
              {
                question: "How long does it take to implement an AI solution?",
                answer:
                  "The timeline varies depending on the complexity of the project, but typically ranges from a few weeks for simpler implementations to several months for more comprehensive solutions.",
              },
              {
                question: "Do you offer ongoing support after implementation?",
                answer:
                  "Yes, we provide comprehensive support and maintenance services to ensure your AI solution continues to perform optimally and evolves with your business needs.",
              },
              {
                question: "How do you ensure data privacy and security?",
                answer:
                  "We implement robust security measures and follow industry best practices to protect your data. All our solutions are designed with privacy and security as top priorities.",
              },
              {
                question: "Can you integrate AI solutions with our existing systems?",
                answer:
                  "Yes, our solutions are designed to integrate seamlessly with your existing systems and workflows, minimizing disruption and maximizing value.",
              },
              {
                question: "What makes NewberryAI different from other AI companies?",
                answer:
                  "Our combination of cutting-edge research, practical implementation experience, and client-focused approach sets us apart. We don't just deliver technology; we deliver solutions that create real business value.",
              },
            ].map((faq, index) => (
              <div key={index} className="card hover:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
