import React from 'react';
import { FaRocket, FaHandsHelping, FaUserTie, FaBriefcase, FaProjectDiagram, FaChartLine, FaBuilding } from 'react-icons/fa';

const WhyCodeBonding = () => {
    const features = [
        {
          icon: FaRocket,
          title: "Product-first mindset",
          description: "We’re driven by innovation, not just services.",
        },
        {
          icon: FaHandsHelping,
          title: "Hands-on internships",
          description: "Work directly on live products — no simulated projects.",
        },
        {
          icon: FaUserTie,
          title: "Real mentorship",
          description: "Our devs guide, coach, and support every step of the way.",
        },
        {
          icon: FaBriefcase,
          title: "Hiring potential",
          description: "Prove yourself during the internship and land a full-time role.",
        },
        {
          icon: FaProjectDiagram,
          title: "Portfolio-worthy experience",
          description: "Walk away with a strong portfolio, showcasing your work.",
        },
        {
          icon: FaChartLine,
          title: "Fast-paced, growth-oriented culture",
          description: "Be part of something bigger than yourself.",
        },
        {
          icon: FaBuilding,
          title: "Join CodeBonding",
          description: "Start your journey with us, through a 6 to 8-month internship, and gain hands-on experience.",
        },
        {
          icon: FaHandsHelping,
          title: "Internship with Real Projects",
          description: "Work on live products, not simulated projects, to develop your skills.",
        },
        {
          icon: FaUserTie,
          title: "Placement Opportunity",
          description: "Perform well in the internship and secure a role within the company.",
        },
      ];
      

  return (
    <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] py-20 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          🔥 Why CodeBonding?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-16">
          At <strong className="text-[#00C9FF]">CodeBonding</strong>, we build more than software — we build futures. Here’s why we stand out:
        </p>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#00C9FF] to-[#92FE9D] transform -translate-x-1/2"></div>

          {/* Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-col sm:flex-row' : 'flex-col-reverse sm:flex-row-reverse'} items-center mb-12`}
            >
              {/* Icon and Card */}
              <div className="w-full sm:w-1/2 p-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="text-[#00C9FF] text-3xl sm:text-4xl" />
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>

              {/* Spacer */}
              <div className="w-full sm:w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-300">
            At <strong className="text-[#00C9FF]">CodeBonding</strong>, we hire the talent we mentor — because the best teams are built from <strong className="text-[#00C9FF]">passion, skill, and hands-on experience</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCodeBonding;
