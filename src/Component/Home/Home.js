import React from 'react';
import master from '/IDC/cb/base-cb-fe/src/assest/image/matser.jpg';
import web from '/IDC/cb/base-cb-fe/src/assest/image/web.jpg';
import full from '/IDC/cb/base-cb-fe/src/assest/image/full.jpg';
import git from '/IDC/cb/base-cb-fe/src/assest/image/git.png';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section 1: Master Your IT Skills */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Master Your IT Skills</h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our comprehensive training programs in HTML, CSS, React, Node.js, and more. Transform your career with
            full-stack development expertise.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Join Now
          </button>
        </div>
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
        <img src={master} alt="Logo/500x300" className="w-full max-w-md rounded-lg shadow-l" />
        </div>
      </div>

      {/* Section 2: Comprehensive Web Development Training */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
        <img src={web} alt="Logo/500x300" className="w-full max-w-md rounded-lg shadow-l" />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Web Development Training</h1>
          <p className="text-lg text-gray-700 mb-6">
            Our training program covers a wide range of essential web development technologies including HTML and CSS
            for frontend design. You will learn how to structure web pages effectively and apply styles that enhance
            user experience. We ensure participants gain practical skills through hands-on projects which enable them
            to create responsive websites that are visually appealing while also being functional.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Section 3: Full Stack Developer Program */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Full Stack Developer Program</h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our full stack developer training where you will master both frontend and backend technologies. Our
            curriculum includes in-depth lessons on React for dynamic user interfaces, Node.js for backend server
            management, and MySQL for efficient data storage solutions. This comprehensive approach allows students to
            develop the skills needed to build complete applications from start to finish, empowering them with valuable
            insights into the entire web development process.
          </p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition">
            Get Started
          </button>
        </div>
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
        <img src={full} alt="Logo/500x300" className="w-full max-w-md rounded-lg shadow-l" />
        </div>
      </div>

      {/* Section 4: Version Control Mastery with Git */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
        <img src={git} alt="Logo/500x300" className="w-full max-w-md rounded-lg shadow-l" />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Version Control Mastery with Git</h1>
          <p className="text-lg text-gray-700 mb-6">
            Understanding version control is crucial for any developer; hence we offer specialized courses that focus
            on Git. Participants will learn how to manage code versions efficiently, collaborate with teams, and
            streamline their workflow by utilizing branches, merges, commits, and more. This knowledge not only improves
            individual projects but also enhances teamwork when contributing to larger software developments, allowing
            developers at all levels to maintain organized coding practices throughout their careers.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            Learn About Version Control
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
