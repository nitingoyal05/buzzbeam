import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    { 
      title: 'Quick Links', 
      links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },

      ]
    },
    { 
      title: 'Legal', 
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
      ]
    },
    { 
      title: 'Contact', 
      links: [
        { name: 'mediabuzzbeam@gmail.com', path: 'mailto:mediabuzzbeam@gmail.com' },
        { name: '+91 8894947990', path: 'tel:+91 8894947990' },
        { name: 'Chandigarh , India', path: '#', extraClass: 'cursor-default' },
      ]
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info - Full width on mobile, then first column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="logo.jpg" 
                alt="Buzzbeam Media logo" 
                className="h-10 w-10 mr-3"
                loading="lazy"
              />
              <span className="font-bold text-xl">BUZZBEAM MEDIA</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Empowering creators to scale their brand and revenue through premium media services.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links - Responsive columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="mt-0">
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.path.startsWith('http') || link.path.startsWith('mailto') || link.path.startsWith('tel') ? (
                      <a
                        href={link.path}
                        className={`text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base ${link.extraClass || ''}`}
                        target={link.path.startsWith('http') && !link.path.startsWith('#') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base ${link.extraClass || ''}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm sm:text-base text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} Buzzbeam Media. All rights reserved.
          </p>
          <div className="order-1 md:order-2 flex space-x-6 md:space-x-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm sm:text-base transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm sm:text-base transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;