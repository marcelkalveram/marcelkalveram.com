import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'

import { groupBy } from 'lodash'
import { Article } from './components/Article'

export const metadata = {
  title: 'Articles',
  description:
    'Writing is a way for me to structure my thoughts and reinforce my learnings. Topics include web technologies, best practices, personal projects and whatever else keeps me busy.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  const articlesByYear = groupBy(articles, 'year')

  return (
    <SimpleLayout
      title="Here I share challenges and insights from my daily life."
      intro="Writing is a way for me to structure my thoughts and reinforce my learnings. Topics include web technologies, best practices, personal projects and whatever else keeps me busy."
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
