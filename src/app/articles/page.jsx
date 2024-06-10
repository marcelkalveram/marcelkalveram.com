import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { formatDateShort } from '@/lib/formatDateShort'
import { groupBy } from 'lodash'

function Article({ article, shortDate = false }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {shortDate && formatDateShort(article.date)}
        {!shortDate && formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'Writing is a way for me to structure my thoughts and reinforce my learnings. Topics I cover are web and mobile apps, JavaScript, programming in general, and best practices.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  const articlesByYear = groupBy(articles, 'year')

  return (
    <SimpleLayout
      title="Sharing my challenges and insights from daily work life."
      intro="Writing is a way for me to structure my thoughts and reinforce my learnings. Topics I cover here are web and mobile apps, JavaScript, best practices and things I learned the hard way."
    >
      {Object.keys(articlesByYear)
        .reverse()
        .map((year) => (
          <div key={year}>
            <h2 className="relative z-10 order-first mb-12 flex items-center text-xl font-semibold text-zinc-700 dark:text-zinc-400">
              {year}
            </h2>
            {articlesByYear[year].map((article) => (
              <div
                key={article.slug}
                className="mb-12 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <div className="flex max-w-3xl flex-col space-y-16">
                  <Article key={article.slug} article={article} shortDate />
                </div>
              </div>
            ))}
          </div>
        ))}
    </SimpleLayout>
  )
}
