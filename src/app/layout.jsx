import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Marcel Kalveram',
    default: 'Marcel Kalveram - Full-Stack Developer, Engineering Lead',
  },
  description:
    'I’m Marcel, a software engineer with 15+ years of experience based in Valencia, Spain. I love building and optimising web & mobile apps and I’ve worked as an engineer and team lead across a vast array of companies from early stage startups to full-service agencies.',
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
