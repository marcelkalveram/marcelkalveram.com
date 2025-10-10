import logoMvpr from '@/images/logos/projects/mvpr.png'
import logoHanno from '@/images/logos/projects/hanno.png'
import logoOmron from '@/images/logos/projects/omron.png'
import logoMytheresa from '@/images/logos/projects/mytheresa.png'
import logoUncovercity from '@/images/logos/projects/uncovercity.png'
import logoPrepd from '@/images/logos/projects/prepd.png'
import logoGermanDoctors from '@/images/logos/projects/german-doctors.png'
import logoAva from '@/images/logos/projects/ava.png'
import logoUnicef from '@/images/logos/projects/unicef.png'

export const projectsWork = [
  {
    name: 'MVPR',
    year: '2021',
    tags: ['Web', 'Tailwind', 'Firebase', 'AI'],
    description:
      "As the engineering lead, I spearheaded the creation of the web app's initial prototype and core features using Firebase and Tailwind UI. After validating the problem/solution fit, we aimed to solve the most common inefficiencies in PR by building AI-powered solutions.",
    logo: logoMvpr,
    link: {
      label: 'Go to website',
      href: 'https://mvpr.io',
    },
  },
  {
    name: 'Hanno',
    year: '2019',
    tags: ['Mobile', 'React Native', 'Jest', 'Detox'],
    description:
      'As part of a team of two engineers and one UX/UI designer, I helped develop two mobile healthcare apps in React Native. I had to thoroughly follow extensive unit and e2e testing best practices to comply with quality standards in the strictly regulated healthcare sector.',
    logo: logoHanno,
    link: {
      label: 'Go to website',
      href: 'https://hanno.co',
    },
  },
  {
    name: 'mytheresa',
    year: '2018',
    tags: ['Mobile', 'React Native', 'TypeScript', 'Jest'],
    description:
      "After leading a one-week workshop for the dev team to get proficient in React Native, I helped migrate the company's native iOS/Android app to it, integrating a reliable CI/CD pipeline, establishing unit and e2e testing best practices, and upskilling individual contributors.",
    logo: logoMytheresa,
    link: {
      label: 'See on Apple app store',
      href: 'https://apps.apple.com/us/app/mytheresa-shop-luxury-brands/id484615570?platform=iphone',
    },
  },
  {
    name: 'uncovercity',
    year: '2017',
    tags: ['Mobile', 'React Native', 'Redux'],
    description:
      'Working alongside a UX/UI designer and backend developer, I implemented the mobile app for this surprise dinner startup. Part of the challenge was integrating the API for a third-party car-sharing service and displaying real-time updates to the user.',
    logo: logoUncovercity,
    link: {
      label: 'Read blog post series',
      href: '/articles/2018-09-27-speeding-up-the-build-of-a-surprise-dinner-app-in-react-native-using-expo',
      blog: true,
    },
  },
  {
    name: 'prepd',
    year: '2016',
    tags: ['Mobile', 'React Native', 'mobX', 'Bitrise'],
    description:
      'When our client launched their physical lunch box product, supported by over 40,000 people through Kickstarter, I was part of the team that shipped the accompanying recipe app within six months. Using React Native, we were able to accelerate the process significantly.',
    logo: logoPrepd,
    link: {
      label: 'Watch the showreel',
      href: 'https://vimeo.com/203132849',
      showreel: true,
    },
  },
  {
    name: 'Omron EVOLV',
    year: '2016',
    tags: ['Web', 'React.js', 'Middleman'],
    description:
      'I was the lead front-end developer of a team of three that built the marketing website of the new Omron EVOLV blood pressure monitor. We built and shipped the site—which features an interactive and immersive product walkthrough—in just four months.',
    logo: logoOmron,
    link: {
      label: 'Watch the showreel',
      href: 'https://vimeo.com/233500897',
      showreel: true,
    },
  },
  {
    name: 'Ava',
    year: '2015',
    tags: ['Web', 'node.js', 'Pub/Sub'],
    description:
      'Ava is an app for the Deaf and hard of hearing that enables high-accuracy 24/7 real-time captions. I was part of the team developing the web-based front end, which uses a light API layer, enabling people to participate in conversations from any browser.',
    logo: logoAva,
    link: {
      label: 'Go to website',
      href: 'https://www.ava.me/',
    },
  },
  {
    name: 'German Doctors',
    year: '2013',
    tags: ['Web', 'Responsive Design', 'Contao CMS'],
    description:
      "I was the technical project manager at Cologne's digital web agency JUNGMUT when German Doctors asked us to redesign their website. With a small team of three developers, we rebuilt the entire site and made it accessible on mobile devices for the first time.",

    logo: logoGermanDoctors,
    link: {
      label: 'Go to website',
      href: 'https://www.german-doctors.de/',
    },
  },
  {
    name: 'UNICEF',
    year: '2012',
    tags: ['Web', 'CakePHP', 'Backbone.JS'],
    description:
      "As part of a team of two developers, I built a web app for the International Day of Children's Rights. The app featured an interactive map where children and schools could voice their opinions. We shipped this challenging project on a tight deadline of just one month.",

    logo: logoUnicef,
    link: {
      label: 'Go to Awwwards submission',
      href: 'https://www.awwwards.com/sites/unicef-aktionstag-kinderrechte',
    },
  },
  // {
  //   name: 'Delusha',
  //   year: '2010',
  //   tags: ['Web', 'CakePHP', 'jQuery'],
  //   description:
  //     "I developed a complete eCommerce shop for custom-made jewellery from scratch in CakePHP, integrating a jewellery design tool created in Adobe Flash. I also set up the back-office and user management interface using CakePHP's scaffolding capabilities.",
  //   logo: logoDelusha,
  // },
]
