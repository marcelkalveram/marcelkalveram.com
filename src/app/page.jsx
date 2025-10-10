import { Container } from '@/components/Container'
import {
  GitHubIcon,
  GoodreadsIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/icons/SocialIcons'

import { getAllArticles } from '@/lib/articles'
import { Article } from '@/components/Article'

import { SocialLink } from '@/app/home/components/SocialLink'
import { Resume } from '@/app/home/components/Resume'
import { Photos } from '@/app/home/components/Photos'
import { Testimonials } from '@/app/home/components/Testimonials'
import { Companies } from '@/app/home/components/Companies'

export const metadata = {
  title: 'Home | Marcel Kalveram',
  description:
    "Hi! I'm Marcel. I build and improve digital products. I am an engineer at heart with 15+ years of experience.",
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi! I&apos;m Marcel 👋
            <br />
            <span className="text-4xl text-gray-400">
              Product Engineer &middot; Tech Lead &middot; German Expat in Spain
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            I am an engineer at <span class="dark:hidden">🖤</span>
            <span class="hidden dark:inline">❤️</span> with 15+ years of
            experience, always putting the user at the centre of my work. I have
            held technical and product leadership positions at early-stage
            startups, boutique agencies and growth-stage companies. I work
            remotely from Valencia, Spain.
          </p>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            You can read more about me{' '}
            <a
              className="border-b border-b-zinc-600 hover:border-0 dark:border-b-zinc-400"
              href="/about"
            >
              here
            </a>{' '}
            or take a look at some of the{' '}
            <a
              className="border-b border-b-zinc-600 hover:border-0 dark:border-b-zinc-400"
              href="/projects"
            >
              projects
            </a>{' '}
            I&apos;ve done.
          </p>
          <div className="mt-8 flex gap-6">
            <SocialLink
              href="https://github.com/marcelkalveram"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/marcelkalveram/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://medium.com/@marcelkalveram"
              aria-label="Follow on Medium"
              icon={MediumIcon}
            />
            <SocialLink
              href="https://www.goodreads.com/user/show/41759252-marcel"
              aria-label="Follow on Goodreads"
              icon={GoodreadsIcon}
            />
          </div>
        </div>
      </Container>

      <Photos />
      <Companies />
      <Testimonials />

      <Container className="mt-24 md:mt-20">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
