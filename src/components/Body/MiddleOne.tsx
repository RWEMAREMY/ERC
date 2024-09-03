import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  linkText: string;
  delay: number;
  onReadMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, linkText, delay, onReadMore }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-[#043873] text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-left space-y-2 mb-4">
        {description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button onClick={onReadMore} className="text-blue-400 hover:text-blue-600">
        {linkText}
      </button>
    </div>
  );
};

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string[];
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="mb-4">
          {description.map((line, index) => (
            <li key={index} className="mb-2">{line}</li>
          ))}
        </ul>
        <button 
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MiddleOne: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupContent, setPopupContent] = useState<{ title: string; description: string[] } | null>(null);
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

  const handleReadMore = (title: string, description: string[]) => {
    setPopupContent({ title, description });
  };

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          WHY CHOOSE US
        </h2>
        <p className={`text-gray-600 mb-12 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Our expertise aims to tackle challenges with innovative methods and help our partners to make a successful decision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Advice"
            icon={<i className="fas fa-user-friends"></i>}
            description={[
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ]}
            linkText="Read More"
            delay={0}
            onReadMore={() => handleReadMore("Advice", [
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ])}
          />
           <ServiceCard
            title="Analysis"
            icon={<i className="fas fa-award"></i>}
            description={[
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ]}
            linkText="Read More"
            delay={200}
            onReadMore={() => handleReadMore("Advice", [
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ])}
          />
          <ServiceCard
            title="Data collection"
            icon={<i className="fas fa-file-alt"></i>}
            description={[
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ]}
            linkText="Read More"
            delay={400}
            onReadMore={() => handleReadMore("Advice", [
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ])}
          />
          <ServiceCard
            title="Data mining"
            icon={<i className="fas fa-user-friends"></i>}
            description={[
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ]}
            linkText="Read More"
            delay={600}
            onReadMore={() => handleReadMore("Advice", [
              "The best products start with Figma",
              "Design with real data",
              "Lightning fast prototyping",
              "Fastest way to organize",
              "Work at the speed of thought."
            ])}
          />
        </div>
      </div>
      <Popup
        isOpen={!!popupContent}
        onClose={() => setPopupContent(null)}
        title={popupContent?.title || ""}
        description={popupContent?.description || []}
      />
    </section>
  );
};

export default MiddleOne;