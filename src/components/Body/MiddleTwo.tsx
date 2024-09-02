import React, { useEffect, useRef, useState } from 'react';
import imageOne from '../../assets/Images/card-item.png'

const MiddleTwo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="bg-white pt-16 pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className={`text-3xl font-bold mb-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          We are providing best service.
        </h2>
        <p className={`text-gray-600 mb-12 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          We provide both technical assistance and statistical consultancy to our clients.
        </p>

        <div className={`relative mx-auto transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ maxWidth: '800px' }}>
          <img
            src={imageOne}
            alt="Service Video"
            className="w-full shadow-lg relative z-10"
          />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video link
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 flex justify-center items-center transition-all duration-1000 ease-out delay-700 z-20 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="bg-[#4F9CF9] text-white p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.883v4.234a1 1 0 001.555.832l3.197-2.133a1 1 0 000-1.665z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-[#043873] transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`} 
        style={{ height: '300px', zIndex: 1 }}
      ></div>
    </section>
  );
};

export default MiddleTwo;
