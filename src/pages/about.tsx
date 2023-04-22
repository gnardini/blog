import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto mt-12 px-4">
      <img
        src="https://pbs.twimg.com/profile_images/1531335419966763008/z6WcAmY1_400x400.jpg"
        alt="Your profile picture"
        className="rounded-full mb-4 w-36 h-36"
      />
      <p className="text-lg text-start self-start mb-4">
        Hi! I'm Gonza, a Software Engineer who likes building useful products.
        I've worked at big and small companies and realized what I really want
        is to own what I build and have as much freedom as possible, so I've
        started building my own products. They don't pay my bills yet, but I'll
        keep trying :)
      </p>
      <p className="text-lg text-start self-start">
        Some of the projects I've built include:
        <br />
        <a
          href="https://kamaraapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Kamara
        </a>{" "}
        - a VS Code plugin that writes code for you.
        <br />
        <a
          href="https://aram.zone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          ARAM Zone
        </a>{" "}
        - a stats website for the ARAM game mode of League of Legends.
        <br />
        <a
          href="https://celotracker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Celo Tracker
        </a>{" "}
        - a portfolio management platform for the Celo blockchain
      </p>
    </div>
  );
};

export default About;
