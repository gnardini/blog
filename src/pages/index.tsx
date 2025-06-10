import React from 'react';
import ProjectView from '../components/ProjectView';

const About: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen-md mx-auto mt-12 px-4">
      <p className="text-lg mb-4">Hey! I'm Gonza, a Software Engineer and entrepreneur.</p>
      <p className="text-lg mb-4">
        Ever since I learned how to write "Hello World" I've been building different cool projects.
        These are the latest ones!
      </p>
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
    </div>
  );
};

export default About;
