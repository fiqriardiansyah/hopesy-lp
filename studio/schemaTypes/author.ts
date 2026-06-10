import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: r => r.required(),
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {title: 'name', media: 'avatar'},
  },
})