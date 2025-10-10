import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from './components/LinkIcon'

import { projectsWork } from './constants/projectsWork'
import { projectsPersonal } from './constants/projectsPersonal'
import { projectsVolunteering } from './constants/projectsVolunteering'

import clsx from 'clsx'

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
                    className="py-.5 rounded-md bg-zinc-100 px-2 group-hover:opacity-95 dark:bg-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Card.Description>{project.description}</Card.Description>

            {project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon
                  className="h-6 w-6 flex-none"
                  showreel={project.link.showreel}
                  blog={project.link.blog}
                />
                <span className="ml-2">{project.link?.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
      <h2 className="relative z-10 order-first mt-24 flex items-center border-b pb-4 text-xl font-semibold text-zinc-700 dark:text-zinc-400">
        Side projects
      </h2>
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
