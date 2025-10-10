import Image from 'next/image'
import { Container } from '@/components/Container'
import logoVodafone from '@/images/logos/clients/vodafone.png'
import logoDisney from '@/images/logos/clients/disney.png'
import logoUber from '@/images/logos/clients/uber.png'
import logoOmron from '@/images/logos/clients/omron.png'
import logoUnicef from '@/images/logos/clients/unicef.png'

export function Companies() {
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
