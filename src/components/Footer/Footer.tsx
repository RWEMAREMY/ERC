import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Images/ERC Logo 2.png";
import { Link } from "react-router-dom";

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
    <footer ref={footerRef} className="bg-[#043873] text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div
            className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <img src={Logo} alt="Profile" className="w-28 h-26" />
          </div>

          <div
            className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-bold mb-3">Company Info</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-yellow-400">
                  publications
                </Link>
              </li>
              <li>
                <Link to="/reachus" className="hover:text-yellow-400">
                  Reach us
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`w-full md:w-1/4 mb-6 md:mb-0 transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-bold mb-3">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/research" className="hover:text-yellow-400">
                  market research
                </Link>
              </li>
              <li>
                <Link to="monitoring" className="hover:text-yellow-400">
                  Monitoring,Evaluation &Learning
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-yellow-400">
                  Advice policy makers
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-yellow-400">
                  programmatic Work
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`w-full md:w-1/4 transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-bold mb-3">Get in touch</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/reachus" className="hover:text-yellow-400">
                  reach us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-between items-center mt-8 border-t border-gray-700 pt-4 transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>🌐</span>
              <a href="#" className="hover:text-yellow-400">
                English
              </a>
            </div>
          </div>

          <div className="text-sm">&copy;2024.</div>
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
