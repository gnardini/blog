import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

const Header: React.FC = () => {
  const router = useRouter();

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-16 max-w-screen-md mx-auto">
      <div
        className="flex items-center mb-6 md:mb-0"
        onClick={navigateToHome}
        style={{ cursor: 'pointer' }}
      >
        <img
          src="/profile-pic.jpg"
          alt="Your profile picture"
          className="rounded-full w-12 h-12 mr-4"
        />
        <h1 className="text-4xl font-semibold tracking-wide sm:tracking-widest">GONZA NARDINI</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-[1px] h-4 bg-gray-500 mx-3 hidden md:block" />
        <Link
          href="/blog"
          className="text-xl font-medium text-text-primary hover:underline hover:text-primary-accent mx-3 my-2"
        >
          Blog
        </Link>
        <div className="w-[1px] h-4 bg-gray-500 mx-3 hidden md:block" />
        <a
          href="https://x.com/gonza_nardini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-text-primary hover:text-primary-accent mx-3 my-2"
        >
          <AiOutlineTwitter />
        </a>
        <div className="w-[1px] h-4 bg-gray-500 mx-3 hidden md:block" />
        <a
          href="https://github.com/gnardini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-text-primary hover:text-primary-accent mx-3 my-2"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
