import React, { useEffect, useRef, useState } from "react";
import temp from "../../assets/Images/PartnersLogo.png";

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay: number;
}> = ({ children, delay }) => {
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PartnerCard: React.FC<{
  logo: string;
  name: string;
}> = ({ logo, name }) => (
  <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 min-w-[200px] mx-4 h-[200px] hover:scale-105 transition-transform duration-300">
    <img src={logo} alt={name} className="w-24 h-24 object-contain mb-4" />
    <p className="font-bold text-blue-900 text-sm">{name}</p>
  </div>
);

const ScrollingPartners: React.FC<{
  direction: 'left' | 'right';
  partners: Array<{ logo: string; name: string; }>;
}> = ({ direction, partners }) => {
  return (
    <div className="relative overflow-hidden py-4">
      <div
        className="flex"
        style={{
          whiteSpace: 'nowrap',
          willChange: 'transform',
          animation: `${direction === 'left' ? 'slideLeft' : 'slideRight'} 25s linear infinite`
        }}
      >

        {[...partners, ...partners].map((partner, index) => (
          <PartnerCard
            key={`${partner.name}-${index}`}
            logo={partner.logo}
            name={partner.name}
          />
        ))}
      </div>
    </div>
  );
};

const MiddleFour: React.FC = () => {
  const partners = [
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
    { logo: temp, name: "Template" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <div className="mt-20">
          <AnimatedSection delay={200}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p className="text-gray-600 mb-12">
              We collaborate with leading companies worldwide to deliver
              excellence
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            <ScrollingPartners
              direction="left"
              partners={partners.slice().reverse()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleFour;
