import glob from 'fast-glob'

async function importArticle(articleFilename) {
  let { article } = await import(`../app/articles/${articleFilename}`)

  // Extract just the article slug (last part before /page.mdx), removing route groups
  const slug = articleFilename.split('/').slice(-2, -1)[0]

  return {
    slug,
    year: article?.date?.slice(0, 4) || null,
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/*/*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
