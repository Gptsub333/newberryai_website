import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="card group hover:bg-gray-900/80 hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
      >
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
