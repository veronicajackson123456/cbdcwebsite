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
  title: 'CBDC Tracker — Central Bank Digital Currency Intelligence',
  description:
    'Track the status of every Central Bank Digital Currency initiative worldwide — launches, pilots, research, and cancellations across every country and central bank.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
