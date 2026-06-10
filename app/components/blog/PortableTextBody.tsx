'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/image'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-3 leading-snug">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 pl-5 my-6 text-neutral-600 italic leading-relaxed">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-neutral-600 leading-relaxed mb-5">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="underline text-neutral-900 hover:text-neutral-600 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-neutral-600">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-neutral-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="w-full rounded-xl object-cover"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-neutral-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default function PortableTextBody({ body }: { body: any[] }) {
  return <PortableText value={body} components={components} />
}
