import { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/outline';
import { Experience } from 'types/Experience';
import toMonthDisplay from '@utils/toMonthDisplay';

const SimpleExperienceTimelineItemDot: FC = () => (
  <div
    className="timeline-item before:bg-blue-800"
  >
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
          `}
    </style>
  </div>
);

const SimpleExperienceTimeline: FC<{ items: Experience[] }> = (props) => {
  const { items } = props;

  return (
    <div className="timeline">
      <div className="timeline-progress bg-blue-800 w-full" />
      <div className="timeline-items">
        {items.map((item) => (
          <div className="timeline-container">
            <div className="company-logo">
              <Image src={item.logoLink} width="80" height="50" objectFit="contain" />
            </div>
            <SimpleExperienceTimelineItemDot />
          </div>
        ))}
      </div>
      <style jsx>
        {`
        .company-logo {
          position: absolute;
          bottom: 200px;
        }

        .timeline-container {
          position: relative;
        }

        .timeline {
          margin: 50px 60px;
          position: relative;
        }
        
        .timeline-progress {
          height: 100%;
          height: 4px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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

export default SimpleExperienceTimeline;
