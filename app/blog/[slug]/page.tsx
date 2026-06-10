import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import { postBySlugQuery, popularPostsQuery } from '../../../sanity/queries/post'
import PortableTextBody from '../../components/blog/PortableTextBody'
import SidebarCard from '../../components/blog/SidebarCard'

type Category = { title: string; slug: string }
type Post = {
  title: string
  excerpt: string
  body: any[]
  coverImage: any
  publishedAt: string
  categories: Category[]
  author: { name: string; avatar: any }
}
type PopularPost = {
  title: string
  slug: string
  publishedAt: string
  coverImage: any
  categories: { title: string }[]
  author: { name: string }
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post: Post | null = await client.fetch(postBySlugQuery, { slug })
  if (!post) return {}

  const ogImage = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://hopesy.id/blog/${slug}`,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: `https://hopesy.id/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const [post, popularPosts] = await Promise.all([
    client.fetch<Post | null>(postBySlugQuery, { slug }),
    client.fetch<PopularPost[]>(popularPostsQuery, { slug }),
  ])

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? urlFor(post.coverImage).width(1200).url() : undefined,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author.name },
    publisher: { '@type': 'Organization', name: 'HOPESY', url: 'https://hopesy.id' },
    mainEntityOfPage: `https://hopesy.id/blog/${slug}`,
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: '#888' }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Full-width header */}
      <header className="mb-10">
        <p className="text-sm text-neutral-500 mb-3">
          {formatDate(post.publishedAt)} · by {post.author.name}
        </p>

        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>
        )}

        {post.coverImage && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src={urlFor(post.coverImage).width(1200).url()}
              alt={post.coverImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.categories?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat.slug}
                className="border border-neutral-300 rounded-full px-3 py-1 text-xs text-neutral-700"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <main className="lg:col-span-2">
          <PortableTextBody body={post.body} />
        </main>

        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-lg font-bold text-neutral-900 mb-6">Popular post</h2>
            {popularPosts?.length > 0 && (
              <div className="flex flex-col gap-8">
                {popularPosts.map((p) => (
                  <SidebarCard key={p.slug} post={p} />
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
