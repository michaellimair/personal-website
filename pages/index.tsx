import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

const Home: NextPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen dark:text-white dark:bg-black">
    <Head>
      <title>Home | Michael Lim</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navigation />

    <main className="flex flex-col items-center justify-center flex-1 py-8 px-4 w-4/5 max-w-screen-lg text-center">
      <h1 className="text-5xl font-bold" data-aos="fade-up">
        Hi 👋 ! I&apos;m Michael Lim
      </h1>
      <p className="mt-3 text-2xl" data-aos="fade-up">
        Year 4 Computer Science, City University of Hong Kong
      </p>
      <p className="mt-3 text-2xl" data-aos="fade-up">
        <a className="text-blue-600 dark:text-blue-300" href="tel:+85255882319">+852 5588 2319</a>
        {' | '}
        <a className="text-blue-600 dark:text-blue-300" href="mailto:michaellimbong@gmail.com">michaellimbong@gmail.com</a>
      </p>
      <div className="mt-6 rounded-full border border-gray-800 mb-6" data-aos="fade-up" style={{ height: 200, width: 200 }}>
        <Image src="/linkedin-image.jpeg" className="rounded-full" height="200" width="200" />
      </div>
    </main>

    <Footer />
  </div>
);

export default Home;
