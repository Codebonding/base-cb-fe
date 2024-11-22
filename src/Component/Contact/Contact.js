import React from 'react';
import { contactInfo, contactMethods } from '../../constant';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{contactInfo.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{contactInfo.description}</p>
        </div>

        {/* Contact Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 ${method.bgColor} text-white flex items-center justify-center rounded-full shadow-md`}
                >
                  {method.icon}
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{method.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <a
                href={method.link}
                className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium transition duration-300"
              >
                {method.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">{contactInfo.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
