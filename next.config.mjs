import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      // 2012 articles
      {
        source: '/articles/2012-08-18-optimizing-productivity-with-kanban-flow',
        destination: '/articles/optimizing-productivity-with-kanban-flow',
        permanent: true,
      },
      {
        source: '/articles/2012-10-28-three-essential-debugging-tools-for-mobile-applications',
        destination: '/articles/three-essential-debugging-tools-for-mobile-applications',
        permanent: true,
      },
      {
        source: '/articles/2012-11-03-coursera-gamification-course-wrap-up',
        destination: '/articles/coursera-gamification-course-wrap-up',
        permanent: true,
      },
      // 2013 articles
      {
        source: '/articles/2013-01-09-why-valencia-is-an-amazing-city-for-start-ups',
        destination: '/articles/why-valencia-is-an-amazing-city-for-start-ups',
        permanent: true,
      },
      {
        source: '/articles/2013-02-13-boost-your-web-development-productivity-with-these-rapid-scaffolding-tools',
        destination: '/articles/boost-your-web-development-productivity-with-these-rapid-scaffolding-tools',
        permanent: true,
      },
      {
        source: '/articles/2013-04-02-how-to-cultivate-your-ideas',
        destination: '/articles/how-to-cultivate-your-ideas',
        permanent: true,
      },
      {
        source: '/articles/2013-05-13-timeless-web-development-best-practices',
        destination: '/articles/timeless-web-development-best-practices',
        permanent: true,
      },
      {
        source: '/articles/2013-09-17-three-visual-tools-for-a-better-responsive-workflow',
        destination: '/articles/three-visual-tools-for-a-better-responsive-workflow',
        permanent: true,
      },
      {
        source: '/articles/2013-10-09-five-characteristics-of-outstanding-web-devs',
        destination: '/articles/five-characteristics-of-outstanding-web-devs',
        permanent: true,
      },
      {
        source: '/articles/2013-10-18-is-it-better-to-work-at-home-or-at-the-office',
        destination: '/articles/is-it-better-to-work-at-home-or-at-the-office',
        permanent: true,
      },
      {
        source: '/articles/2013-11-20-developing-for-offline-first',
        destination: '/articles/developing-for-offline-first',
        permanent: true,
      },
      // 2014 articles
      {
        source: '/articles/2014-01-31-every-developers-most-hated-discipline',
        destination: '/articles/every-developers-most-hated-discipline',
        permanent: true,
      },
      {
        source: '/articles/2014-02-20-story-of-the-book-project',
        destination: '/articles/story-of-the-book-project',
        permanent: true,
      },
      {
        source: '/articles/2014-03-14-human-factor',
        destination: '/articles/human-factor',
        permanent: true,
      },
      {
        source: '/articles/2014-04-07-benefits-of-a-long-attention-span',
        destination: '/articles/benefits-of-a-long-attention-span',
        permanent: true,
      },
      {
        source: '/articles/2014-05-12-alfred-workflows-to-improve-your-workflows',
        destination: '/articles/alfred-workflows-to-improve-your-workflows',
        permanent: true,
      },
      {
        source: '/articles/2014-06-09-a-lazy-mans-guide-to-task-automation',
        destination: '/articles/a-lazy-mans-guide-to-task-automation',
        permanent: true,
      },
      {
        source: '/articles/2014-10-26-broken-dont-fix',
        destination: '/articles/broken-dont-fix',
        permanent: true,
      },
      {
        source: '/articles/2014-12-10-company-blogging-for-the-win',
        destination: '/articles/company-blogging-for-the-win',
        permanent: true,
      },
      {
        source: '/articles/2014-12-18-what-I-learned-during-my-first-3-months-at-hanno',
        destination: '/articles/what-I-learned-during-my-first-3-months-at-hanno',
        permanent: true,
      },
      // 2015 articles
      {
        source: '/articles/2015-04-24-a-simple-experiment-a-huge-impact',
        destination: '/articles/a-simple-experiment-a-huge-impact',
        permanent: true,
      },
      {
        source: '/articles/2015-06-27-here-is-the-tool-we-ve-built-to-overcome-remote-isolation-in-our-team',
        destination: '/articles/here-is-the-tool-we-ve-built-to-overcome-remote-isolation-in-our-team',
        permanent: true,
      },
      {
        source: '/articles/2015-07-01-why-offline-first-matters-and-what-developers-should-know-about-it',
        destination: '/articles/why-offline-first-matters-and-what-developers-should-know-about-it',
        permanent: true,
      },
      {
        source: '/articles/2015-07-27-99-of-my-ideas-are-rubbish',
        destination: '/articles/99-of-my-ideas-are-rubbish',
        permanent: true,
      },
      // 2016 articles
      {
        source: '/articles/2016-05-03-the-last-thing-you-need-is-a-programmer',
        destination: '/articles/the-last-thing-you-need-is-a-programmer',
        permanent: true,
      },
      {
        source: '/articles/2016-06-29-path-to-react-native-from-rookie-to-rockstar',
        destination: '/articles/path-to-react-native-from-rookie-to-rockstar',
        permanent: true,
      },
      // 2017 articles
      {
        source: '/articles/2017-01-31-building-prepd-the-pros-and-cons-of-launching-a-product-with-react-native',
        destination: '/articles/building-prepd-the-pros-and-cons-of-launching-a-product-with-react-native',
        permanent: true,
      },
      {
        source: '/articles/2017-02-06-how-to-automate-your-react-native-deployment-workflow-using-bitrise',
        destination: '/articles/how-to-automate-your-react-native-deployment-workflow-using-bitrise',
        permanent: true,
      },
      // 2018 articles
      {
        source: '/articles/2018-09-27-speeding-up-the-build-of-a-surprise-dinner-app-in-react-native-using-expo',
        destination: '/articles/speeding-up-the-build-of-a-surprise-dinner-app-in-react-native-using-expo',
        permanent: true,
      },
      {
        source: '/articles/2018-10-01-battle-testing-a-ridesharing-api-and-react-natives-mapview-in-expo',
        destination: '/articles/battle-testing-a-ridesharing-api-and-react-natives-mapview-in-expo',
        permanent: true,
      },
      {
        source: '/articles/2018-11-05-supporting-multiple-languages-in-react-native-with-expos-localization-module',
        destination: '/articles/supporting-multiple-languages-in-react-native-with-expos-localization-module',
        permanent: true,
      },
      {
        source: '/articles/2018-12-03-the-intricacies-of-nesting-navigators-in-react-native-using-react-navigation',
        destination: '/articles/the-intricacies-of-nesting-navigators-in-react-native-using-react-navigation',
        permanent: true,
      },
      // 2019 articles
      {
        source: '/articles/2019-04-16-anti-patterns-to-avoid-when-building-a-component-library-in-react-native',
        destination: '/articles/anti-patterns-to-avoid-when-building-a-component-library-in-react-native',
        permanent: true,
      },
      {
        source: '/articles/2019-06-11-upgrading-react-native-to-version-59-and-beyond-a-step-by-step-guide',
        destination: '/articles/upgrading-react-native-to-version-59-and-beyond-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/articles/2019-09-20-bridging-the-gap-from-javascript-to-native-user-preferences-in-react-native',
        destination: '/articles/bridging-the-gap-from-javascript-to-native-user-preferences-in-react-native',
        permanent: true,
      },
      {
        source: '/articles/2019-12-30-common-cross-platform-pitfalls-to-avoid-in-react-native',
        destination: '/articles/common-cross-platform-pitfalls-to-avoid-in-react-native',
        permanent: true,
      },
      // 2020 articles
      {
        source: '/articles/2020-05-28-how-the-sustainable-list-came-to-life',
        destination: '/articles/how-the-sustainable-list-came-to-life',
        permanent: true,
      },
      {
        source: '/articles/2020-12-22-a-bulletproof-approach-to-storing-sensitive-user-data-in-react-native',
        destination: '/articles/a-bulletproof-approach-to-storing-sensitive-user-data-in-react-native',
        permanent: true,
      },
      // 2024 articles
      {
        source: '/articles/2024-06-25-startup-lessons-part-1',
        destination: '/articles/startup-lessons-part-1',
        permanent: true,
      },
      {
        source: '/articles/2024-06-28-startup-lessons-part-2',
        destination: '/articles/startup-lessons-part-2',
        permanent: true,
      },
      {
        source: '/articles/2024-07-09-startup-lessons-part-3',
        destination: '/articles/startup-lessons-part-3',
        permanent: true,
      },
      {
        source: '/articles/2024-09-30-ai-and-the-future-of-product-engineering',
        destination: '/articles/ai-and-the-future-of-product-engineering',
        permanent: true,
      },
      // 2025 articles
      {
        source: '/articles/2025-09-21-you-might-be-wrong',
        destination: '/articles/you-might-be-wrong',
        permanent: true,
      },
      {
        source: '/articles/2025-12-15-vibe-coding-blessing-or-curse',
        destination: '/articles/vibe-coding-blessing-or-curse',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
