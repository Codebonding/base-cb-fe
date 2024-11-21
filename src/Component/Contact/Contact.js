import React from 'react';
import master from '/IDC/cb/base-cb-fe/src/assest/image/matser.jpg';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions or need assistance? Reach out to us through any of the following methods:</p>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Feel free to drop us an email for general inquiries, feedback, or support.</p>
            <a 
              href="mailto:codebonding@gmail.com" 
              className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              codebonding@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-gray-800">Phone</h2>
              </div>
            </div>
            <p className="text-gray-600 mb-6">For quicker responses or urgent queries, give us a call.</p>
            <a 
              href="tel:+919361933929" 
              className="inline-block text-green-600 hover:text-green-800 text-lg font-medium"
            >
              +91 9488220722
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">Our team is available Monday to Friday, 9 AM to 6 PM. We look forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
