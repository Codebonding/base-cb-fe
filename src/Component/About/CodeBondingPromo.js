import React from 'react';
import { FaRocket, FaLaptopCode, FaUserCheck, FaChalkboardTeacher } from 'react-icons/fa';
import teamImage from '../../assest/image/about.jpg';

const CodeBondingPromo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#14B4A6] to-[#185D6A] flex items-center justify-center p-6 overflow-x-hidden">
      <div 
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full h-full min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-1"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg group h-full">
          <img 
            src={teamImage} 
            alt="CodeBonding Team" 
            className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 flex flex-col justify-center p-4">
          {/* Heading */}
          <h1 
            className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] drop-shadow-lg"
            style={{
              animation: 'fade-in 1s ease-out forwards',
            }}
          >
            CodeBonding — Innovating Tech, Empowering Talent
          </h1>

          {/* Paragraph */}
          <p 
            className="text-lg md:text-xl leading-relaxed text-white"
            style={{
              animation: 'fade-in 1s ease-out 0.5s forwards',
              opacity: 0,
            }}
          >
            At <strong className="text-[#FFFFFF]">CodeBonding</strong>, we’re more than just an IT company — we’re a <strong className="text-[#FFFFFF]">product-based powerhouse</strong> committed to <strong className="text-[#FFFFFF]">building cutting-edge technology</strong> while <strong className="text-[#FFFFFF]">nurturing future innovators</strong>.
          </p>

          {/* Feature List */}
          <div className="space-y-6 text-lg">
            {[ 
              { icon: FaRocket, text: 'Product-first approach — turning ideas into impactful software solutions' },
              { icon: FaLaptopCode, text: 'Live project internships — real-world experience on live, production-level products' },
              { icon: FaUserCheck, text: 'Performance-based hiring — outstanding interns can secure full-time roles' },
              { icon: FaChalkboardTeacher, text: 'Mentorship from experts — learn from seasoned developers working on live projects' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 text-white hover:text-[#4DD0E1] transition-colors duration-300"
                style={{
                  animation: `slide-in-left 0.8s ease-out ${0.3 * (index + 1)}s forwards`,
                  opacity: 0,
                }}
              >
                <item.icon className="text-[#4DD0E1] text-2xl flex-shrink-0" />
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBondingPromo;