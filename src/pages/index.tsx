import React from 'react';
import ProjectView from '../components/ProjectView';

const About: React.FC = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-12 px-4">
      <div className="max-w-2xl mb-12 mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-6 w-fit mx-auto">Hey! I'm Gonza 👋</h1>
        <p className="text-lg text-white mb-4">
          I'm a Software Engineer and entrepreneur. Ever since I learned how to write "Hello World"
          I've been building different cool projects. These are some of the latest ones!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectView
          name="Kamara"
          link="https://kamaraapp.com"
          description="AI-powered programming tool that writes full features from prompts"
          longDescription="I iterated this project many times, it started as a plugin for VS Code, it turned into an electron app and now it also lives in GitHub as a Copilot alternative. It has some features that help me build faster with AI, such as having read-only access to my database, auto-opening relevant files depending on context and having firm control over the context window."
        />
        <ProjectView
          name="Locutio"
          link="https://locut.io"
          description="AI translation system for autonomous website localization"
          longDescription="Locutio is a multi-step system that allows transforming any website into a multilingual one. First, it extracts hard-coded text from your code and moves it to JSON files using AI and then it translates that JSON into the target languages using AI. It can be hooked up to CI to keep your website translated automatically."
        />
        <ProjectView
          name="Pathways"
          link="https://mypathways.com"
          description="Flexible platform to create and sell online courses"
          longDescription="This one I didn't do by myself! I partenered with a friend to build this platform that makes it stupid easy to create courses, and sell them using Stripe. We also have a lot of features to help you manage your business, such creating a landing page, quizzing students, a forum to keep in touch with them, analytics to see how they are doing and more!"
        />
        <ProjectView
          name="ARAM Zone"
          link="https://aram.zone"
          description="Specialized stats for League of Legends ARAM mode"
          longDescription="I loved this one, there are lots of stats websites for League of Legends, but none of them focused on ARAM mode. I built this one to help me and my friends track our performance in ARAM games, it has a lot of stats that are not available in other options, and it grew a lot in the community on reddit's /r/ARAM"
        />
        <ProjectView
          name="LoL Society"
          link="https://lolsociety.com"
          description="Comprehensive stats platform for League of Legends"
          longDescription="After ARAM Zone, I took my learnings there to build a more comprehensive cool stats website for League of Legends. I find the usability much greater than other tools and it has a different set of stats than other websites, so I usually use this one when playing LoL."
        />
        <ProjectView
          name="Celo Tracker"
          link="https://celotracker.com"
          description="Portfolio management platform for Celo blockchain"
          longDescription="I was really annoyed when I started using Celo that there was no good way to track my portfolio, so I built this one. It quickly grew in the Celo community to be the go-to tool for portfolio management. It allowed not only to track your portfolio but also to operate across different protocols."
        />
      </div>
    </div>
  );
};

export default About;
