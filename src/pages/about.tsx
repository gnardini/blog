import React from 'react';
import ProjectView from '../components/ProjectView';
import { SubscribeView } from '../components/SubscribeView';

const About: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen-md mx-auto mt-12 px-4">
      <p className="text-lg mb-4">I'm Gonza, a Software Engineer and entrepreneur.</p>
      <p className="text-lg mb-4">
        I built products that reached millions of users and these days I'm exploring how to use AI
        to build software autonomously with high quality.
      </p>
      <h3 className="mt-4 mb-2 font-semibold text-base">My Projects:</h3>
      <ul className="space-y-2">
        <ProjectView
          name="Kamara"
          link="https://kamaraapp.com"
          description="an AI-first code editor that can write full features from a single prompt."
        />
        <ProjectView
          name="Locutio"
          link="https://locut.io"
          description="an AI coder and translation system that can turn a website multilingual autonomously."
        />
        <ProjectView
          name="Pathways"
          link="https://mypathways.com"
          description="a flexible and fully-featured LMS that empowers companies and academies to optimize their learning processes."
        />
        <ProjectView
          name="LoL Society"
          link="https://lolsociety.com"
          description="a stats website for League of Legends."
        />
        <ProjectView
          name="ARAM Zone"
          link="https://aram.zone"
          description="a stats website for the ARAM game mode of League of Legends."
        />
        <ProjectView
          name="Celo Tracker"
          link="https://celotracker.com"
          description="a portfolio management platform for the Celo blockchain."
        />
      </ul>
      <SubscribeView className="mt-16" />
    </div>
  );
};

export default About;
