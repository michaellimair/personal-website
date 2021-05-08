import { FC } from 'react';

const Footer: FC = () => (
  <footer className="flex items-center justify-center w-full h-14 border-t dark:bg-gray-800">
    {`Michael Lim ${new Date().getFullYear()}`}
  </footer>
);

export default Footer;
