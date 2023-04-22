import React from "react";
import { useRouter } from "next/router";
import { AiOutlineTwitter } from "react-icons/ai";

const Header: React.FC = () => {
  const router = useRouter();

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center py-4 max-w-screen-md mx-auto">
      <div className="flex items-center" onClick={navigateToHome} style={{ cursor: "pointer" }}>
        <img
          src="https://pbs.twimg.com/profile_images/1531335419966763008/z6WcAmY1_400x400.jpg"
          alt="Your profile picture"
          className="rounded-full w-12 h-12 mr-4"
        />
        <h1 className="text-2xl">Gonza Nardini</h1>
      </div>
      <div className="flex items-center">
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            router.push("/about");
          }}
          className="text-lg mr-4"
        >
          About
        </a>
        <a
          href="/"
          onClick={navigateToHome}
          className="text-lg mr-4"
        >
          Blog
        </a>
        <a
          href="https://twitter.com/gonza_nardini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;

