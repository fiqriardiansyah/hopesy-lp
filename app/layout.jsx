import './globals.css'

export const metadata = {
  title: "HOPESY — Indonesia's Trust Activation Network",
  description:
    'HOPESY membangun kepercayaan konsumen secara sistematis lewat 500.000 real users terverifikasi, framework yang terbukti, dan Trust Score yang terukur. 7 tahun operasional, 100+ brand dilayani.',
  keywords: [
    'trust activation',
    'UGC Indonesia',
    'rating management',
    'brand trust',
    'social proof Indonesia',
    'trust score brand',
    'marketing komunitas',
    'community marketing Indonesia',
    'review management',
    'influencer marketing',
    'TikTok seeding',
    'brand reputation',
    'hopesy',
  ],
  metadataBase: new URL('https://hopesy.co.id'),
  openGraph: {
    title: "HOPESY — Indonesia's Trust Activation Network",
    description:
      'Membangun kepercayaan konsumen secara sistematis lewat 500.000 real users terverifikasi, framework terbukti, dan Trust Score yang terukur.',
    url: 'https://hopesy.co.id',
    siteName: 'HOPESY',
    images: [
      {
        url: 'https://i.ibb.co/chCYc8XY/Color-logo-no-background.png',
        width: 1200,
        height: 630,
        alt: "HOPESY — Indonesia's Trust Activation Network",
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HOPESY — Indonesia's Trust Activation Network",
    description:
      'Membangun kepercayaan konsumen secara sistematis lewat 500.000 real users terverifikasi dan Trust Score yang terukur.',
    images: ['https://i.ibb.co/chCYc8XY/Color-logo-no-background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hopesy.co.id',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HOPESY',
  legalName: 'PT HOPESY SUKSES MAKMUR',
  url: 'https://hopesy.co.id',
  logo: 'https://i.ibb.co/chCYc8XY/Color-logo-no-background.png',
  description:
    "Indonesia's Trust Activation Network — Membangun kepercayaan konsumen secara sistematis lewat 500.000 real users terverifikasi.",
  foundingDate: '2017',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sovereign Plaza, Jl. T.B. Simatupang No. 36, Cilandak Barat',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12430',
    addressCountry: 'ID',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-858-9275-8224',
    email: 'arman@hopesy.co.id',
    contactType: 'customer service',
    availableLanguage: 'Indonesian',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
  sameAs: ['https://wa.me/6285892758224'],
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trust Activation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content, UGC & Influencer' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rating & Review Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engagement & Conversation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trending & Broadcast' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Research, Survey & Offline' } },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,600,800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
