import { FC } from 'react';
import { Experience } from 'types/Experience';
import Image from 'next/image';
import toMonthDisplay from '@utils/toMonthDisplay';

const ExperienceDisplay: FC<{ experiences: Experience[] }> = ({ experiences }) => (
  <div className="md:space-x-4 py-4 flex space-y-2 md:space-y-0 flex-col md:flex-row">
    {experiences.map((experience) => (
      <div key={experience.companyName} className="w-full rounded-md flex flex-col drop-shadow-lg dark:bg-gray-500 shadow-md p-4 items-center justify-center">
        <div className="flex">
          <Image src={experience.logoLink} width={80} height={80} objectFit="contain" />
        </div>
        <div className="flex flex-col flex-1 text-center">
          <p className="font-bold text-xl">{experience.companyName}</p>
          <div className="space-y-2 flex-1 flex items-center flex-col justify-center">
            {experience.positions.map((position) => (
              <div className="flex justify-center flex-col" key={position.position}>
                <p className="font-bold text-sm">{position.position}</p>
                <p className="text-sm">
                  {toMonthDisplay(position.startTime)}
                  {' '}
                  -
                  {' '}
                  {position.endTime ? toMonthDisplay(position.endTime) : 'Now'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceDisplay;
