import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16 mt-[100px]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Disclaimer</h1>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            The content and services provided by CodeBonding are for informational purposes only. By using our website, you agree to the terms outlined below.
          </p>

          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Information such as pricing and schedules may change without prior notice.</li>
            <li>CodeBonding is not responsible for third-party links or their content.</li>
            <li>We are not liable for damages resulting from the use of our services or content.</li>
            <li>Testimonials reflect individual experiences and are not guaranteed results.</li>
            <li>Seek professional advice for legal, financial, or other specialized needs.</li>
          </ul>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-500">
              For further questions, contact us through our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
