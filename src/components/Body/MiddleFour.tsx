import React, { useEffect, useRef, useState } from 'react';
import Ellipse from '../../assets/Images/Ellipse 2.png';
import Ellipse2 from '../../assets/Images/Cubes.jpeg'; // New image for the second card
import Ellipse3 from '../../assets/Images/Avater.png';

const AnimatedSection: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
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
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TestimonialCard: React.FC<{ delay: number; content: string; imageSrc: string; ratings: number; name: string; role: string }> = ({ delay, content, imageSrc, ratings, name, role }) => (
  <AnimatedSection delay={delay}>
    <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80 transform perspective-1000 hover:scale-105 hover:rotate-y-5 hover:rotate-x-5 transition-transform duration-300" style={{ transformStyle: 'preserve-3d' }}>
      <div className="text-blue-900 mb-4 transform translate-z-20">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`text-xl ${index < ratings ? '' : 'text-gray-400'}`}>★</span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-8 transform translate-z-20">
        {content}
      </p>
      <div className="flex items-center transform translate-z-20">
        <img
          src={imageSrc}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold text-blue-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const MiddleFour: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <AnimatedSection delay={200}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <p className="text-gray-600 mb-12">
            We always deliver what we promise and add value that goes beyond our client's expectations.
          </p>
        </AnimatedSection>

        <div className="flex justify-center space-x-4 flex-wrap gap-10">
  <TestimonialCard delay={600} content="This service has transformed my business!" imageSrc={Ellipse} ratings={2} name="Regina Mwiza" role="Designer"/>
  <TestimonialCard delay={800} content="I couldn't be happier with the results!" imageSrc={Ellipse2} ratings={4} name="James Rugamba" role="Entrepreneur"  />
  <TestimonialCard delay={1000} content="A fantastic experience from start to finish." imageSrc={Ellipse3} ratings={3} name="Bruce Ineza" role="Marketing Specialist" />
</div>
      </div>
    </section>
  );
};

export default MiddleFour;