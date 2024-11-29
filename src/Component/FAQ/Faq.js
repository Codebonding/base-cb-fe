import React, { useState, useRef } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What topics will be covered?",
      answer:
        "The training covers HTML, CSS, Bootstrap, C++, React.js, Node.js, MySQL, and Git, focusing on building real-world full-stack projects.",
    },
    {
      question: "Is it beginner-friendly?",
      answer:
        "Yes, it’s suitable for both beginners and those with some prior experience.",
    },
    {
      question: "Do I need prior experience to join the program?",
      answer:
        "No prior experience is required for our Full Stack Developer program. We start from the basics, and guide you through HTML, CSS, JavaScript, React, Node.js, and databases.",
    },
    {
      question: "What is the schedule?",
      answer:
        "Classes are held on weekdays/weekends (live or recorded sessions are available).",
    },
    {
      question: "What tools are required?",
      answer:
        "A laptop/PC with a stable internet connection is needed. Software/tools will be shared during the course.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to some of the most common questions below. Click on
            any question to reveal the answer.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg focus:outline-none"
                  onClick={() => toggleAnswer(index)}
                >
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {faq.question}
                  </h2>
                  <span className="text-2xl text-gray-600">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                  }}
                >
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
