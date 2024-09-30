import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  GoodreadsIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/SocialIcons'

import logoHanno from '@/images/logos/work/hanno.png'
import logoJungmut from '@/images/logos/work/jungmut.png'
import logoDelusha from '@/images/logos/work/delusha.png'
import logoMVPR from '@/images/logos/work/mvpr.png'
import logoFreelancer from '@/images/logos/work/freelancer.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoUber from '@/images/logos/clients/uber.png'
import logoUnicef from '@/images/logos/clients/unicef.png'
import logoOmron from '@/images/logos/clients/omron.png'
import logoVodafone from '@/images/logos/clients/vodafone.png'
import logoDisney from '@/images/logos/clients/disney.png'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Button } from '@/components/Button'

import TestimonialsJonLay from '@/images/testimonials/jon-lay.jpg'
import TestimonialsNizarJalbout from '@/images/testimonials/nizar-jalbout.jpg'
import TestimonialsBenHeath from '@/images/testimonials/ben-heath.jpg'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div
        className={clsx(
          'mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0',
        )}
      >
        {role.logo && (
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'MVPR',
      title: 'Product Owner',
      logo: logoMVPR,
      start: '2021',
      end: {
        label: '2024',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Self-employed',
      title: 'React Native Developer',
      logo: logoFreelancer,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Hanno',
      title: 'Software Engineer',
      logo: logoHanno,
      start: '2014',
      end: '2018',
    },
    {
      company: 'JUNGMUT',
      title: 'CTO',
      logo: logoJungmut,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Delusha',
      title: 'Web Developer',
      logo: logoDelusha,
      start: '2010',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <Button
        href="/marcel-kalveram-resume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <Container className="mt-20">
      <div className="mx-auto grid max-w-xl lg:max-w-none">
        <h2 className="mb-3 text-center text-sm font-light uppercase text-zinc-400">
          What people say about me
        </h2>
        <div className="mt-10 flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
          <article className="flex rounded-xl bg-zinc-100 p-6 dark:bg-zinc-700">
            <div className="">
              <p className="text-sm">
                Marcel was a fantastic leader and communicator between technical
                and non-technical teams. I will forever be envious of his
                ability to break down large tasks into a structured workflow,
                and he was pivotal in developing MVPR into the platform it is
                today.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar image={TestimonialsBenHeath} />
                <small className="font-semibold">
                  Ben Heath, Director at MVPR
                </small>
              </div>
            </div>
          </article>
          <article className="flex rounded-xl bg-zinc-100 p-6 dark:bg-zinc-700">
            <div className="">
              <p className="text-sm">
                Marcel is diligent and dependable when it comes to execution on
                projects and has a great passion for repeatable processes, code
                quality and doing things &apos;correctly&apos;.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar image={TestimonialsJonLay} />
                <small className="font-semibold">
                  Jon Lay, Founder of Hanno
                </small>
              </div>
            </div>
          </article>
          <article className="flex rounded-xl bg-zinc-100 p-6 dark:bg-zinc-700">
            <div className="">
              <p className="text-sm">
                I had the great pleasure of working with Marcel on a start-up
                project in Valencia. It was my first foray into an online
                venture and could have not been more fortunate to have Marcel as
                the developer responsible for the project.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Avatar image={TestimonialsNizarJalbout} />
                <small className="font-semibold">
                  Nizar Jalbout, CEO of Delusha
                </small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  )
}

function Companies() {
  return (
    <Container className="-mb-10 mt-20">
      <div className="mx-auto grid max-w-xl lg:max-w-none">
        <h2 className="-mb-2 text-center text-sm font-light uppercase text-zinc-400">
          Some companies I have worked with
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 space-y-0 lg:flex-row lg:flex-nowrap lg:space-x-10 lg:space-y-0 dark:opacity-50">
          <Image
            src={logoVodafone}
            width="300"
            height="300"
            alt="Vodafone logo"
            className="w-32"
          />

          <Image
            src={logoDisney}
            width="300"
            height="300"
            alt="Disney logo"
            className="w-32"
          />
          <Image
            src={logoUber}
            width="300"
            height="300"
            alt="Uber logo"
            className="w-32"
          />
          <Image
            src={logoOmron}
            width="300"
            height="300"
            alt="Omron logo"
            className="w-32"
          />
          <Image
            src={logoUnicef}
            width="300"
            height="300"
            alt="Unicef logo"
            className="w-32"
          />
        </div>
      </div>
    </Container>
  )
}

function Avatar({ image, className = null, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={image}
        alt=""
        sizes={'2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          'h-8 w-8',
        )}
        priority
      />
    </Link>
  )
}

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
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
