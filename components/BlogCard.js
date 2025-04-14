import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export default function BlogCard({ title, excerpt, date, image, slug, category }) {
  return (
    <article className="card group hover:bg-gray-900/80 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-violet-700 text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{excerpt}</p>
      <Link
        href={slug}
        className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
      >
        Read More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
