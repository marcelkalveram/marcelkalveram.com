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
    'I am a Senior Product Engineer with 15+ years of experience. I love working at the intersection between product and engineering.',
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
            Now that you are here, let me tell you a bit more about myself.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As I said, I&apos;m an engineer at heart. That&apos;s because I
              started experimenting with computers at the tender age of six.
            </p>
            <p>
              In 1997, I discovered the World Wide Web, a phenomenon that
              instantly got me hooked. Pretty soon after setting up my first
              modem, I started building websites in the Mosaic browser using
              Microsoft Frontpage and—a few years later—Macromedia Dreamweaver.
            </p>
            <h2 className="text-lg font-semibold">🎓 Academic background</h2>
            <p>
              After a decade spent behind the screen, I decided to turn my
              biggest hobby into a profession and started an online degree in
              &apos;Media Informatics&apos; at the Polytechnic University of
              Emden.
            </p>
            <p>
              Unlike traditional Computer Science degrees, it covered additional
              topics from the field of digital media, such as marketing and
              design. The experience of advancing my programming skills combined
              with more human-centered subjects was very satisfying and served
              as the cornerstone of my T-shaped nature.
            </p>

            <p>
              In 2007, I switched from studying almost entirely online to an
              on-campus degree at the Polytechnic University of Düsseldorf,
              where I completed my studies. As part of an exchange program, I
              planned to go abroad for half a year to study at a partner
              university in Valencia, but ended up moving there for good.
            </p>

            <h2 className="text-lg font-semibold">💼 Career</h2>
            <p>
              During my studies, I started working as a freelancer, building
              websites and rich web applications in various engineering roles
              for startups and agencies across Germany, Spain, and the UK.
            </p>

            <p>
              Much of my career has centered around front-end development,
              driven by my obsession with what you can see in the browser and
              making user experiences usable, accessible, and intuitive.
            </p>

            <p>
              My focus on the user led to my interest in product, inspiring me
              to think beyond code and components and understand what makes
              great user experiences. I have worked hand in hand with senior
              UX/UI designers, product strategists, and business leaders,
              allowing me to expand my knowledge as a member of cross-functional
              teams.
            </p>

            <p>
              As a senior product engineer, I have taken on product owner roles
              and managed small teams of 2-3 people, further enriching my
              understanding of strategy, business, and leadership.
            </p>

            <h2 className="text-lg font-semibold">🤖 Technology</h2>
            <p>
              Beside my interest in Product, I have never neglected my deep
              interest in emerging technologies and have always sought to level
              up my engineering skills in areas like Machine Learning, AI, and
              Cloud Computing.
            </p>

            <p>
              Besides JavaScript on the frontend, I am comfortable with Node.js
              on the backend. And whenever I have the time to learn new skills I
              try to tinker with new programming languages, frameworks and
              libraries.
            </p>

            <p>
              Regarding Artificial Intelligence, I am more excited than scared
              about its impact on the world, and use it massively to enhance,
              speed up and rethink my job. I think Product Engineers will be
              paramount to this shift because of their technical background, the
              capacity to strategise, and last but not least, the ability to
              empathise with users.
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
