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
  title: 'Meublux - Design your Dream Space',
  description: 'استمتع بأجواء من الأناقة والحداثة مع تشكيلة أثاثنا العصري المصممة لتناسب أذواقكم الرفيعة',
  keywords: 'furniture, interior design, kitchen, living room, bedroom, office, Algeria, أثاث, تصميم داخلي, مطبخ, غرفة معيشة',
  authors: [{ name: 'Meublux' }],
  creator: 'Meublux',
  publisher: 'Meublux',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meublux.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Meublux - Design your Dream Space',
    description: 'استمتع بأجواء من الأناقة والحداثة مع تشكيلة أثاثنا العصري المصممة لتناسب أذواقكم الرفيعة',
    url: 'https://meublux.com',
    siteName: 'Meublux',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meublux - Furniture & Interior Design',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meublux - Design your Dream Space',
    description: 'استمتع بأجواء من الأناقة والحداثة مع تشكيلة أثاثنا العصري المصممة لتناسب أذواقكم الرفيعة',
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
    <html lang="ar" dir="rtl" className={`${inter.variable} ${playfair.variable}`}>
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