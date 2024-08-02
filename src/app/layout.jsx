import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Marcel Kalveram',
    default: 'I build products and improve teams',
  },
  description:
    'I am an engineer at heart with 15+ years of experience building web & mobile who always puts the user at the centre of his work...',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-FPHLQDQXC5" />
    </html>
  )
}
