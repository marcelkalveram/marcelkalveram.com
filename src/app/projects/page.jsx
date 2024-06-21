import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoTheBookProject from '@/images/logos/projects/the-book-project.png'
import logoCreativeMorningsValencia from '@/images/logos/projects/creative-mornings-valencia.png'
import logoToastmasters from '@/images/logos/projects/toastmasters.png'
import logoOskar from '@/images/logos/projects/oskar.png'
import logoTheSustainableList from '@/images/logos/projects/the-sustainable-list.png'
import logoVlcTechHub from '@/images/logos/projects/vlc-tech-hub.png'
import logoNuhouse from '@/images/logos/projects/nuhouse.png'
import clsx from 'clsx'
import logoMvpr from '@/images/logos/work/mvpr.png'
import logoHanno from '@/images/logos/work/hanno.png'
import logoMytheresa from '@/images/logos/projects/mytheresa.png'
import logoUncovercity from '@/images/logos/projects/uncovercity.png'
import logoPrepd from '@/images/logos/projects/prepd.png'
import logoNcube from '@/images/logos/projects/ncube.png'
import logoAva from '@/images/logos/projects/ava.png'
import logoUnicef from '@/images/logos/projects/unicef.png'
import logoDelusha from '@/images/logos/work/delusha.png'

const projectsWork = [
  {
    name: 'MVPR',
    year: '2021',
    tags: ['Web', 'Tailwind', 'Firebase', 'AI'],
    description:
      "As the lead developer, I spearheaded the creation of the web app's initial prototype and core features using Firebase and Tailwind UI. After validating the problem/solution fit, we aimed to solve the most common inefficiencies in PR by building AI-powered solutions.",
    logo: logoMvpr,
  },
  {
    name: 'Hanno',
    year: '2019',
    tags: ['Mobile', 'React Native', 'Jest', 'Detox'],
    description:
      'As part of a team of two engineers and one UX/UI designer, I helped develop two mobile healthcare apps in React Native. I had to thoroughly follow extensive unit and e2e testing best practices to comply with quality standards in the strictly regulated healthcare sector.',
    logo: logoHanno,
  },
  {
    name: 'mytheresa',
    year: '2018',
    tags: ['Mobile', 'React Native', 'Jest', 'Detox'],
    description:
      "After leading a one-week workshop for the dev team to get proficient in React Native, I helped migrate the company's native iOS/Android app to it, integrating a reliable CI/CD pipeline, establishing unit and e2e testing best practices, and upskilling individual contributors.",
    logo: logoMytheresa,
  },
  {
    name: 'uncovercity',
    year: '2017',
    tags: ['Mobile', 'React Native'],
    description:
      'Working alongside a UX/UI designer and backend developer, I implemented the mobile app for this surprise dinner startup. Part of the challenge was integrating the API for a third-party car-sharing service and displaying real-time updates to the user.',
    logo: logoUncovercity,
  },
  {
    name: 'prepd',
    year: '2016',
    tags: ['Mobile', 'React Native', 'Bitrise'],
    description:
      'When our client launched their physical lunch box product, supported by over 40,000 people through Kickstarter, I was part of the team that shipped the accompanying recipe app within six months. Using React Native, we were able to accelerate the process significantly.',
    logo: logoPrepd,
  },
  {
    name: 'Ava',
    year: '2015',
    tags: ['Web', 'node.js', 'Pub/Sub'],
    description:
      'Ava is an app for the Deaf and hard of hearing that enables high-accuracy 24/7 real-time captions. I was part of the team developing the web-based front end, which uses a light API layer to connect to other participants and allows people to participate in conversations from any browser.',
    logo: logoAva,
  },
  {
    name: 'nCube Home',
    year: '2014',
    tags: ['Mobile', 'AngularJS'],
    description:
      'I helped develop an early prototype for an Intelligent Smart Home platform called nCube, a pioneer in IoT platform development. To quickly build the app, we used Angular Mobile and created an API layer to communicate with the nCube hub.',
    logo: logoNcube,
  },
  {
    name: 'UNICEF',
    year: '2012',
    tags: ['Web', 'CakePHP', 'Backbone.JS'],
    description:
      "As part of a team of two developers, I built a web app for the International Day of Children's Rights. The app featured an interactive map where children and schools could voice their opinions. We shipped this challenging project on a tight deadline of just one month.",

    logo: logoUnicef,
  },
  {
    name: 'Delusha',
    year: '2010',
    tags: ['Web', 'CakePHP', 'jQuery'],
    description:
      "I developed a complete eCommerce shop for custom-made jewellery from scratch in CakePHP, integrating a jewellery design tool created in Adobe Flash. I also set up the back-office and user management interface using CakePHP's scaffolding capabilities.",
    logo: logoDelusha,
  },
]
const projectsPersonal = [
  {
    name: 'the sustainable list',
    year: '2020',
    tags: ['Web', 'React', 'Next.JS'],
    description:
      'This web app offers a list of global ethical fashion brands prioritising high-quality products while minimising environmental harm. Users can filter brands based on various criteria or search for specific keywords.',
    link: {
      href: 'https://thesustainablelist.com/',
      label: 'thesustainablelist.com',
    },
    logo: logoTheSustainableList,
  },
  {
    name: 'VLC Tech Hub app',
    year: '2018',
    tags: ['Mobile', 'React Native', 'node.js'],
    description:
      'This mobile app showcases events and job listings from the vlctechhub.org API. It was created as a prototype using Create React Native App and Expo to demonstrate the capabilities of these tools.',
    link: {
      href: 'https://github.com/VLCTechHub/VLCTechHub-app',
      label: 'github.com',
    },
    logo: logoVlcTechHub,
  },
  {
    name: 'Oskar',
    year: '2016',
    tags: ['Slackbot', 'node.js'],
    description:
      "I developed this Slackbot at Hanno, a company known for pioneering remote work. It was the result of a design thinking workshop and was designed to track employees' happiness to mitigate feelings of isolation.",
    link: {
      href: 'https://github.com/marcelkalveram/oskar',
      label: 'github.com',
    },
    logo: logoOskar,
  },
  {
    name: 'The Book Project',
    year: '2014',
    tags: ['Web', 'Cake PHP', 'Open Source'],
    description:
      'Twelve individuals co-authored a book through community submissions and a monthly voting round. The book was published using the crowdsourcing platform Pentian and is now available for purchase on Amazon.',
    link: {
      href: 'https://www.amazon.es/libro-mil-manos-Book-Project/dp/1635030447/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B8NGYR34YGHA&dib=eyJ2IjoiMSJ9.-_1NM-dmFAIlVhSgvRNdccy-AjoSuhfZYmVr821MIBYT-wr7f_a24EMUx0OURSCHPQm2oKkAwdXujoE-wnSCB2A3B8tsCMDAqS_b5nd-Jir7fYeDzguCcWYwyyFsh3NrhzFcrkbB_MxB1OiABBCcmN4Itf76R4LsDVJYiyPgyX6lNcWdrfDI8deirFYd15JjuApANesPsBgOYDjbJz0n11tZ3ZpSOqI924cIePQCPXYU1LcHqYD2zTvJ1OLF2JsC4V0q_ZfkbP7DkmKPJ9e_IsYl1YIO6qRPmZHL1KGJIOE.30LDtcWtmcNw-KXox3px_tL_JhH0PgxR7pfjfohhCdU&dib_tag=se&keywords=un+libro+a+mil+manos&qid=1716990123&sprefix=un+libro+a+mil+manos%2Caps%2C156&sr=8-1',
      label: 'amazon.es',
    },
    logo: logoTheBookProject,
  },
  {
    name: 'nuhouse.de',
    year: '2004',
    tags: ['Wordpress', 'phpBB'],
    description:
      'Nuhouse was an online platform and forum specialising in deep house music. Starting as a hobby project about my big passion at that time, I used WordPress and phpBB to create a little community of around 200-300 people.',
    link: {
      href: 'https://web.archive.org/web/20060708213335/http://forum.nuhouse.de/',
      label: 'web.archive.org',
    },
    logo: logoNuhouse,
  },
]

const projectsVolunteering = [
  {
    name: 'Creative Mornings Valencia',
    year: '2015-2016',
    description:
      'For two consecutive years, I was the organiser of Creative Mornings Valencia, a monthly breakfast event with the goal to unite the creative community of each city once a month for an inspiring talk on a creative topic.',
    link: {
      href: 'https://creativemornings.com/cities/vlc',
      label: 'creativemornings.com',
    },
    logo: logoCreativeMorningsValencia,
  },
  {
    name: 'Toastmasters Valencia',
    year: '2014-2016',
    description:
      'As the VP of Public Relations, I was responsible for generating awareness for the Toastmasters Club and attracting new members, promoting club activities through effective communication across all relevant channels.',
    link: {
      href: 'https://valenciatoastmasters.es/',
      label: 'valenciatoastmasters.es',
    },
    logo: logoToastmasters,
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
    'Here, I showcase some of the work I have completed for clients over the past 15+ years, along with a compilation of side projects and volunteer work I embarked on in my free time.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="A list of projects I worked on professionally and on the side"
      intro="Here, I showcase some of the work I have completed for clients over the past 15+ years, along with a compilation of side projects and volunteer work I embarked on in my free time."
    >
      <h2 className="relative z-10 order-first flex items-center border-b pb-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Work
      </h2>
      {/* <p className="mt-1 border-b pb-4 text-sm text-zinc-600 dark:text-zinc-400">
        The following is a list of projects I worked on at different agencies or
        as a freelancer.
      </p> */}
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectsWork.map((project) => (
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
              {project.link ? (
                <Card.Link href={project.link?.href || '#'} target="_blank">
                  {project.name}
                </Card.Link>
              ) : (
                project.name
              )}
            </h2>

            {project.tags && (
              <div className="mb-0.5 mt-2 flex space-x-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="py-.5 rounded-md bg-zinc-100 px-2 dark:bg-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Card.Description>{project.description}</Card.Description>

            {project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link?.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
      <h2 className="relative z-10 order-first mt-24 flex items-center border-b pb-4 text-xl font-semibold text-zinc-700 dark:text-zinc-400">
        Side projects
      </h2>
      {/* <p className="mt-1 border-b pb-4 text-sm text-gray-500">
        Here is a selection of projects I worked on out of curiosity, to
        challenge myself, or simply to have fun.
      </p> */}
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectsPersonal.map((project) => (
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

            {project.tags && (
              <div className="mb-0.5 mt-2 flex space-x-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="py-.5 rounded-md bg-zinc-100 px-2 group-hover:opacity-95 dark:bg-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>

      <h2 className="relative z-10 order-first mt-24 flex items-center text-xl font-semibold text-zinc-700 dark:text-zinc-400">
        Volunteering
      </h2>
      <p className="mt-1 border-b pb-4 text-sm text-gray-500"></p>
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectsVolunteering.map((project) => (
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

            {project.tags && (
              <div className="mb-0.5 mt-2 flex space-x-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="py-.5 rounded-md bg-zinc-100 px-2 dark:bg-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

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
