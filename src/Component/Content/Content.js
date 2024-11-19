import React, { useEffect, useRef } from 'react';
import { TextScramble } from './TextScramble'; // Importing TextScramble

const Content = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = [
      'Unlock Your Full IT Potential',
      'Elevate Your IT Expertise',
      'Become a Pro in IT Skills',
      'Transform Your IT Knowledge',
      'Take Charge of Your IT Journey',
      'Achieve IT Mastery',
      'Unleash Your IT Skillset',
      'Empower Your IT Future',
      'Refine Your IT Abilities',
      'Step Up Your IT Game',
    ];

    const fx = new TextScramble(textRef.current);
    let counter = 0;

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800); // Pause between phrases
      });
      counter = (counter + 1) % phrases.length;
    };

    next(); // Start the text scramble

    // Cleanup function to cancel animation if component unmounts
    return () => cancelAnimationFrame(fx.frameRequest);
  }, []);

  return (
    <main className="flex-1 p-8 bg-gradient-to-r ">
      <div className="flex justify-center items-center h-full">
        <div className="text-center ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span ref={textRef} className="text-scramble"></span>
          </h1>
          <p className="text-xl md:text-2xl font-medium ">
            Start mastering IT skills and transform your future today!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
