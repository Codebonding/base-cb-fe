import React from "react";
import { privacyPolicySections } from "../../constant";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <Header
          title="Privacy Policy"
          description="Your privacy is important to us. Learn how CodeBonding collects, uses, and protects your information."
        />
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {privacyPolicySections.map((section, index) => (
            <Section key={index} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Header = ({ title, description }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
  </div>
);

const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {content.map((item, index) =>
      item.type === "text" ? (
        <p key={index} className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
      ) : (
        <ul key={index} className="list-disc list-inside text-gray-700 text-lg space-y-2">
          {item.items.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>
      )
    )}
  </div>
);

export default PrivacyPolicy;
