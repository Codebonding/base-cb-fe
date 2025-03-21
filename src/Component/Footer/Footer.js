import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import { footerData } from '../../constant'; // Import footerData

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-lg shadow-2xl">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">{footerData.brand.name}</h2>
            <p className="text-gray-300 text-sm">{footerData.brand.description}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#14B4A6] transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Email: <a href="mailto:support@codebonding.com" className="hover:text-[#14B4A6]">info@codebonding.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-[#14B4A6]">+91 94882 20722</a></li>
              <li>Address: 9/259/8, Nalikkal Privu Road, P M Nagar, Seelanaickenpatti, Salem, Dasanaickenpatti, Tamil Nadu 636201</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14B4A6]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#14B4A6] text-white rounded-lg hover:bg-[#0F5C6B] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Designed with ❤️ by <a href="https://codebonding.com" className="hover:text-[#14B4A6]">CodeBonding Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;