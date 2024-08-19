import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen-md mx-auto mt-12 px-4">
      <p className="text-lg text-start self-start mb-4">
        I'm Gonza, a Software Engineer and entrepeneur. I built products that
        reached millions of users and these days I'm exploring how to use AI to
        build software autonomously with high quality.
      </p>
      <h3 className="mt-4 font-semibold text-xl">My Projects:</h3>
      <ul className="gap-2">
        <li>
          <a
            href="https://locut.io?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-accent hover:underline"
          >
            Locutio
          </a>{" "}
          - a system that helps translate websites into several languages with
          help of AI.
        </li>
        <li>
          <a
            href="https://mypathways.com?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Pathways
          </a>{" "}
          - a flexible and fully-featured LMS that empowers companies and
          academies to optimize their learning processes.
        </li>
        <li>
          <a
            href="https://lolsociety.com?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LoL Society
          </a>{" "}
          - a stats website for League of Legends.
        </li>
        <li>
          <a
            href="https://kamaraapp.com?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Kamara
          </a>{" "}
          - a VS Code plugin that writes code for you.
        </li>
        <li>
          <a
            href="https://aram.zone?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            ARAM Zone
          </a>{" "}
          - a stats website for the ARAM game mode of League of Legends.
        </li>
        <li>
          <a
            href="https://celotracker.com?ref=gnardini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Celo Tracker
          </a>{" "}
          - a portfolio management platform for the Celo blockchain
        </li>
      </ul>
    </div>
  );
};

export default About;
