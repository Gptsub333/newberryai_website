import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Cpu, Database, LineChart, Shield, Users } from "lucide-react"
import HeroSection from "@/components/HeroSection"
import ServiceCard from "@/components/ServiceCard"
import TestimonialCard from "@/components/TestimonialCard"
import BlogCard from "@/components/BlogCard"
import CtaSection from "@/components/CtaSection"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="section bg-gradient-to-b from-black to-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg mb-6">
                Pioneering the Future with <span className="gradient-text">Advanced AI</span>
              </h2>
              <p className="paragraph mb-6">
                At NewberryAI, we&apos;re dedicated to pushing the boundaries of artificial intelligence to solve complex
                problems and create innovative solutions that transform industries.
              </p>
              <p className="paragraph mb-8">
                Our team of experts combines cutting-edge research with practical applications to deliver AI systems
                that are powerful, ethical, and accessible.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-violet-900/20">
              <Image
                src="/images/about-us.jpg"
                alt="AI Technology Visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Our Services</h2>
            <p className="paragraph">
              We offer a comprehensive range of AI solutions tailored to meet the unique needs of your business, from
              custom development to implementation and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="text-violet-500" size={32} />}
              title="AI Consulting"
              description="Strategic guidance on implementing AI solutions that align with your business goals and drive innovation."
              link="/services/ai-consulting"
            />
            <ServiceCard
              icon={<Cpu className="text-violet-500" size={32} />}
              title="Machine Learning"
              description="Custom machine learning models that analyze data patterns and make intelligent predictions for your business."
              link="/services/machine-learning"
            />
            <ServiceCard
              icon={<Database className="text-violet-500" size={32} />}
              title="Natural Language Processing"
              description="Advanced NLP solutions that enable your systems to understand, interpret, and generate human language."
              link="/services/natural-language-processing"
            />
            <ServiceCard
              icon={<Shield className="text-violet-500" size={32} />}
              title="Computer Vision"
              description="Cutting-edge computer vision systems that can analyze, interpret, and extract meaningful information from visual data."
              link="/services/computer-vision"
            />
            <ServiceCard
              icon={<LineChart className="text-violet-500" size={32} />}
              title="Predictive Analytics"
              description="Data-driven forecasting models that help you anticipate market trends and make informed business decisions."
              link="/services/predictive-analytics"
            />
            <ServiceCard
              icon={<Users className="text-violet-500" size={32} />}
              title="Custom AI Solutions"
              description="Bespoke AI applications designed and developed to address your specific business challenges and requirements."
              link="/services/custom-ai-solutions"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-violet-900/20">
              <Image
                src="/images/tech-stack.jpg"
                alt="AI Technology Stack"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">
                Our <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="paragraph mb-6">
                We leverage the latest advancements in AI and machine learning to build robust, scalable, and efficient
                solutions that deliver real business value.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-2 rounded-lg">
                    <Cpu size={24} className="text-violet-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Advanced Neural Networks</h3>
                    <p className="text-gray-400">Deep learning architectures optimized for performance and accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-2 rounded-lg">
                    <Database size={24} className="text-violet-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Big Data Processing</h3>
                    <p className="text-gray-400">
                      Scalable infrastructure for handling and analyzing massive datasets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-900/20 p-2 rounded-lg">
                    <Shield size={24} className="text-violet-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Secure AI Deployment</h3>
                    <p className="text-gray-400">Enterprise-grade security protocols for protecting sensitive data.</p>
                  </div>
                </div>
              </div>

              <Link href="/technology" className="btn-secondary">
                Explore Our Technology
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="paragraph">
              Discover how our AI solutions have helped businesses across various industries achieve their goals and
              drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="NewberryAI's machine learning solutions have transformed our data analysis capabilities, enabling us to make faster and more accurate business decisions."
              author="Sarah Johnson"
              position="CTO, TechCorp Inc."
              image="/images/people1.jpg"
            />
            <TestimonialCard
              quote="The computer vision system developed by NewberryAI has significantly improved our quality control process, reducing errors by over 40%."
              author="Michael Chen"
              position="Operations Director, Manufacturing Solutions"
              image="/images/people2.jpg"
            />
            <TestimonialCard
              quote="Working with NewberryAI has been a game-changer for our customer service. Their NLP solution has revolutionized how we interact with our customers."
              author="Emily Rodriguez"
              position="Customer Experience Manager, Global Services"
              image="/images/people3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Latest Insights</h2>
            <p className="paragraph">
              Stay updated with the latest trends, research, and developments in the world of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="The Future of AI in Healthcare"
              excerpt="Exploring how artificial intelligence is revolutionizing diagnostics, treatment planning, and patient care in the healthcare industry."
              date="April 15, 2023"
              image="/images/ai-healthcare.jpg"
              slug="/blog/future-of-ai-in-healthcare"
              category="Healthcare"
            />
            <BlogCard
              title="Machine Learning: Beyond the Hype"
              excerpt="A deep dive into the practical applications of machine learning and how businesses can leverage it for tangible results."
              date="March 28, 2023"
              image="/images/machine-learning.avif"
              slug="/blog/machine-learning-beyond-hype"
              category="Technology"
            />
            <BlogCard
              title="Ethical Considerations in AI Development"
              excerpt="Addressing the important ethical questions and considerations that arise in the development and deployment of AI systems."
              date="February 12, 2023"
              image="/images/ethics-ai.jpg"
              slug="/blog/ethical-considerations-ai-development"
              category="Ethics"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Articles
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  )
}
