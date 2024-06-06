import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  GoodreadsIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I&apos;m Marcel Kalveram. I live in Valencia, where I build web and mobile apps.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m an engineer at 🖤 with a passion for great product
            experiences.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I began experimenting with the World Wide Web in 1998, and in
              2006, I decided to turn my hobby into a profession by studying
              Media and Applied IT, a computer science degree with a focus on
              digital media.
            </p>

            <p>
              In 2008, I started working as a freelancer, building websites and
              rich web applications in various engineering roles for startups
              and agencies across Europe.
            </p>

            <p>
              Much of my career has centered around front-end development,
              driven by my obsession with visually pleasing user interfaces.
              This led to my interest in strategy, inspiring me to think beyond
              code and components and understand what makes great products.
            </p>
            <p>
              I have never neglected my deep interest in emerging technologies
              though and have always sought to level up my engineering skills in
              areas like machine learning, DevOps and cloud computing. Besides
              JavaScript on the frontend, I&apos;m also comfortable with Node.js
              on the backend and have tinkered with Java, Python, and Ruby.
            </p>

            <p>
              As a senior engineer, I&apos;ve taken on product owner roles and
              managed small teams of 2-3 people, further enriching my
              understanding of strategy, business, and leadership.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/marcelkalveram"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/marcelkalveram/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://medium.com/@marcelkalveram"
              icon={MediumIcon}
              className="mt-4"
            >
              Follow on Medium
            </SocialLink>
            <SocialLink
              href="https://www.goodreads.com/user/show/41759252-marcel"
              icon={GoodreadsIcon}
              className="mt-4"
            >
              Follow on Goodreads
            </SocialLink>
            <SocialLink
              href="mailto:marcel.kalveram@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              marcel.kalveram@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
