import type { Experience } from 'types/Experience';

const useWorkExperience = (): Experience[] => [
  {
    companyName: 'Bivi',
    logoLink: '/bivi.svg',
    positions: [
      {
        position: 'CTO',
        startTime: new Date('2020-04-01'),
      },
    ],
    website: 'https://bivi.us',
  },
  {
    companyName: 'EventX',
    logoLink: '/eventx.png',
    positions: [
      {
        position: 'Software Engineer',
        startTime: new Date('2020-05-01'),
        endTime: new Date('2021-05-08'),
      },
    ],
    website: 'https://eventx.io',
  },
  {
    companyName: 'Holywings',
    logoLink: '/holywings.png',
    positions: [
      {
        position: 'Software Engineer',
        startTime: new Date('2019-12-01'),
      },
    ],
    website: 'https://holywings.com',
  },
  {
    companyName: 'SOCIF',
    logoLink: '/socif.jpeg',
    positions: [
      {
        position: 'Full-Stack Engineer',
        startTime: new Date('2019-05-01'),
        endTime: new Date('2019-12-01'),
      },
    ],
    website: 'https://socif.co',
  },
];

export default useWorkExperience;
