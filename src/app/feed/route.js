import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const feed = new Feed({
    title: 'Marcel Kalveram',
    description:
      'I am an engineer at heart with 15+ years of experience. I always put the user at the centre of my work.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    feedLinks: {
      rss2: `${siteUrl}/feed`,
    },
    author: {
      name: 'Marcel Kalveram',
      link: siteUrl,
    },
  })

  const articles = await getAllArticles()

  for (const article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      author: [{ name: article.author }],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
