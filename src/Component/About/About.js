import React from 'react';
import CodeBondingPromo from './CodeBondingPromo';
import InternshipProgram from './InternshipProgram.js';
import PartTimeOpportunities from './PartTimeOpportunities.js';
import WhyCodeBonding from './WhyCodeBonding.js';

const About = () => {
  return (
    <div>
      <CodeBondingPromo/>
      <InternshipProgram/>
      <PartTimeOpportunities/>
      <WhyCodeBonding/>
    </div>
  );
};

export default About;
