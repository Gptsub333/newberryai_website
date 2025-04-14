import Image from "next/image"

export default function TestimonialCard({ quote, author, position, image }) {
  return (
    <div className="card hover:bg-gray-900/80 hover:-translate-y-1">
      <div className="mb-6">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 9.333 10.667 11.333 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 9.333 21.3337 11.333 21.3337 13.333Z"
            fill="#8B5CF6"
          />
          <path
            d="M5.33366 14.667H10.667V20.0003C10.667 20.8843 10.3156 21.7319 9.69049 22.357C9.06542 22.9821 8.21776 23.3337 7.33366 23.3337C6.44956 23.3337 5.6019 22.9821 4.97682 22.357C4.35175 21.7319 4.00033 20.8843 4.00033 20.0003V16.0003C4.00033 15.6467 4.14057 15.3073 4.39062 15.0573C4.64067 14.8072 4.98009 14.667 5.33366 14.667ZM16.0003 14.667H21.3337V20.0003C21.3337 20.8843 20.9822 21.7319 20.3572 22.357C19.7321 22.9821 18.8844 23.3337 18.0003 23.3337C17.1162 23.3337 16.2686 22.9821 15.6435 22.357C15.0184 21.7319 14.667 20.8843 14.667 20.0003V16.0003C14.667 15.6467 14.8072 15.3073 15.0573 15.0573C15.3073 14.8072 15.6468 14.667 16.0003 14.667Z"
            fill="#8B5CF6"
          />
        </svg>
      </div>
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  )
}
