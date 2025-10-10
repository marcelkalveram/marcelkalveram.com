import logoDatamaran from '@/images/logos/work/datamaran.jpg'
import logoFreelancer from '@/images/logos/work/freelancer.png'
import logoHanno from '@/images/logos/work/hanno.png'
import logoJungmut from '@/images/logos/work/jungmut.png'
import logoDelusha from '@/images/logos/work/delusha.png'
import logoMVPR from '@/images/logos/work/mvpr.png'

export const resume = [
  {
    company: 'Datamaran',
    title: 'Senior Product Engineer',
    logo: logoDatamaran,
    start: '2025',
    end: {
      label: 'Current',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'MVPR',
    title: 'Lead Developer',
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
