import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { textPrimary } from "../utils/colors";

const Header: React.FC = () => {
  const router = useRouter();

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center py-16 max-w-screen-md mx-auto">
      <div
        className="flex items-center"
        onClick={navigateToHome}
        style={{ cursor: "pointer" }}
      >
        <img
          src="/profile-pic.jpg"
          alt="Your profile picture"
          className="rounded-full w-12 h-12 mr-4"
        />
        <h1 className="text-4xl font-semibold tracking-widest">
          GONZA NARDINI
        </h1>
      </div>
      <div className="flex items-center">
        <Link
          href="/about"
          className="text-xl font-semibold text-text-primary"
        >
          About
        </Link>
        <div className="w-[1px] h-4 bg-gray-500 mx-6" />
        <Link
          href="/"
          onClick={navigateToHome}
          className="text-xl font-semibold text-text-primary"
        >
          Blog
        </Link>
        <div className="w-[1px] h-4 bg-gray-500 mx-6" />
        <a
          href="https://twitter.com/gonza_nardini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <AiOutlineTwitter color={textPrimary} />
        </a>
        <div className="w-[1px] h-4 bg-gray-500 mx-6" />
        <a
          href="https://github.com/gnardini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <AiOutlineGithub color={textPrimary} />
        </a>
      </div>
    </header>
  );
};

export default Header;
