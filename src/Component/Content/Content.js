import React from 'react';
import { useNavigate } from 'react-router-dom';
import buildGrowBg from '../../assest/image/bg.png';
import { sections } from '../../constant';

const Content = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1">
            {/* Hero Section with Fade-In Animation */}
            <div
                className="w-full h-screen bg-cover bg-center flex justify-center items-center relative"
                style={{ 
                    backgroundImage: `url(${buildGrowBg})`,
                    animation: 'fadeIn 1s ease-in-out' // Inline fade-in animation
                }}
            >
                <div
                    className="absolute inset-0 bg-[#105E6B] opacity-70"
                    aria-hidden="true"
                ></div>
                <div 
                    className="relative z-10 text-center max-w-2xl mx-4"
                    style={{ 
                        animation: 'scaleUp 0.5s ease-in-out' // Inline scale-up animation
                    }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                        Build it, Grow it
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
                        Empowering product-based innovations for the future with CodeBonding.
                    </p>
                    <button 
                        className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform"
                        style={{
                            transition: 'transform 0.3s ease-in-out', // Hover effect
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onClick={() => navigate('/register')}
                    >
                        Join Now
                    </button>
                </div>
            </div>

            {/* Sections with Fade-In Animation */}
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="flex flex-col justify-center items-center"
                    style={{
                        animation: 'fadeIn 1s ease-in-out' 
                    }}
                >
                    <div className="text-center">
                        {section.component}
                    </div>
                </section>
            ))}

            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes scaleUp {
                        from {
                            transform: scale(0.9);
                        }
                        to {
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </main>
    );
};

export default Content;
