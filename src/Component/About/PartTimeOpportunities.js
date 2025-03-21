import React from 'react';

const PartTimeOpportunities = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] py-20 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          🎓 Part-Time Work Opportunities for College Students
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          At <strong className="text-[#00C9FF]">CodeBonding</strong>, we believe talent can thrive <strong className="text-[#00C9FF]">at any stage</strong> — even while you're still in college. That’s why we offer <strong className="text-[#00C9FF]">part-time roles</strong> with a <strong className="text-[#00C9FF]">stipend</strong> for students who want to <strong className="text-[#00C9FF]">gain real-world experience</strong> without compromising their education.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">✨</span> Flexible hours
            </h3>
            <p className="text-gray-300">
              Balance your classes and work with ease.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">✨</span> Stipend provided
            </h3>
            <p className="text-gray-300">
              Earn while you learn and gain valuable experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">✨</span> Real project contributions
            </h3>
            <p className="text-gray-300">
              Work on live products alongside experienced developers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">✨</span> Skill growth & mentorship
            </h3>
            <p className="text-gray-300">
              Gain practical tech skills beyond the classroom.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">✨</span> Fast-track to a full-time career
            </h3>
            <p className="text-gray-300">
              Top performers can transition into internships or even permanent roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartTimeOpportunities;