import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16 mt-[100px]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            By using the CodeBonding website, services, or products, you agree to the following Terms and Conditions. If you do not agree, please discontinue use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Terms</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Services include IT training, live sessions, internships, and placement guidance.</li>
            <li>Accounts must be registered with accurate details; you are responsible for your credentials.</li>
            <li>Course materials are for personal use only and must not be shared or distributed.</li>
            <li>Fees must be paid in advance; refunds follow our refund policy.</li>
            <li>Users must act responsibly and not engage in unlawful activities on the platform.</li>
            <li>All website content is the intellectual property of CodeBonding.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liability and Privacy</h2>
          <p className="text-lg text-gray-700 mb-4">
            CodeBonding is not responsible for third-party content or links. Individual results may vary based on effort and market conditions. Personal data is handled as per our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes and Contact</h2>
          <p className="text-lg text-gray-700 mb-6">
            Terms may be updated periodically. For inquiries, please contact us through our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
