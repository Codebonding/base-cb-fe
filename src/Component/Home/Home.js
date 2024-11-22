import React from 'react';
import { sections_2 } from '../../constant';


const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white text-gray-900">
      {sections_2.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-12 bg-gradient-to-r ${section.gradient} p-8 rounded-lg shadow-xl`}
        >
          {/* Conditional Image Content Position */}
          {section.imageFirst ? (
            <>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">{section.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{section.description}</p>
                <button
                  className={`${section.buttonColor} text-white px-6 py-3 rounded-md ${section.hoverColor} transition duration-300 transform hover:scale-105`}
                >
                  {section.buttonText}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">{section.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{section.description}</p>
                <button
                  className={`${section.buttonColor} text-white px-6 py-3 rounded-md ${section.hoverColor} transition duration-300 transform hover:scale-105`}
                >
                  {section.buttonText}
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
