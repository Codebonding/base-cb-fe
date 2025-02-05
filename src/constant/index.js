import vision from '../assest/image/vision.jpg';
import why from '../assest/image/why.jpg';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import FAQ from '../Component/FAQ/Faq';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import master from '../assest/image/matser.jpg';
import web from '../assest/image/web.jpg';
import full from '../assest/image/full.jpg';
import git from '../assest/image/git.png';
import { FaInstagram } from 'react-icons/fa6';
import { LiaInstagram } from 'react-icons/lia';


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
    { name: 'About Us', href: '/' },
    { name: 'Contact', href: '/' },
    { name: 'Privacy Policy', href: 'Privacy-Policy'},
    { name: 'Disclaimer', href: 'Disclaimer'},
    { name: 'Terms and Conditions', href: 'Terms-and-conditions'}
  ],
  socialLinks: [
    { icon: <FaInstagram className="w-6 h-6" />, href: 'https://www.instagram.com/codebonding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', hoverColor: 'hover:text-pink-500' },
  ],
  bottomText: '© 2024 codebonding | All rights reserved.',
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

export const sections_2 = [
  {
    title: 'Kickstart Your IT Career with CodeBonding',
    description:
      'Join CodeBonding’s expert-led training programs covering HTML, CSS, React, Node.js, and more. Build a strong foundation in full-stack development and secure your future in the IT industry.',
    // buttonText: 'Join Now',
    image: master,
    imageFirst: true,
  },
  {
    title: 'CodeBonding: Shaping Future Developers',
    description:
      'As a product-based IT company, CodeBonding offers hands-on web development training in HTML, CSS, JavaScript, and modern frameworks. Learn how to structure web applications effectively and build real-world projects.',
    image: web,
    imageFirst: false, 
  },
  {
    title: 'Full Stack Developer Program by CodeBonding',
    description:
      'Our Full Stack Developer training equips you with industry-relevant skills in frontend and backend development. Master React for interactive UI, Node.js for server-side logic, and MySQL for robust data management.',
    image: full,
    imageFirst: true,
  },
  {
    title: 'Version Control & Team Collaboration with Git',
    description:
      'At CodeBonding, we emphasize best practices in version control. Learn Git to manage code efficiently, collaborate with teams, and streamline your software development workflow.',
    image: git,
    imageFirst: false,
  },
];
