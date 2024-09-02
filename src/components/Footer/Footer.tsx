import React, { useEffect, useRef, useState } from 'react';
import Logo from "../../assets/Images/ERC Logo 2.png";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <img
              src={Logo}
              alt="Profile"
              className="w-28 h-26"
            />
          </div>

          {/* Company Info Section */}
          <div className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-bold mb-3">Company Info</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400">Reach us</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-bold mb-3">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400">Guides & tutorials</a></li>
              <li><a href="#" className="hover:text-yellow-400">Help center</a></li>
            </ul>
          </div>

          {/* Features Section */}
          <div className={`w-full md:w-1/4 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-bold mb-3">Features</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">About us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400">Media kit</a></li>
            </ul>
          </div>
        </div>

        <div className={`flex flex-wrap justify-between items-center mt-8 border-t border-gray-700 pt-4 transition-all duration-1000 ease-out delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Language and Terms */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>🌐</span>
              <a href="#" className="hover:text-yellow-400">English</a>
            </div>
            <a href="#" className="hover:text-yellow-400">Terms & privacy</a>
            <a href="#" className="hover:text-yellow-400">Security</a>
            <a href="#" className="hover:text-yellow-400">Status</a>
          </div>

          {/* Copyright */}
          <div className="text-sm">&copy;2024.</div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400"> 
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
