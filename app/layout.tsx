import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Nav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cbdc.ac'),
  alternates: { canonical: 'https://www.cbdc.ac' },
  openGraph: {
    type: 'website',
    url: 'https://www.cbdc.ac',
    siteName: 'CBDC LLC',
    title: 'CBDC LLC — Independent Digital-Currency Research',
    description:
      'CBDC LLC is an independent digital-currency research and information company publishing plain-English guides, country and project trackers, and updates.',
  },
  title: 'CBDC LLC — Independent Digital-Currency Research',
  description:
    'CBDC LLC is an independent digital-currency research and information company publishing plain-English guides, country and project trackers, and updates.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141a26',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${_geistSans.variable} ${_geistMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <TooltipProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </TooltipProvider>
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
