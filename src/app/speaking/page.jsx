import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description:
    'I’ve taught people about web and mobile development in Valencia, Europe and beyond.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="This is a collection of talks I gave on topics that I enjoyed."
      intro="Sharing my passion for technology with a larger audience helped me learn a lot not only about public speaking, but also to become a better leader and communicator."
    >
      <div className="space-y-20">
        <SpeakingSection title="International events">
          <Appearance
            href="https://escp.eu/"
            title="Introduction to Web and App Development"
            description="A two-day lecture about the foundations of my craft for a group of ~20 students that I gave once a year at the ESCP campuses in Turin, Berlin and Paris."
            event="ESCP Business School, 2020-2022"
            cta="Visit escp.eu"
          />

          <Appearance
            href="https://de.slideshare.net/MarcelKalveram/offline-first-the-painless-way"
            title="Offline-first, the painless way #2"
            description="The second time I gave this talk on preparing web apps for the offline state (identical to the one in Verona), but in a different location."
            event="TopConf Tallinn, November 2015"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.slideshare.net/secret/BJb3Iangb7Hxsc"
            title="Pairing and iterating in cross-functional UX Teams #2"
            description="The second time I present this talk on pairing and iteration, similar to the one I gave in Malaysia, but with a different group exercise."
            event="Wildcard Conference, Riga 2015"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.slideshare.net/slideshow/offline-first-the-painless-way/48248063"
            title="Offline-first, the painless way #1"
            description="In this talk, I discuss why and when we should prepare web apps for the offline state, and how we can detect it to prepare for a better UI."
            event="jsDay Verona, May 2015"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.slideshare.net/secret/BJb3Iangb7Hxsc"
            title="Pairing and iterating in cross-functional UX Teams #1"
            description="A presentation on the topic of pairing and iteration, including a group exercise where we could see those two ideas in action."
            event="UX Malaysia, November 2014"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.slideshare.net/slideshow/codemotion-talk-41932602/41932602"
            title="“Leveraging hood.ie to build for the offline state"
            description="I gave the audience a quick overview over the topic of iteration and pairing, and then conducted a group exercise where we could see those two concepts in action."
            event="Codemotion Madrid, November 2014"
            cta="See slides on slideshare.net"
          />
        </SpeakingSection>
        <SpeakingSection title="Local events">
          <Appearance
            href="https://www.slideshare.net/slideshow/lo-mejor-y-peor-de-react-native-valenciajs/73588482"
            title="Lo mejor y peor de React Native"
            description="In this talk I share everything I've learned about working with React Native after implementing a recipe app for a client from scratch in six months."
            event="ValenciaJS, March 2017"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.meetup.com/de-DE/vlctechhub/events/184088082/"
            title="Working without boundaries"
            description="In this event I talk with my colleague Matt about the challenges we all face working in teams, both remotely and in the office, and how to overcome them."
            event="Valencia Startups, May 2014"
            cta="See event on meetup.com"
          />
          <Appearance
            href="https://www.slideshare.net/slideshow/the-mobilewebatasnailspace/26131410"
            title="The mobile web – At a snail’s pace"
            description="In this talk, I present 7 techniques that enable developers to improve the page load and rendering time of their mobile web sites."
            event="Frontenders Valencia, September 2013"
            cta="See slides on slideshare.net"
          />
          <Appearance
            href="https://www.slideshare.net/slideshow/a-future-friendly-web/20017040"
            title="A Future Friendly Web"
            description="A presentation about the changing landscape of technology where I cover ideas on how we can better prepare our websites for the future."
            event="Betabeers Valencia, April 2013"
            cta="See slides on slideshare.net"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
