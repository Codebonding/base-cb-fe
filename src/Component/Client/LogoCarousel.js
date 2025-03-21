import React from 'react';
import logo1 from '../../assest/image/logothink.png';
import logo2 from '../../assest/image/logoItech.png';
import logo3 from '../../assest/image/logoms.png';
import logo4 from '../../assest/image/logonrn.png';

const logoImages = [logo1, logo2, logo3, logo4];

const LogoCarousel = () => {
  // Duplicate the logos for infinite scrolling effect
  const duplicatedLogos = [...logoImages, ...logoImages];

  return (
    <div
      style={{
        background: '#294854', // Background color
        width: '100%', // Full width of the parent container
        padding: '3rem 0', // Padding for top and bottom
        border: '2px solid #2ECAFC', // Modern border for the container
        borderRadius: '12px', // Rounded corners for the container
        overflow: 'hidden', // Hide overflow for smooth scrolling
      }}
    >
      {/* "Our Clients" Heading */}
      <h2
        style={{
          textAlign: 'center', // Center the heading
          fontSize: '2.5rem', // Large font size
          fontWeight: 'bold', // Bold text
          color: '#2ECAFC', // Heading color
          marginBottom: '2rem', // Spacing below the heading
        }}
      >
        Our Clients
      </h2>

      {/* Logo Carousel */}
      <div
        style={{
          display: 'flex',
          width: '100%', // Take full width of the parent
          overflow: 'hidden', // Hide overflow to prevent scrollbar
          position: 'relative', // For positioning
        }}
      >
        <div
          style={{
            display: 'flex',
            animation: 'scroll 20s linear infinite', // Animation for scrolling
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              style={{
                border: '2px solid #2ECAFC', // Border for each logo
                borderRadius: '8px', // Rounded corners for each logo
                padding: '8px', // Padding inside the border
                marginRight: '2rem', // Spacing between logos
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0E5C6B', // Background for each logo container
                flexShrink: 0, // Prevent logos from shrinking
              }}
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                style={{
                  height: '64px', // Logo height
                  objectFit: 'contain', // Maintain aspect ratio
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;