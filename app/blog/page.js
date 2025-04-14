import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Search } from "lucide-react"
import BlogCard from "@/components/BlogCard"

const blogPosts = [
  {
    title: "The Future of AI in Healthcare",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing diagnostics, treatment planning, and patient care in the healthcare industry.",
    date: "April 15, 2023",
    image: "/images/about-us.jpg",
    slug: "/blog/future-of-ai-in-healthcare",
    category: "Healthcare",
  },
  {
    title: "Machine Learning: Beyond the Hype",
    excerpt:
      "A deep dive into the practical applications of machine learning and how businesses can leverage it for tangible results.",
    date: "March 28, 2023",
    image: "/images/machine-learning.avif",
    slug: "/blog/machine-learning-beyond-hype",
    category: "Technology",
  },
  {
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Addressing the important ethical questions and considerations that arise in the development and deployment of AI systems.",
    date: "February 12, 2023",
    image: "/images/ethics-ai.jpg",
    slug: "/blog/ethical-considerations-ai-development",
    category: "Ethics",
  },
  {
    title: "Natural Language Processing: Current Trends",
    excerpt:
      "An overview of the latest trends and advancements in natural language processing and their implications for businesses.",
    date: "January 30, 2023",
    image: "/images/newberry-ai.jpg",
    slug: "/blog/nlp-current-trends",
    category: "Technology",
  },
  {
    title: "Computer Vision Applications in Retail",
    excerpt:
      "How computer vision technology is transforming the retail industry, from inventory management to customer experience.",
    date: "December 18, 2022",
    image: "/images/ai-services.jpg",
    slug: "/blog/computer-vision-retail",
    category: "Retail",
  },
  {
    title: "The Role of AI in Sustainable Development",
    excerpt:
      "Exploring how artificial intelligence can contribute to sustainable development goals and address global challenges.",
    date: "November 5, 2022",
    image: "/images/analytics-ai.jpg",
    slug: "/blog/ai-sustainable-development",
    category: "Sustainability",
  },
]

const categories = ["All", "Technology", "Healthcare", "Finance", "Retail", "Ethics", "Sustainability"]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Blog & Insights</h1>
            <p className="paragraph mb-8">
              Stay updated with the latest trends, research, and developments in the world of artificial intelligence.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-950 border-b border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-violet-700 text-white" : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-gray-950 pt-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-900 rounded-xl p-6 md:p-8">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/genai.jpg" alt="Featured Post" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-violet-700 text-white text-xs font-medium px-2 py-1 rounded">
                Featured
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={14} />
                <span>May 10, 2023</span>
                <span className="px-2">•</span>
                <span className="text-violet-400">AI Research</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Breakthrough in Generative AI: What It Means for the Future
              </h2>
              <p className="text-gray-300 mb-6">
                Our research team has made significant advancements in generative AI technology, opening up new
                possibilities for creative applications and problem-solving across industries. This breakthrough
                represents a major step forward in our understanding of how AI can augment human creativity and
                innovation.
              </p>
              <Link href="/blog/breakthrough-generative-ai" className="btn-primary">
                Read Full Article
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-black">
        <div className="container-custom">
          <h2 className="heading-lg mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-900 text-gray-400 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-violet-700 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-900 text-gray-400 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-violet-900/20 to-emerald-900/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Subscribe to Our Newsletter</h2>
              <p className="paragraph mb-8">
                Stay up-to-date with the latest insights, research, and developments in AI. Subscribe to our newsletter
                for exclusive content delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
