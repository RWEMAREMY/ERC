import React, { useEffect, useRef, useState } from 'react';
import cover from '../../assets/Images/cover.png'

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Fullname',
    role: 'CO Founder',
    imgSrc: cover,
  },
  {
    name: 'Fullname',
    role: 'Consultant',
    imgSrc: cover,
  },
  {
    name: 'Fullname',
    role: 'CEO',
    imgSrc: cover,
  },
];

const MiddleFive: React.FC = () => {
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
    <div ref={sectionRef} className="bg-gray-50 py-10">
      <div className="text-center">
        <h2 className={`text-3xl font-bold text-gray-800 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          Meet Our Team
        </h2>
        <p className={`text-gray-500 mt-2 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          We are champions of participatory approaches to problem solving.
        </p>
      </div>
      <div className="flex justify-center mt-8 space-x-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className={`bg-white shadow-md rounded-lg p-6 max-w-xs text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${600 + index * 200}ms` }}
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleFive;
