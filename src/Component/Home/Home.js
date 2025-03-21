import React, { useEffect, useState } from "react";
import img1 from "../../assest/image/c.jpg";
import img2 from "../../assest/image/c++.webp";
import img3 from "../../assest/image/java.png";
import img4 from "../../assest/image/python.jpg";

const images = [img1, img2, img3, img4];
const imageNames = ["Python", "C Language", "C++", "Java"];

const extendedImages = [img4, ...images, img1];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === extendedImages.length - 1 ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0F172A] flex items-center justify-center">
      {/* Header with sleek design */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-8 text-white drop-shadow-lg">
        Build Strong <span className="text-[#015D6C]">Foundations in Tech</span>
      </h1>

      {/* Image Carousel */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out gap-4 px-4"
        style={{ transform: `translateX(-${(currentIndex - 1) * (100 / images.length)}%)`, width: `${extendedImages.length * 100}%` }}
      >
        {extendedImages.map((img, index) => (
          <div
            key={index}
            className="w-[80%] sm:w-1/2 md:w-1/3 h-[30vh] sm:h-[40vh] md:h-[50vh] flex-shrink-0 transform transition-transform duration-500 hover:scale-105 relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-white text-lg sm:text-2xl md:text-3xl font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-[#015D6C] to-[#013D4C] shadow-md">
                {imageNames[index % imageNames.length]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === currentIndex - 1 ? "bg-[#015D6C] scale-125" : "bg-gray-400 hover:scale-110 hover:bg-[#015D6C]"
            }`}
          ></button>
        ))}
      </div>

      {/* Floating bubbles with the new color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-[#015D6C] opacity-40 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ${Math.random() * 2}s ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;