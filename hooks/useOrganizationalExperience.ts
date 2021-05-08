import type { Experience } from 'types/Experience';

const useOrganizationalExperience = (): Experience[] => [
  {
    companyName: 'TEDxCityUHongKong',
    logoLink: '/tedxcityuhongkong.png',
    positions: [
      {
        position: 'Technical Manager',
        startTime: new Date('2020-05-01'),
        endTime: new Date('2021-05-01'),
      },
      {
        position: 'Event Manager',
        startTime: new Date('2020-05-01'),
        endTime: new Date('2021-05-01'),
      },
    ],
    website: 'https://tedxcityuhongkong.com',
  },
  {
    companyName: 'PERMISI',
    logoLink: '/permisi.png',
    positions: [
      {
        position: 'Advisor',
        startTime: new Date('2020-05-01'),
        endTime: new Date('2021-05-01'),
      },
      {
        position: 'Vice President of External Affairs',
        startTime: new Date('2019-05-01'),
        endTime: new Date('2020-05-01'),
      },
      {
        position: 'Event Director',
        startTime: new Date('2018-09-01'),
        endTime: new Date('2019-05-01'),
      },
    ],
    website: 'https://permisi.hk',
  },
];

export default useOrganizationalExperience;
