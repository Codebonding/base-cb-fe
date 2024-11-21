import React from 'react';
import vision from '/IDC/cb/base-cb-fe/src/assest/image/vision.jpg';
import why from '/IDC/cb/base-cb-fe/src/assest/image/why.jpg';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our mission to empower developers through cutting-edge training programs, fostering innovation, and enabling successful careers in tech.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We believe in transforming passionate learners into skilled professionals. By offering a structured approach to web development, we ensure that our students are equipped to meet industry demands confidently.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Hands-on learning experience.</li>
              <li>Expert mentors with real-world knowledge.</li>
              <li>Access to a supportive tech community.</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img
              src={vision}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
              <span className="text-sm font-medium">Empowering Developers</span>
            </div>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={why}
              alt="Our Approach"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
              <span className="text-sm font-medium">Building the Future</span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Our unique approach combines theoretical knowledge with practical applications, ensuring students graduate with the confidence and expertise needed to excel in their careers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Comprehensive curriculum with modern technologies.</li>
              <li>Real-world projects to enhance skills.</li>
              <li>Focus on career readiness and growth.</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
              Join Our Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
