export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    body,
    coverImage,
    publishedAt,
    "categories": categories[]->{title, "slug": slug.current},
    "author": author->{name, avatar}
  }
`

export const popularPostsQuery = `
  *[_type == "post" && featured == true && slug.current != $slug] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    coverImage,
    "categories": categories[]->{title},
    "author": author->{name}
  }
`

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "categories": categories[]->{title, "slug": slug.current},
    "author": author->{name},
    "readingTime": coalesce(round(length(pt::text(body)) / 1000), 1)
  }
`

export const trendingPostsQuery = `
  *[_type == "post"] | order(featured desc, publishedAt desc) [0...4] {
    title,
    "slug": slug.current,
    publishedAt,
    "author": author->{name},
    "readingTime": coalesce(round(length(pt::text(body)) / 1000), 1)
  }
`

export const latestPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "categories": categories[]->{title, "slug": slug.current},
    "author": author->{name},
    "readingTime": coalesce(round(length(pt::text(body)) / 1000), 1)
  }
`

export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current
  }
`
