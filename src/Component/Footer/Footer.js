// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-4">© 2024 My React App. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#facebook" className="hover:opacity-75">
              <i className="fab fa-facebook-f text-blue-500"></i>
            </a>
            <a href="#twitter" className="hover:opacity-75">
              <i className="fab fa-twitter text-blue-400"></i>
            </a>
            <a href="#linkedin" className="hover:opacity-75">
              <i className="fab fa-linkedin-in text-blue-300"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  