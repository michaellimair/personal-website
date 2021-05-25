import { FC } from 'react';
import Image from 'next/image';

const socialMedias = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/michaellimair',
    imageSrc: {
      dark: '/facebook-dark.png',
      light: '/facebook-light.png',
    },
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/michaelxlimb',
    imageSrc: {
      dark: '/instagram-dark.png',
      light: '/instagram-light.png',
    },

  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michaellimair',
    imageSrc: {
      dark: '/linkedin-dark.png',
      light: '/linkedin-light.png',
    },
  },
];

const Footer: FC = () => (
  <footer className="w-full text-center border-t dark:bg-gray-800 py-4">
    <div className="mb-3">
      {`Website by Michael Lim. ${new Date().getFullYear()}`}
    </div>
    <div className="mt-3 mb-1 space-x-5 block dark:hidden">
      {socialMedias.map((social) => (
        <a href={social.href} key={social.name} title={social.name} rel="noopener noreferrer" target="_blank">
          <img className="social-logo" src={social.imageSrc.light} alt={social.name} />
        </a>
      ))}
    </div>
    <div className="mt-3 mb-1 space-x-5 hidden dark:block">
      {socialMedias.map((social) => (
        <a href={social.href} key={social.name} title={social.name} rel="noopener noreferrer" target="_blank">
          <img className="social-logo" src={social.imageSrc.dark} alt={social.name} />
        </a>
      ))}
    </div>
    <style jsx>
      {`
        .social-logo {
          height: 30px;
          width: auto;
          display: inline;
        }
      `}
    </style>
  </footer>
);

export default Footer;
