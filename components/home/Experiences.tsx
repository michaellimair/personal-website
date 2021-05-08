import { FC } from 'react';
import type { Experience } from 'types/Experience';
import Timeline from '@components/ExperienceTimeline';
import SimpleExperienceTimeline from '@components/SimpleExperienceTimeline';

const Experiences: FC<{ experiences: Experience[] }> = ({ experiences }) => (
  <div className="max-w-full sm:w-full pb-14 py-2">
    <SimpleExperienceTimeline items={experiences} />
  </div>
);

export default Experiences;
