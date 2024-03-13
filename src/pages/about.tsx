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
        started building my own products.
      </p>
      <div className="w-full mt-2 flex flex-col items-start text-lg">
        <p className="">Some of the projects I've built so far include:</p>
        <ul className="gap-2">
          <li>
            <a
              href="https://locut.io?ref=gnardini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
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
    </div>
  );
};

export default About;
