import React, { useEffect, useState } from "react";
import img1 from "../../assest/image/Azure-Devops.png";
import img2 from "../../assest/image/IONOS.webp";
import img3 from "../../assest/image/aws.jpg";
import img4 from "../../assest/image/linux.png";

const images = [
  { src: img1, name: "Azure DevOps" },
  { src: img2, name: "IONOS" },
  { src: img3, name: "AWS" },
  { src: img4, name: "Linux" },
];

// Duplicate images to create a seamless loop
const extendedImages = [
  { src: img4, name: "Linux" },
  ...images,
  { src: img1, name: "Azure DevOps" },
];

const Dev = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === extendedImages.length - 1) {
          return 1;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0F172A] flex items-center justify-center">
      {/* Header with sleek design */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white drop-shadow-lg">
        Master <span className="text-[#015D6C]">DevOps Tools</span>
        <br /> Build, Deploy, and Scale with Confidence
      </h1>

      {/* Image Carousel */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out gap-4 px-4"
        style={{
          transform: `translateX(-${
            (currentIndex - 1) * (100 / images.length)
          }%)`,
          width: `${extendedImages.length * 100}%`,
        }}
      >
        {extendedImages.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 h-[30vh] md:h-[50vh] flex-shrink-0 transform transition-transform duration-500 hover:scale-105 relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-white text-xl md:text-3xl font-bold px-4 md:px-8 py-2 md:py-4 rounded-xl bg-gradient-to-r from-[#015D6C] to-[#013D4C] shadow-md">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentIndex - 1
                ? "bg-[#015D6C] scale-125"
                : "bg-gray-400 hover:scale-110 hover:bg-[#015D6C]"
            }`}
          ></button>
        ))}
      </div>

      {/* Floating bubbles with the new color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 md:w-6 md:h-6 bg-[#015D6C] opacity-40 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ${
                Math.random() * 2
              }s ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Dev;
