import React from 'react';
import { aboutInfo } from '../../constant';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{aboutInfo.header.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{aboutInfo.header.description}</p>
        </div>

        {/* Main Section: Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">{aboutInfo.visionSection.title}</h2>
            <p className="text-lg text-gray-700">{aboutInfo.visionSection.description}</p>
            <ul className="list-disc pl-6 space-y-4 text-gray-600">
              {aboutInfo.visionSection.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform">
              {aboutInfo.visionSection.buttonText}
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <img
              src={aboutInfo.visionSection.image}
              alt={aboutInfo.visionSection.imageAlt}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md opacity-90">
              {aboutInfo.visionSection.imageCaption}
            </div>
          </div>
        </div>

        {/* Secondary Section: Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <img
              src={aboutInfo.whySection.image}
              alt={aboutInfo.whySection.imageAlt}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md opacity-90">
              {aboutInfo.whySection.imageCaption}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">{aboutInfo.whySection.title}</h2>
            <p className="text-lg text-gray-700">{aboutInfo.whySection.description}</p>
            <ul className="list-disc pl-6 space-y-4 text-gray-600">
              {aboutInfo.whySection.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform">
              {aboutInfo.whySection.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
