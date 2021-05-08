import 'tailwindcss/tailwind.css';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// import AOS from 'aos';
import { useEffect } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    // AOS.init();
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
