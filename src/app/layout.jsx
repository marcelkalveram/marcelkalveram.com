import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Marcel Kalveram',
    default: 'Senior Product Engineer - web, mobile, AI',
  },
  description:
    'I am an engineer at heart with 15+ years of experience building web and mobile apps. I have a passion for both product and engineering, and I always put the user at the center of my work. With the rise of AI, product engineering is evolving more rapidly than ever, and I aim to be at the forefront of this unprecedented transformation.',
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
