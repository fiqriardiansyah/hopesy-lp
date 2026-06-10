import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'
import { allPostsQuery, trendingPostsQuery, allCategoriesQuery } from '../../sanity/queries/post'

type Category = { title: string; slug: string }

type Post = {
  title: string
  slug: string
  excerpt: string
  coverImage: any
  publishedAt: string
  categories: Category[]
  author: { name: string }
  readingTime: number
}

type TrendingPost = {
  title: string
  slug: string
  publishedAt: string
  author: { name: string }
  readingTime: number
}

export const revalidate = 60

export const metadata = {
  title: "What's New? — HOPESY Blog",
  description: 'Insights, tips, and stories from the HOPESY team on trust activation and brand growth in Indonesia.',
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'GOOD MORNING'
  if (hour < 17) return 'GOOD AFTERNOON'
  if (hour < 21) return 'GOOD EVENING'
  return 'GOOD NIGHT'
}

export default async function BlogListPage() {
  const [posts, trending, categories] = await Promise.all([
    client.fetch<Post[]>(allPostsQuery),
    client.fetch<TrendingPost[]>(trendingPostsQuery),
    client.fetch<Category[]>(allCategoriesQuery),
  ])

  const greeting = getGreeting()

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6 py-12" style={{ paddingTop: '80px' }}>

        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: '#888' }}
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-2"
            style={{ color: '#888' }}
          >
            {greeting}
          </p>
          <h1
            className="text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--fd)', color: '#1a1a1a' }}
          >
            What&apos;s New?
          </h1>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main posts feed */}
          <div className="lg:col-span-2">
            {posts?.length === 0 && (
              <p className="text-neutral-400 py-16 text-center text-sm">No posts published yet.</p>
            )}

            {posts?.map((post, idx) => (
              <article
                key={post.slug}
                className="flex gap-6 py-7"
                style={{
                  borderBottom: '1px solid #ddd8cc',
                  ...(idx === 0 ? { paddingTop: 0 } : {}),
                }}
              >
                {/* Cover image */}
                {post.coverImage && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex-shrink-0 overflow-hidden rounded"
                    style={{ width: '44%', height: '210px', position: 'relative', display: 'block' }}
                  >
                    <Image
                      src={urlFor(post.coverImage).width(520).height(340).url()}
                      alt={post.coverImage?.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                )}

                {/* Text */}
                <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                  <div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2
                        className="font-bold text-[1.1rem] leading-snug mb-2 line-clamp-3 transition-colors hover:opacity-70"
                        style={{ fontFamily: 'var(--fd)', color: '#1a1a1a' }}
                      >
                        {post.title}
                      </h2>
                    </Link>

                    {post.excerpt && (
                      <p
                        className="text-sm leading-relaxed line-clamp-3 mb-3"
                        style={{ color: '#666' }}
                      >
                        {post.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-75"
                      style={{ color: '#c45820' }}
                    >
                      Read More &nbsp;→
                    </Link>
                  </div>

                  <p className="text-xs mt-3" style={{ color: '#999' }}>
                    by {post.author?.name}
                    {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
                    {post.readingTime > 0 && ` · ${post.readingTime} Minute Read`}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">

            {/* Trending */}
            {(trending?.length ?? 0) > 0 && (
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4"
                  style={{ color: '#999' }}
                >
                  Trending
                </p>

                {trending.map((post, i) => (
                  <div
                    key={post.slug}
                    className="py-4"
                    style={{
                      borderBottom: '1px solid #ddd8cc',
                      ...(i === 0 ? { paddingTop: 0 } : {}),
                    }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <h4
                        className="font-bold text-sm leading-snug mb-1 transition-opacity hover:opacity-70"
                        style={{ fontFamily: 'var(--fd)', color: '#1a1a1a' }}
                      >
                        {post.title}
                      </h4>
                    </Link>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold inline-flex items-center gap-1 mb-1 transition-opacity hover:opacity-75"
                      style={{ color: i === 0 ? '#c45820' : '#888' }}
                    >
                      Read More →
                    </Link>

                    <p className="text-[11px]" style={{ color: '#aaa' }}>
                      by {post.author?.name}
                      {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
                      {post.readingTime > 0 && ` · ${post.readingTime} Minute Read`}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Top Categories */}
            {(categories?.length ?? 0) > 0 && (
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4"
                  style={{ color: '#999' }}
                >
                  Top Categories
                </p>

                {categories.map((cat, i) => (
                  <Link
                    key={cat.slug}
                    href={`/blog?category=${cat.slug}`}
                    className="flex items-center justify-between py-3 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{
                      borderBottom: '1px solid #ddd8cc',
                      fontFamily: 'var(--fd)',
                      color: i === 0 ? '#c45820' : '#1a1a1a',
                    }}
                  >
                    <span>{cat.title}</span>
                    <span style={{ color: i === 0 ? '#c45820' : '#bbb' }}>→</span>
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
