import React from "react";
import { DisclaimerContent } from "../../constant";

const Disclaimer = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <Header title="Disclaimer" />
        <Card>
          <p className="text-lg text-gray-700 mb-6">
            The content and services provided by CodeBonding are for informational purposes only. By using our website, you agree to the terms outlined below.
          </p>
          <List items={DisclaimerContent} />
          <Footer text="For further questions, contact us through our website." />
        </Card>
      </div>
    </section>
  );
};

const Header = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
  </div>
);

const Card = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Footer = ({ text }) => (
  <div className="text-center mt-8">
    <p className="text-lg text-gray-500">{text}</p>
  </div>
);

export default Disclaimer;
