import React, { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  linkText: string;
  delay: number;
  onReadMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  linkText,
  delay,
  onReadMore,
}) => {
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
      {
        threshold: 0.1,
      }
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
      className={`bg-[#043873] hover:bg-blue-600 cursor-pointer text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-left space-y-2 mb-4">
        {description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button
        onClick={onReadMore}
        className="text-orange-400 -ml-24 hover:text-[#043873]"
      >
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

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="mb-4">
          {description.map((line, index) => (
            <li key={index} className="mb-2">
              {line}
            </li>
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
  const [popupContent, setPopupContent] = useState<{
    title: string;
    description: string[];
  } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
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
    setPopupContent({
      title,
      description,
    });
  };

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl font-bold mb-4 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          WHY CHOOSE US
        </h2>
        <p
          className={`text-gray-600 mb-12 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our expertise aims to tackle challenges with innovative methods and
          help our partners to make a successful decision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="transition-all duration-300 ease-in-out transform rounded-lg hover:scale-105">
            <ServiceCard
              title="Advice"
              icon={<i className="fas fa-user-friends"></i>}
              description={[
                "We offer expert statistical guidance, helping you choose the right analysis techniques and present data clearly. Our support ensures your data becomes insights that drive impactful decisions.",
              ]}
              linkText="Read More"
              delay={0}
              onReadMore={() =>
                handleReadMore("Advice", [
                  "ERC provides expert statistical guidance to help your team choose the right analysis methods and interpret data effectively. We support you in presenting results clearly and turning insights into practical actions. Whether you need one-time advice or ongoing consultation, we tailor our services to your needs. Our experienced consultants can help you navigate complex statistical landscapes, ensuring you select the appropriate techniques for your specific data challenges. By leveraging our expertise, your team can enhance their analytical skills and improve the accuracy of interpretations. We also offer workshops and training sessions to equip your staff with the necessary tools to handle data confidently. Ultimately, our goal is to empower your organization to make data-driven decisions that yield significant results.",
                ])
              }
            />
          </div>
          <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <ServiceCard
              title="Analysis"
              icon={<i className="fas fa-award"></i>}
              description={[
                "Our service turns raw data into meaningful insights through tailored statistical analysis. We provide everything from summaries to complex models, enabling smart, data-driven decisions.",
              ]}
              linkText="Read More"
              delay={200}
              onReadMore={() =>
                handleReadMore("Analysis", [
                  "Our statistical analysis service translates your data into clear, actionable insights. From basic summaries to complex models, we help you uncover the information needed for informed decision-making. Let your data speak with precision and clarity. Our analysts employ a variety of techniques tailored to your unique requirements, ensuring a thorough exploration of your data. We focus on uncovering trends and correlations that can inform strategic planning and operational improvements. Additionally, we provide detailed reports and visualizations that enhance understanding and facilitate effective communication of findings. With our analytical support, you can confidently make decisions based on solid evidence and clear insights.",
                ])
              }
            />
          </div>
          <div className="transition-all duration-300 ease-in-out transform rounded-lg hover:scale-105">
            <ServiceCard
              title="Data collection"
              icon={<i className="fas fa-file-alt"></i>}
              description={[
                "We design effective questionnaires and tools, ensuring efficient data collection and accurate results. Our team supervises the process to deliver high-quality, usable data.",
              ]}
              linkText="Read More"
              delay={400}
              onReadMore={() =>
                handleReadMore("Data collection", [
                  "We design questionnaires, develop data collection tools, and supervise the entire process to ensure high-quality, usable data. We handle everything from survey timing to indicator-based responses, making sure the data serves your specific goals efficiently. Our approach includes thorough planning and pre-testing to address potential challenges in the data collection process. We utilize cutting-edge technology to streamline data management and ensure accuracy at every step. Moreover, our team provides training on best practices for data collection, empowering your staff to contribute effectively. We also emphasize the importance of ethical data handling and compliance with relevant regulations. By partnering with us, you can trust that your data collection process is robust and reliable.",
                ])
              }
            />
          </div>
          <div className="transition-all duration-300 ease-in-out transform rounded-lg hover:scale-105">
            <ServiceCard
              title="Data mining"
              icon={<i className="fas fa-user-friends"></i>}
              description={[
                "ERC extracts critical insights from vast data sets, detecting patterns and trends. We help transform complex data into personalized, actionable recommendations that drive results.",
              ]}
              linkText="Read More"
              delay={600}
              onReadMore={() =>
                handleReadMore("Data mining", [
                  "ERC helps extract valuable insights from vast, complex data sets, identifying patterns, outliers, and key trends. We provide personalized recommendations based on data analysis to solve pressing challenges and improve decision-making. Our data mining techniques reveal hidden correlations that can lead to innovative solutions and enhanced performance. We leverage advanced algorithms and tools to analyze data from diverse sources, ensuring comprehensive insights. Additionally, we help you establish a data-driven culture within your organization, fostering collaboration between teams and promoting continuous improvement. Our ongoing support ensures you stay ahead of trends and adapt to changing market dynamics. Together, we can turn your data into a strategic asset that drives growth and success.",
                ])
              }
            />
          </div>
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
