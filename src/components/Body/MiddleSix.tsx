import React, { useEffect, useRef, useState } from 'react';
import cover from '../../assets/Images/cover-2.png'

const MiddleSix: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${cover})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className={`text-lg font-bold transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>Contact Us</h2>
        <h1 className={`text-4xl font-extrabold mt-2 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>Make an Appointment</h1>
        <form className={`mt-8 max-w-xl w-full transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-1/2 p-4 rounded bg-gray-200 text-gray-800 focus:outline-none"
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-1/2 p-4 rounded bg-gray-200 text-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex space-x-4 mt-4">
          <input
              type="text"
              placeholder="Company Name"
              className="w-full p-4 rounded bg-gray-200 text-gray-800 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-4 mt-4 rounded bg-gray-200 text-gray-800 focus:outline-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
      <div className={`absolute bottom-0 w-full py-10 bg-white text-gray-800 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className='flex items-center justify-between px-10'>
          <div className='text-left'>
            <h2 className="text-2xl font-bold">Consulting Agency For Your Business</h2>
            <p className="mt-2 text-gray-600">
              Are you confident in how you present your statistical results and conclusions?
            </p>
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSix;