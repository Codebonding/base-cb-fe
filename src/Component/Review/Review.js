import React, { useState, useEffect } from 'react';

const reviews = [
  {
    title: 'Hands-on learning like never before!',
    content: "I joined CodeBonding as an intern with basic programming knowledge. Within a few months, I was working on real products like 'mscardriver.com.' The mentors pushed me to think like a developer, not just a learner — and by the end of the internship, I got hired full-time! This isn’t just an internship — it’s a career launchpad.",
  },
  {
    title: 'More than an internship — a career breakthrough!',
    content: "The CodeBonding internship was my turning point. I contributed to their AI project and learned backend development with Node.js and MySQL. The team treated me like an equal, and by the end of the program, I had a solid portfolio and a full-time job offer. CodeBonding doesn’t just teach — they build your future.",
  },
  {
    title: 'From zero experience to live projects!',
    content: "I was a college student with no real-world coding experience. CodeBonding’s internship gave me the confidence to work on live projects — not just dummy tasks. I learned React.js, Node.js, and even contributed to their monetization project. The best part? I’m now a full-time frontend developer here!",
  },
];

const ReviewCard = ({ title, content }) => (
  <div className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
    <h3 className="text-2xl font-bold text-[#1E353D] mb-4">{title}</h3>
    <p className="text-gray-700 text-lg leading-relaxed text-center">"{content}"</p>
  </div>
);

const InternReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="w-full min-h-[60vh] bg-[#1E353D] text-center py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/3 bg-[#185D6A] transform -skew-y-3 origin-top-left"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">⭐ What Our Interns Say</h2>
        <h3 className="text-2xl font-semibold text-[#2DB5A6] mb-8">Real Voices. Real Experiences.</h3>
        <div className="relative w-full flex items-center justify-center px-8">
          <button
            onClick={prevReview}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#2DB5A6] text-white p-3 rounded-full shadow-md hover:bg-[#185D6A] transition-colors"
          >
            ⬅️
          </button>
          <ReviewCard {...reviews[currentIndex]} />
          <button
            onClick={nextReview}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#2DB5A6] text-white p-3 rounded-full shadow-md hover:bg-[#185D6A] transition-colors"
          >
            ➡️
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternReviews;