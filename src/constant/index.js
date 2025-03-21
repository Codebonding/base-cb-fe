import vision from '../assest/image/vision.jpg';
import why from '../assest/image/why.jpg';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import FAQ from '../Component/FAQ/Faq';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import master from '../assest/image/matser.jpg';
import web from '../assest/image/web.jpg';
import full from '../assest/image/full.jpg';
import git from '../assest/image/git.png';
import { FaInstagram } from 'react-icons/fa6';
import { LiaInstagram } from 'react-icons/lia';
import Frontend from '../Component/Home/Frontend';
import Backend from '../Component/Home/Backend';
import Dev from '../Component/Home/Dev';

export const contactInfo = {
  title: 'Contact Us',
  description: "We're here to help! Reach out to us via email, phone, or social media. We'd love to hear from you!",
  footer: "Our team is available Monday to Friday, 9 AM to 9 PM. We look forward to hearing from you!"
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
  {   id: 'instagram',
    title: 'Instagram',
    icon: <LiaInstagram className="text-2xl" />,
    bgColor: 'bg-fuchsia-500',
    link: 'https://www.instagram.com/codebonding',
    linkText: 'Follow us on Instagram',
    description: 'Follow us on Instagram for the latest updates, photos, and behind-the-scenes content.',
  }
];

export const sections = [
  {
    id: 'home',
    component: <Home />,
  },
  {
    id: 'frontend',
    component: <Frontend />,
  },
   {
    id: 'backend',
    component: <Backend />,
  },
  {
    id: 'devops',
    component: <Dev />,
  },
  {
    id: 'about',
    component: <About />,
  },
  {
    id: 'faq',
    component: <FAQ />,
  },
];


export const footerData = {
  brand: {
    name: 'CodeBonding',
    description: 'We are passionate about coding and helping developers grow. Join our community!',
  },
  quickLinks: [
    { name: 'About Us', href: '/' },
    { name: 'Contact', href: '/' },
    { name: 'Privacy Policy', href: 'Privacy-Policy' },
    { name: 'Disclaimer', href: 'Disclaimer' },
    { name: 'Terms and Conditions', href: 'Terms-and-conditions' },
  ],
  socialLinks: [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/codebonding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      hoverColor: 'hover:text-pink-500',
    },
  ],
  bottomText: '© 2024 CodeBonding | All rights reserved.',
};

export const sections_1 = [
  // { id: "jobportal", label: "Jobportal" },
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export const DisclaimerContent = [
  "Information such as pricing and schedules may change without prior notice.",
  "CodeBonding is not responsible for third-party links or their content.",
  "We are not liable for damages resulting from the use of our services or content.",
  "Testimonials reflect individual experiences and are not guaranteed results.",
  "Seek professional advice for legal, financial, or other specialized needs."
];

// privacyPolicyData.js
export const privacyPolicySections = [
  {
    title: "1. Information We Collect",
    content: [
      { type: "list", items: ["Name, email, phone, and payment information.", "IP address, browser type, and cookies for a better experience."] },
    ],
  },
  {
    title: "2. How We Use Your Data",
    content: [
      { type: "text", text: "We use your data to provide services, improve our platform, and communicate updates or offers." },
    ],
  },
  {
    title: "3. Sharing & Security",
    content: [
      { type: "text", text: "Your data is shared only with trusted partners or as required by law. We implement strong security measures to protect your data, but no system is completely secure." },
    ],
  },
  {
    title: "4. Cookies",
    content: [
      { type: "text", text: "Cookies help us enhance your experience. You can manage cookie preferences through your browser settings." },
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      { type: "text", text: "You have the right to access, correct, or delete your data. Contact us for assistance." },
    ],
  },
  {
    title: "6. Updates",
    content: [
      { type: "text", text: "We may update this policy periodically. Please review it regularly for changes." },
    ],
  },
  {
    title: "7. Contact",
    content: [
      { type: "text", text: "If you have questions or concerns, reach out to us through our contact page." },
    ],
  },
];

// termsData.js
export const termsData = [
  {
    title: "Key Terms",
    content: [
      "Services include IT training, live sessions, internships, and placement guidance.",
      "Accounts must be registered with accurate details; you are responsible for your credentials.",
      "Course materials are for personal use only and must not be shared or distributed.",
      "Fees must be paid in advance; refunds follow our refund policy.",
      "Users must act responsibly and not engage in unlawful activities on the platform.",
      "All website content is the intellectual property of CodeBonding.",
    ],
  },
  {
    title: "Liability and Privacy",
    content: [
      "CodeBonding is not responsible for third-party content or links. Individual results may vary based on effort and market conditions. Personal data is handled as per our Privacy Policy.",
    ],
  },
  {
    title: "Changes and Contact",
    content: [
      "Terms may be updated periodically. For inquiries, please contact us through our website.",
    ],
  },
];

