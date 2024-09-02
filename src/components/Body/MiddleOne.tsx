import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  linkText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, linkText }) => {
  return (
    <div className="bg-[#043873] text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-left space-y-2 mb-4">
        {description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <a href="#" className="text-blue-400 hover:text-blue-600">
        {linkText}
      </a>
    </div>
  );
};

const MiddleOne: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">WHY CHOOSE US</h2>
        <p className="text-gray-600 mb-12">
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
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleOne;
