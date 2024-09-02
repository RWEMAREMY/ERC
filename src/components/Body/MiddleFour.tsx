import React, { useEffect, useRef, useState } from 'react';
import Ellipse from '../../assets/Images/Ellipse 2.png'

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

        <div className="flex justify-center space-x-4">
          {/* Card 1 */}
          <AnimatedSection delay={600}>
            <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
              <div className="text-blue-900 mb-4">
                <div className="flex">
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl text-gray-400">★</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8">
                Slate helps you see how many more days you need to work to reach your financial goal.
              </p>
              <div className="flex items-center">
                <img
                  src={Ellipse}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-blue-900">Regina Miles</p>
                  <p className="text-sm text-gray-600">Designer</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection delay={800}>
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
              <div className="text-blue-900 mb-4">
                <div className="flex">
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl text-gray-400">★</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8">
                Slate helps you see how many more days you need to work to reach your financial goal.
              </p>
              <div className="flex items-center">
                <img
                  src={Ellipse}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-blue-900">Regina Miles</p>
                  <p className="text-sm text-gray-600">Designer</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection delay={1000}>
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
              <div className="text-blue-900 mb-4">
                <div className="flex">
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl text-gray-400">★</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8">
                Slate helps you see how many more days you need to work to reach your financial goal.
              </p>
              <div className="flex items-center">
                <img
                  src={Ellipse}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-blue-900">Regina Miles</p>
                  <p className="text-sm text-gray-600">Designer</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MiddleFour;