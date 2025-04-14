import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Cpu, Database, LineChart, Shield, Users } from "lucide-react"
import CtaSection from "@/components/CtaSection"

const services = [
  {
    icon: <Brain className="text-violet-500" size={32} />,
    title: "AI Consulting",
    description:
      "Strategic guidance on implementing AI solutions that align with your business goals and drive innovation.",
    features: [
      "AI readiness assessment",
      "Technology roadmap development",
      "Implementation strategy",
      "ROI analysis",
      "Ethical AI framework",
    ],
    link: "/services/ai-consulting",
  },
  {
    icon: <Cpu className="text-violet-500" size={32} />,
    title: "Machine Learning",
    description:
      "Custom machine learning models that analyze data patterns and make intelligent predictions for your business.",
    features: [
      "Supervised learning models",
      "Unsupervised learning algorithms",
      "Reinforcement learning systems",
      "Model training and optimization",
      "Deployment and monitoring",
    ],
    link: "/services/machine-learning",
  },
  {
    icon: <Database className="text-violet-500" size={32} />,
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions that enable your systems to understand, interpret, and generate human language.",
    features: [
      "Text classification and analysis",
      "Sentiment analysis",
      "Named entity recognition",
      "Language generation",
      "Chatbot development",
    ],
    link: "/services/natural-language-processing",
  },
  {
    icon: <Shield className="text-violet-500" size={32} />,
    title: "Computer Vision",
    description:
      "Cutting-edge computer vision systems that can analyze, interpret, and extract meaningful information from visual data.",
    features: [
      "Image recognition and classification",
      "Object detection and tracking",
      "Facial recognition",
      "Scene understanding",
      "Video analysis",
    ],
    link: "/services/computer-vision",
  },
  {
    icon: <LineChart className="text-violet-500" size={32} />,
    title: "Predictive Analytics",
    description:
      "Data-driven forecasting models that help you anticipate market trends and make informed business decisions.",
    features: [
      "Time series analysis",
      "Demand forecasting",
      "Risk assessment",
      "Customer behavior prediction",
      "Anomaly detection",
    ],
    link: "/services/predictive-analytics",
  },
  {
    icon: <Users className="text-violet-500" size={32} />,
    title: "Custom AI Solutions",
    description:
      "Bespoke AI applications designed and developed to address your specific business challenges and requirements.",
    features: [
      "Requirements analysis",
      "Custom algorithm development",
      "Integration with existing systems",
      "Scalable architecture design",
      "Ongoing support and maintenance",
    ],
    link: "/services/custom-ai-solutions",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="paragraph mb-8">
              We offer a comprehensive range of AI solutions tailored to meet the unique needs of your business, from
              custom development to implementation and support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-violet-900/20">
              <Image src="/images/ai-services.jpg" alt="AI Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className="heading-lg mb-6">
                Comprehensive <span className="gradient-text">AI Solutions</span>
              </h2>
              <p className="paragraph mb-6">
                At NewberryAI, we provide end-to-end AI services designed to help businesses harness the power of
                artificial intelligence to solve complex problems, optimize operations, and drive innovation.
              </p>
              <p className="paragraph mb-6">
                Our team of experts works closely with you to understand your unique challenges and develop tailored
                solutions that deliver measurable results and create lasting value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:bg-gray-900/80 hover:-translate-y-1">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Our Process</h2>
            <p className="paragraph">
              We follow a structured approach to ensure that our AI solutions are tailored to your specific needs and
              deliver maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, challenges, and goals to identify how AI can create value.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive strategy and roadmap for implementing AI solutions that align with your objectives.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our team designs and develops custom AI solutions using cutting-edge technologies and methodologies.",
              },
              {
                number: "04",
                title: "Implementation",
                description:
                  "We deploy the solution, provide training, and ensure seamless integration with your existing systems.",
              },
            ].map((step, index) => (
              <div key={index} className="card hover:bg-gray-900/80 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute -top-2 -left-2 text-6xl font-bold text-violet-900/20">{step.number}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Case Studies</h2>
            <p className="paragraph">
              Explore how our AI solutions have helped businesses across various industries achieve their goals and
              drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Analytics Platform",
                category: "Retail",
                description:
                  "Developed a predictive analytics platform that helped a major retailer optimize inventory management and reduce costs by 15%.",
                image: "/images/analytics-ai.jpg",
              },
              {
                title: "Healthcare Diagnostic Tool",
                category: "Healthcare",
                description:
                  "Created an AI-powered diagnostic tool that improved early detection of diseases by analyzing medical imaging data with 95% accuracy.",
                image: "/images/ai-healthcare.jpg",
              },
              {
                title: "Financial Fraud Detection",
                category: "Finance",
                description:
                  "Implemented a machine learning system that reduced fraudulent transactions by 60% for a global financial institution.",
                image: "/images/machine-learning.avif",
              },
            ].map((study, index) => (
              <div key={index} className="card group hover:bg-gray-900/80 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-violet-700 text-white text-xs font-medium px-2 py-1 rounded">
                    {study.category}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <Link
                  href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
                >
                  Read Case Study
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-secondary">
              View All Case Studies
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
