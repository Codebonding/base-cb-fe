import React from "react";
import { termsData } from "../../constant";

const TermsAndConditions = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <Header title="Terms and Conditions" />
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            By using the CodeBonding website, services, or products, you agree to the following Terms and Conditions. If you do not agree, please discontinue use.
          </p>
          {termsData.map((section, index) => (
            <Section key={index} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Header = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
  </div>
);

const Section = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {Array.isArray(content) && content.length > 1 ? (
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-lg text-gray-700 leading-relaxed">{content[0]}</p>
    )}
  </div>
);

export default TermsAndConditions;
