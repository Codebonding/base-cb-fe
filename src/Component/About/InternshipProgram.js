import React from 'react';

const InternshipProgram = () => {
  return (
    <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] min-h-screen text-white p-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          Internship Program — From Learner to Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          At <strong className="text-[#00C9FF]">CodeBonding</strong>, we believe the best talent is <strong className="text-[#00C9FF]">grown from within</strong>. That’s why we’ve designed a <strong className="text-[#00C9FF]">6 to 8-month internship program</strong> — giving interns not just <strong className="text-[#00C9FF]">experience</strong>, but <strong className="text-[#00C9FF]">a real chance to get hired</strong>.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">🔹</span> Work on live projects
            </h3>
            <p className="text-gray-300">
              Build, test, and launch production-level software.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">🔹</span> Performance-driven hiring
            </h3>
            <p className="text-gray-300">
              Outstanding interns may transition to <strong className="text-[#00C9FF]">full-time roles</strong>.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#00C9FF]">🔹</span> Build a project portfolio
            </h3>
            <p className="text-gray-300">
              Walk away with a <strong className="text-[#00C9FF]">portfolio of live contributions</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          ✨ Prove your skills, and your internship could turn into a full-time career at CodeBonding!
        </h2>
      </section>
    </div>
  );
};

export default InternshipProgram;