import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-4">Gonza Nardini</h1>
      <img
        src="https://pbs.twimg.com/profile_images/1531335419966763008/z6WcAmY1_400x400.jpg"
        alt="Your profile picture"
        className="rounded-full mb-4"
      />
      <p className="text-lg text-center">
        Hi! I'm Gonza, a Software Engineer who likes building useful products.
        I've build a few solo projects over the last year and will continue to
        do so going forward. I could make a lot more money working for a Big Co
        but I'd much rather own what I work on.
      </p>
    </div>
  );
};

export default Landing;
