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
import portraitImage from '@/images/portrait.png'

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
    'I have been an engineer at heart since I started tinkering with my first computer—a Commodore 16—for the first time at age six. In 1997, I discovered the World Wide Web, a phenomenon that instantly hooked me.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="flex justify-center border-b border-zinc-100 dark:border-zinc-700/40">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square max-w-xs object-cover lg:max-w-none"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Nice to meet you 🥳
            <br />
            Let me quickly tell you my story.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been an engineer at heart since I started tinkering with
              my first computer—a Commodore 16—for the first time at age six.
            </p>
            <p>
              In 1997, I discovered the World Wide Web, a phenomenon that
              instantly hooked me. Pretty soon after setting up my first modem,
              I started building HTML-based websites in Netscape (later
              Firefox).
            </p>
            <h2 className="text-lg font-semibold">🪐 Academic background</h2>
            <p>
              After a decade behind the screen, I turned my biggest hobby into a
              profession and started an online degree in Media Informatics at
              the Polytechnic University of Emden.
            </p>
            <p>
              Unlike traditional Computer Science degrees, it covered additional
              topics from the field of digital media, such as marketing and
              design. The experience of advancing my programming skills combined
              with more human-centred subjects was very satisfying and served as
              the cornerstone of my T-shaped nature.
            </p>

            <p>
              In 2007, I switched from studying online to an on-campus degree at
              the Polytechnic University of Düsseldorf, where I completed my
              studies. As part of an exchange program, I planned to go abroad
              for half a year to study in Valencia but ended up moving there for
              good.
            </p>

            <h2 className="text-lg font-semibold">👨‍💻 Career</h2>
            <p>
              During my studies, I worked mainly as a freelancer, building
              websites and rich web applications in various engineering roles
              for startups and agencies across Germany, Spain, and the UK.
            </p>

            <p>
              Much of my career has centred around front end development, driven
              by my obsession with making user experiences in the browser
              usable, accessible, and intuitive.
            </p>

            <p>
              My focus on users led to my interest in Product, inspiring me to
              think beyond code and understand what makes great user
              experiences. I have worked hand in hand with UX/UI designers,
              product strategists, and business leaders, allowing me to expand
              my knowledge as a member of cross-functional teams.
            </p>

            <p>
              As a more experienced engineer, I took on product owner roles and
              managed small engineering teams, further enriching my strategy,
              business, and leadership know-how.
            </p>

            <h2 className="text-lg font-semibold">🤖 Technology</h2>
            <p>
              In addition to my passion for web and mobile development, I have
              an insatiable curiosity for the broader technology landscape and
              developed foundational knowledge in areas like DevSecOps, Cloud
              Computing, Blockchain and ML/AI.
            </p>

            <p>
              Besides JavaScript on the front end, I am comfortable with Node on
              the back end. But whenever I have the time to learn new skills, I
              tinker with new programming languages, frameworks and libraries.
            </p>

            <p>
              I am excited about Artificial Intelligence&apos;s impact on the
              world and use it to enhance, speed up, and reinvent the way I
              work. I aim to be at the forefront of this transition since people
              with a technical background, the capacity to strategise and the
              ability to empathise with users are best positioned to use AI
              responsibly and purposefully.
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
              className="mt-12 border-t border-zinc-100 pt-12 dark:border-zinc-700/40"
            >
              marcel.kalveram@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
