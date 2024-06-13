import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoTheBookProject from '@/images/logos/projects/the-book-project.png'
import logoCreativeMorningsValencia from '@/images/logos/projects/creative-mornings-valencia.png'
import logoOskar from '@/images/logos/projects/oskar.png'
import logoTheSustainableList from '@/images/logos/projects/the-sustainable-list.png'
// import logoSplang from '@/images/logos/projects/splang.png'
import logoVlcTechHub from '@/images/logos/projects/vlc-tech-hub.png'
// import logoStyleAdvisor from '@/images/logos/projects/styleAdvisor.png'
import logoNuhouse from '@/images/logos/projects/nuhouse.png'
import clsx from 'clsx'

const projects = [
  // {
  //   name: 'Splang',
  //   year: '2024',
  //   description:
  //     'A mobile app built in React Native teaching Spanish slang to advanced students of the language. It helps people familiarise with terms and idioms that are not featued in regular textbooks but are very common in everday life.',
  //   link: { href: 'http://splang.app', label: 'splang.app' },
  //   logo: logoSplang,
  // },
  {
    name: 'the sustainable list',
    year: '2020',
    description:
      'A curated list of ethical fashion brands from all over the world. The sustainable list features certified fashion brands that produce good-looking, high-quality products while doing less harm to the planet.',
    link: {
      href: 'https://thesustainablelist.com/',
      label: 'thesustainablelist.com',
    },
    logo: logoTheSustainableList,
  },
  {
    name: 'VLC Tech Hub app',
    year: '2018',
    description:
      'A mobile app featuring events and jobs provided by the vlctechhub.org API. It was a prototype bootstrapped using Create React Native App and Expo to showcase some of these tools’ capabilities.',
    link: {
      href: 'https://github.com/VLCTechHub/VLCTechHub-app',
      label: 'github.com',
    },
    logo: logoVlcTechHub,
  },
  {
    name: 'Oskar',
    year: '2016',
    description:
      'A Slackbot I developed while working at Hanno, by the time a pioneer in the space of remote work. As the result of a design thinking workshop, it tracked how happy people are at work to help everyone feel less isolated.',
    link: {
      href: 'https://github.com/marcelkalveram/oskar',
      label: 'github.com',
    },
    logo: logoOskar,
  },
  {
    name: 'Creative Mornings Valencia',
    year: '2015',
    description:
      'For two consecutive years, I was the organiser of Creative Mornings Valencia, a monthly breakfast event with the goal to unite the creative community of each city once a month for an inspiring talk on a creative topic.',
    link: {
      href: 'https://creativemornings.com/cities/vlc',
      label: 'creativemornings.com',
    },
    logo: logoCreativeMorningsValencia,
    bgColor: 'bg-[#EC5D2A]',
  },
  {
    name: 'The Book Project',
    year: '2014',
    description:
      'A collaborative book co-authored by twelve people via community submissions and a monthly voting round. The book got published via the crowdsourcing platform Pentian and is available on Amazon.',
    link: {
      href: 'https://www.amazon.es/libro-mil-manos-Book-Project/dp/1635030447/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B8NGYR34YGHA&dib=eyJ2IjoiMSJ9.-_1NM-dmFAIlVhSgvRNdccy-AjoSuhfZYmVr821MIBYT-wr7f_a24EMUx0OURSCHPQm2oKkAwdXujoE-wnSCB2A3B8tsCMDAqS_b5nd-Jir7fYeDzguCcWYwyyFsh3NrhzFcrkbB_MxB1OiABBCcmN4Itf76R4LsDVJYiyPgyX6lNcWdrfDI8deirFYd15JjuApANesPsBgOYDjbJz0n11tZ3ZpSOqI924cIePQCPXYU1LcHqYD2zTvJ1OLF2JsC4V0q_ZfkbP7DkmKPJ9e_IsYl1YIO6qRPmZHL1KGJIOE.30LDtcWtmcNw-KXox3px_tL_JhH0PgxR7pfjfohhCdU&dib_tag=se&keywords=un+libro+a+mil+manos&qid=1716990123&sprefix=un+libro+a+mil+manos%2Caps%2C156&sr=8-1',
      label: 'amazon.es',
    },
    logo: logoTheBookProject,
  },
  // {
  //   name: 'Style Advisor',
  //   year: '2013',
  //   description:
  //     'A platform to share fashion and style advice with the fashion community. Created with and for my wife Andreea to help her explore and share her passion with the world in a blog-like format.',
  //   link: {
  //     href: 'https://style-advisor.com',
  //     label: 'style-advisor.com',
  //   },
  //   logo: logoStyleAdvisor,
  // },
  {
    name: 'nuhouse.de',
    year: '2004-2008',
    description:
      'Nuhouse was an online platform and forum specialised in deep house music. Starting as a hobby project about my major passion at that time, I used Wordpress and phpBB to create a little community of around 200-300 people.',
    link: {
      href: 'https://web.archive.org/web/20060708213335/http://forum.nuhouse.de/',
      label: 'web.archive.org',
    },
    logo: logoNuhouse,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description:
    'These are initiatives I pursued outside of work to challenge myself, explore new technologies, and simply have fun.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="These are projects I worked on out of curiosity and passion."
      intro="Here I share initiatives I pursued outside of work, to challenge myself, explore new technologies, or simply have fun."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <Card.Eyebrow>{project.year}</Card.Eyebrow>
            <div
              className={clsx(
                'relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0',
                project.bgColor ? project.bgColor : null,
              )}
            >
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>

            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
