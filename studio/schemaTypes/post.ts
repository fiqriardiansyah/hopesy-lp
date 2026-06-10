import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: r => r.required().max(120),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: r => r.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: r => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: r => r.required(),
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: r => r.unique(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / intro',
      description: 'Shown under the title and in post cards',
      type: 'text',
      rows: 3,
      validation: r => r.max(220),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: r => r.required(),
        },
      ],
      validation: r => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          // Only allow h2/h3 + standard marks — keeps content tidy
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {name: 'href', type: 'url', title: 'URL'},
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Alt text'},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured / Popular',
      description: 'Show this post in the "Popular post" sidebar',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({title, author, media, date}) {
      const d = date ? new Date(date).toLocaleDateString() : 'unpublished'
      return {title, subtitle: `${d}${author ? ` · ${author}` : ''}`, media}
    },
  },
  orderings: [
    {
      title: 'Published, newest first',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})