import { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/outline';
import { Experience } from 'types/Experience';
import toMonthDisplay from '@utils/toMonthDisplay';

const ExperienceTimelineItem: FC<{ experience: Experience }> = ({ experience }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      key={experience.companyName}
      className="timeline-item before:bg-blue-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={[
          'timeline-content py-2 px-4 border border-blue-800 before:border-blue-800 dark:border-blue-400 drop-shadow dark:before:border-blue-400',
          isHovering ? 'flex z-50 shadow-xl' : '',
          !experience.positions[0].endTime ? 'text-black dark:text-white' : 'text-black dark:text-white',
          !experience.positions[0].endTime ? 'before:bg-gray-200 bg-gray-200 dark:bg-gray-600 dark:before:bg-gray-600' : 'bg-gray-300 before:bg-gray-300 dark:bg-gray-800 dark:before:bg-gray-800',
        ].join(' ')}
        style={{
          width: isHovering ? undefined : experience.companyName.length * 12,
          minWidth: isHovering ? 300 : undefined,
        }}
      >
        <Image
          src={experience.logoLink}
          width={isHovering ? 100 : 80}
          height={isHovering ? 80 : 50}
          objectFit="contain"
          alt={experience.companyName}
        />
        {isHovering ? (
          <div className="flex-1 px-4 py-2 text-left">
            <a href={experience.website} className="align-middle" title={experience.companyName} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold text-blue-600 dark:text-blue-300 inline">{experience.companyName}</h3>
              <LinkIcon className="h-5 w-5 inline ml-2" aria-hidden="true" />
            </a>
            <div className="space-y-3">
              {experience.positions.map((position) => (
                <div className="text-left w-full" key={position.position}>
                  <p className="mt-2 text-sm md:text-md font-bold">
                    {position.position}
                  </p>
                  <p className="mt-2 text-xs">
                    {`${toMonthDisplay(position.startTime)} - ${position.endTime ? toMonthDisplay(position.endTime) : 'Now'}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="font-bold text-sm">{experience.companyName}</p>
        )}
      </div>
      <style jsx>
        {`
          
          .timeline-item {
            position: relative;
          }
          
          .timeline-item::before {
            content: '';
            width: 20px;
            height: 20px;
            display: block;
            border-radius: 100%;
            border: 1px;
          }
          
          .timeline-content {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            min-width: 100px;
            border-radius: 5px;
            text-align: center;
          }
          
          .timeline-content::before {
            content: '';
            width: 12px;
            height: 12px;
            display: block;
            position: absolute;
            top: -11px;
            z-index: -1;
            border-width: 1px 1px 0 0;
            margin-left: -2px;
            left: 50%;
            transform: rotate(-45deg) translateX(-50%);
          }
          `}
      </style>
    </div>
  );
};

const ExperienceTimeline: FC<{ items: Experience[] }> = (props) => {
  const { items } = props;

  return (
    <div className="timeline bg-gray-400">
      <div className="timeline-progress bg-blue-800 w-full" />
      <div className="timeline-items">
        {items.map((item) => (
          <ExperienceTimelineItem experience={item} key={item.companyName} />
        ))}
      </div>
      <style jsx>
        {`
        .timeline {
          margin: 50px 60px;
          height: 4px;
        }
        
        .timeline-progress {
          height: 100%;
        }
        
        .timeline-items {
          margin-left: -10px;
          margin-right: -10px;
          margin-top: -12px;
          display: flex;
          justify-content: space-between;
        }        
        `}
      </style>
    </div>
  );
};

export default ExperienceTimeline;
