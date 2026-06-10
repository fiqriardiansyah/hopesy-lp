import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'
import { latestPostsQuery } from '../../sanity/queries/post'

function formatDate(dateString) {
  return new Intl.DateTimeFormat('id-ID', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default async function BlogPreviewSection() {
  const posts = await client.fetch(latestPostsQuery)

  if (!posts?.length) return null

  return (
    <section className="bg-s1">
      <div className="sec">
        <div className="eyebrow">Blog</div>
        <h2 className="dsp" style={{ marginBottom: '12px' }}>
          Insights &amp; Tips dari{' '}
          <span className="ink">Tim HOPESY</span>
        </h2>
        <p className="body-l" style={{ marginBottom: '48px' }}>
          Strategi, data, dan cerita nyata seputar kepercayaan brand di Indonesia.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '40px',
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article className="blog-preview-card">
                {post.coverImage && (
                  <div style={{ position: 'relative', width: '100%', height: '200px', flexShrink: 0 }}>
                    <Image
                      src={urlFor(post.coverImage).width(600).height(400).url()}
                      alt={post.coverImage?.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {post.categories?.length > 0 && (
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--p)',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {post.categories[0].title}
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: 'var(--fd)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      lineHeight: 1.4,
                      marginBottom: '10px',
                      flex: 1,
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#666',
                        lineHeight: 1.65,
                        marginBottom: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <span style={{ fontSize: '11px', color: '#999' }}>
                      {post.publishedAt && formatDate(post.publishedAt)}
                      {post.readingTime > 0 && ` · ${post.readingTime} min`}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--p)',
                      }}
                    >
                      Baca →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/blog"
            className="btn-t"
            style={{ display: 'inline-block' }}
          >
            Lihat Semua Artikel →
          </Link>
        </div>
      </div>
    </section>
  )
}
