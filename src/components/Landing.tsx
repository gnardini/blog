import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-4">Gonza Nardini</h1>
      <img
        src="https://pbs.twimg.com/profile_images/1531335419966763008/z6WcAmY1_400x400.jpg"
        alt="Your profile picture"
        className="rounded-full mb-4 w-36 h-36"
      />
      <p className="text-lg text-start max-w-prose mb-4">
        Hi! I'm Gonza, a Software Engineer who likes building useful products.
        I've build a few solo projects over the last year and will continue to
        do so going forward. I could make a lot more money working for a Big Co
        but I'd much rather own what I work on.
      </p>
      <p className="text-lg text-start max-w-prose">
        Some of the projects I've worked on include:
        <br />
        <a
          href="https://celotracker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Celo Tracker
        </a>{" "}
        - a portfolio management platform for the Celo blockchain<br />
        <a
          href="https://aram.zone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          ARAM Zone
        </a>{" "}
        - a stats website for the ARAM game mode of League of Legends.
      </p>
    </div>
  );
};

export default Landing;
