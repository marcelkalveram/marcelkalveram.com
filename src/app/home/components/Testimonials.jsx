import { Container } from '@/components/Container'
import TestimonialsJonLay from '@/images/testimonials/jon-lay.jpg'
import TestimonialsNizarJalbout from '@/images/testimonials/nizar-jalbout.jpg'
import TestimonialsBenHeath from '@/images/testimonials/ben-heath.jpg'
import { TestimonialsAvatar } from './TestimonialsAvatar'

export function Testimonials() {
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
                <TestimonialsAvatar image={TestimonialsBenHeath} />
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
                <TestimonialsAvatar image={TestimonialsJonLay} />
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
                <TestimonialsAvatar image={TestimonialsNizarJalbout} />
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
