import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export function TestimonialsAvatar({ image, className = null, ...props }) {
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
