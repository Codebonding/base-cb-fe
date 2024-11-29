import React from 'react';
import { footerData } from '../../constant';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 rounded-t-lg shadow-lg">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">{footerData.brand.name}</h2>
            <p className="text-gray-400 text-sm">{footerData.brand.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">{footerData.bottomText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
