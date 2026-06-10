import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../../sanity/lib/image'

type Category = { title: string }
type PopularPost = {
  title: string
  slug: string
  publishedAt: string
  coverImage: any
  categories: Category[]
  author: { name: string }
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default function SidebarCard({ post }: { post: PopularPost }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
        <Image
          src={urlFor(post.coverImage).width(400).height(250).url()}
          alt={post.coverImage?.alt || post.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs text-neutral-500">
        {formatDate(post.publishedAt)} · {post.author.name}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="font-semibold text-neutral-900 hover:text-neutral-700 leading-snug"
      >
        {post.title}
      </Link>
      {post.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat.title}
              className="border border-neutral-300 rounded-full px-3 py-1 text-xs text-neutral-700"
            >
              {cat.title}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
