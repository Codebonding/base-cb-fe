import vision from '../assest/image/vision.jpg';
import why from '../assest/image/why.jpg';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import FAQ from '../Component/FAQ/Faq';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import master from '../assest/image/matser.jpg';
import web from '../assest/image/web.jpg';
import full from '../assest/image/full.jpg';
import git from '../assest/image/git.png';


export const aboutInfo = {
    header: {
      title: 'About Us',
      description: 'We empower developers by offering cutting-edge training, fostering innovation, and guiding tech professionals towards successful careers.',
    },
    visionSection: {
      title: 'Our Vision',
      description: 'We believe in transforming passionate learners into skilled professionals. Our structured web development programs prepare students for the tech industry, empowering them with confidence and knowledge.',
      features: [
        'Hands-on, practical learning experience.',
        'Expert mentors who understand real-world challenges.',
        'Access to an active, supportive tech community.',
      ],
      buttonText: 'Learn More',
      image: vision,
      imageAlt: 'Our Vision',
      imageCaption: 'Empowering Developers',
    },
    whySection: {
      title: 'Why Choose Us?',
      description: 'Our blend of theoretical and practical training ensures that our graduates are not just prepared for the workforce, but they excel within it. We\'re committed to building confident, capable professionals.',
      features: [
        'Modern curriculum covering industry-relevant technologies.',
        'Real-world projects that showcase your abilities.',
        'Focus on career advancement and job readiness.',
      ],
      buttonText: 'Join Our Program',
      image: why,
      imageAlt: 'Why Choose Us',
      imageCaption: 'Building the Future',
    },
};


export const contactInfo = {
    title: 'Contact Us',
    description: "We're here to help! Reach out to us via email, phone, or social media. We'd love to hear from you!",
    footer: "Our team is available Monday to Friday, 9 AM to 6 PM. We look forward to hearing from you!"
  };
  
export const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      bgColor: 'bg-blue-600',
      link: 'mailto:codebonding@gmail.com',
      linkText: 'codebonding@gmail.com',
      description: 'Send us an email for general inquiries, feedback, or support. We’ll respond as quickly as possible.',
    },
    {
      id: 'phone',
      title: 'Phone',
      icon: <FaPhoneAlt className="text-2xl" />,
      bgColor: 'bg-green-600',
      link: 'tel:+919488220722',
      linkText: '+91 9488220722',
      description: 'Call us directly for faster assistance. We’re available during office hours.',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      icon: <FaInstagram className="text-2xl" />,
      bgColor: 'bg-purple-600',
      link: 'https://www.instagram.com/codebonding',
      linkText: 'Follow us on Instagram',
      description: 'Follow us on Instagram for the latest updates, photos, and behind-the-scenes content.',
    },
  ];

export const sections = [
    { 
        id: 'home', 
        component: <Home />, 
        background: 'bg-gray-100', 
        text: 'Start mastering IT skills and transform your future today!' // Moved the sentence here
    },
    { 
        id: 'about', 
        component: <About />, 
        background: 'bg-gray-100' 
    },
    { 
        id: 'contact', 
        component: <Contact />, 
        background: 'bg-gray-200' 
    },
    { 
        id: 'faq', 
        component: <FAQ />, 
        background: 'bg-gray-200' 
    },
];

export const footerData = {
    brand: {
      name: 'codebonding',
      description: 'We are passionate about coding and helping developers grow. Join our community!',
    },
    quickLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Contact', href: '#contact' },
    ],
    socialLinks: [
      { icon: <FaTwitter className="w-6 h-6" />, href: 'https://twitter.com', hoverColor: 'hover:text-blue-500' },
      { icon: <FaLinkedin className="w-6 h-6" />, href: 'https://linkedin.com', hoverColor: 'hover:text-blue-500' },
      { icon: <FaInstagram className="w-6 h-6" />, href: 'https://instagram.com', hoverColor: 'hover:text-pink-500' },
    ],
    bottomText: '© 2024 codebonding | All rights reserved.',
  };

export const sections_1 = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

export const sections_2 = [
    {
      title: 'Master Your IT Skills',
      description:
        'Join our comprehensive training programs in HTML, CSS, React, Node.js, and more. Transform your career with full-stack development expertise.',
      buttonText: 'Join Now',
      image: master,
      buttonColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      gradient: 'from-blue-50 to-blue-100',
      imageFirst: true,  // Image should be on the left
    },
    {
      title: 'Comprehensive Web Development Training',
      description:
        'Our training program covers a wide range of essential web development technologies, including HTML and CSS for frontend design. Learn how to structure web pages effectively and apply styles that enhance user experience.',
      buttonText: 'Learn More',
      image: web,
      buttonColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      gradient: 'from-green-50 to-green-100',
      imageFirst: false, // Image should be on the right
    },
    {
      title: 'Full Stack Developer Program',
      description:
        'Join our full-stack developer training where you will master both frontend and backend technologies. Learn React for dynamic user interfaces, Node.js for backend server management, and MySQL for efficient data storage.',
      buttonText: 'Get Started',
      image: full,
      buttonColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      gradient: 'from-purple-50 to-purple-100',
      imageFirst: true,  // Image should be on the left
    },
    {
      title: 'Version Control Mastery with Git',
      description:
        'Master version control with Git. Learn how to manage code versions, collaborate with teams, and streamline your development workflow.',
      buttonText: 'Learn About Version Control',
      image: git,
      buttonColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      gradient: 'from-red-50 to-red-100',
      imageFirst: false, // Image should be on the right
    },
  ];