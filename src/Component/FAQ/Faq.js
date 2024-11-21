import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Full Stack Development?',
      answer: 'Full stack development involves both frontend and backend technologies. A full stack developer is proficient in both the client side (frontend) and server side (backend) of web development.',
    },
    {
      question: 'How long does the Full Stack Developer program take?',
      answer: 'Our Full Stack Developer program typically takes around 6 months, depending on the pace of learning and the amount of time dedicated to the program.',
    },
    {
      question: 'Do I need prior experience to join the program?',
      answer: 'No prior experience is required for our Full Stack Developer program. We start from the basics, and guide you through HTML, CSS, JavaScript, React, Node.js, and databases.',
    },
    {
      question: 'What will I learn in the React training?',
      answer: 'In the React training, you will learn how to create dynamic user interfaces using React. This includes understanding JSX, components, state management, and routing with React Router.',
    },
    {
      question: 'Can I get a certificate after completing the course?',
      answer: 'Yes, after completing the course and passing the assessments, you will receive a certificate that demonstrates your skills and knowledge in full stack development.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to some of the most common questions below.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                <span className="text-xl text-gray-600">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-gray-50 p-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
