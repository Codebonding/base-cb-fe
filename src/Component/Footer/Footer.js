// src/components/Footer.js
import { Facebook, Twitter, Linkedin, Instagram } from '@styled-icons/bootstrap';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">© 2024 My React App. All rights reserved.</p>
        <p>Powered By Codebonding</p>

        {/* Social Media Links */}
        <div className="mt-4">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-blue-600 transition-colors"
          >
            <Facebook className="w-6 h-6 text-white hover:text-blue-600" />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-blue-400 transition-colors"
          >
            <Twitter className="w-6 h-6 text-white hover:text-blue-400" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-blue-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white hover:text-blue-700" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-pink-600 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white hover:text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
