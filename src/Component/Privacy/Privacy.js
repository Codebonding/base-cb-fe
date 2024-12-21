import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg mt-[100px]">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-6">
        At CodeBonding, your privacy is important to us. This policy outlines how we collect, use, and protect your data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li><strong>Personal:</strong> Name, email, phone, and payment info.</li>
        <li><strong>Usage:</strong> IP address, browser type, and cookies.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">2. How We Use Your Data</h2>
      <p className="text-gray-600 mb-4">To provide services, improve our website, and send updates.</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">3. Sharing & Security</h2>
      <p className="text-gray-600 mb-4">
        Data is shared only with trusted partners or when legally required. We use safeguards to protect your data but cannot guarantee complete security.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">4. Cookies</h2>
      <p className="text-gray-600 mb-4">
        Cookies enhance your experience. You can disable them in browser settings.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">5. Your Rights</h2>
      <p className="text-gray-600 mb-4">
        Access, correct, or delete your data by contacting us.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">6. Updates</h2>
      <p className="text-gray-600 mb-4">
        Changes to this policy will be posted here. Please review regularly.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">7. Contact</h2>
      <p className="text-gray-600 mb-4">For questions, contact us via the website.</p>
    </div>
  );
};

export default PrivacyPolicy;
