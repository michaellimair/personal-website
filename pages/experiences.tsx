import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import useWorkExperience from '@hooks/useWorkExperience';
import ExperienceDisplay from '@components/ExperienceDisplay';
import useOrganizationalExperience from '@hooks/useOrganizationalExperience';

const Experiences: NextPage = () => {
  const workExperience = useWorkExperience();
  const organizationalExperience = useOrganizationalExperience();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:text-white dark:bg-black">
      <Head>
        <title>Experiences | Michael Lim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex flex-col flex-1 py-8 px-4 w-4/5 max-w-screen-lg text-center">
        <h1 className="text-5xl font-bold" data-aos="fade-up">
          Experiences
        </h1>
        <div className="py-4">
          <h2 className="text-2xl font-bold" data-aos="fade-up">
            Work Experience
          </h2>
          <ExperienceDisplay experiences={workExperience} />
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-bold" data-aos="fade-up">
            Organizational Experience
          </h2>
          <ExperienceDisplay experiences={organizationalExperience} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiences;
