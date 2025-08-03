import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ikhlas Automobiles - Luxury & Sports Vehicles',
  description: 'Spécialisé dans la vente des véhicules neuf : luxe & sport multimarque. Découvrez notre collection exclusive de véhicules de luxe et sport.',
  keywords: 'luxury cars, sports cars, premium vehicles, multimarque, Ikhlas Automobiles, véhicules de luxe',
  authors: [{ name: 'Ikhlas Automobiles' }],
  creator: 'Ikhlas Automobiles',
  publisher: 'Ikhlas Automobiles',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ikhlas-automobiles.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ikhlas Automobiles - Luxury & Sports Vehicles',
    description: 'Spécialisé dans la vente des véhicules neuf : luxe & sport multimarque',
    url: 'https://ikhlas-automobiles.com',
    siteName: 'Ikhlas Automobiles',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ikhlas Automobiles - Luxury Cars',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ikhlas Automobiles - Luxury & Sports Vehicles',
    description: 'Spécialisé dans la vente des véhicules neuf : luxe & sport multimarque',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
} 