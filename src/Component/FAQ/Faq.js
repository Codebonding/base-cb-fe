import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What kind of training does CodeBonding offer?',
      answer:
        'CodeBonding offers a wide range of IT training programs, including Full Stack Development, C++, React.js, Node.js, MySQL, web design, and more. Our courses cater to all skill levels, from beginners to advanced, and are available in both online and offline formats.',
    },
    {
      question: 'What is the duration of your training programs?',
      answer:
        'Our training programs vary in duration depending on the course. Full Stack Development, for example, runs for several months, while shorter courses like C++ boot camps may last a few weeks. We offer flexible scheduling with weekday and weekend options to fit your needs.',
    },
    {
      question: 'Does CodeBonding provide placement assistance after training?',
      answer:
        'Yes, CodeBonding provides full placement assistance to students who successfully complete their training. We offer interview coaching, job preparation, and connect students with potential employers through our extensive network.',
    },
    {
      question: 'How can I apply for an internship at CodeBonding?',
      answer:
        'CodeBonding offers internships to students and freshers. You can apply by visiting our website and filling out the internship application form. Interns get hands-on experience with real-time projects and have the potential to be hired full-time based on performance.',
    },
    {
      question: 'How does CodeBonding support the career growth of its employees and interns?',
      answer:
        'CodeBonding supports career growth by providing real-time project experience, mentorship from industry experts, and continuous learning opportunities. Our employees and interns receive training in emerging technologies, and we offer clear career paths with the possibility of full-time positions after internships.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#294854] p-8">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-[#2ECAFC] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#0E5C6B] rounded-xl shadow-md transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-[#2ECAFC]' : 'hover:shadow-lg'
              }`}
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-[#2ECAFC] text-xl"
                />
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;