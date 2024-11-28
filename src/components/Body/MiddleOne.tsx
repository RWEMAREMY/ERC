import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string | string[];
  linkText: string;
  delay: number;
  onReadMore: () => void;
}

interface ExpertiseCard {
  title: string;
  icon: string;
  content: string[];
  _id: string;
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

  const stripHtmlTags = (str: string) => {
    return str.replace(/<[^>]*>/g, '');
  };

  const descArray =
    typeof description === "string"
      ? [stripHtmlTags(description)]
      : Array.isArray(description)
      ? description.map(stripHtmlTags)
      : [];

      const previewContent = descArray
      .slice(0, 2)
      .map((line) => (line.length > 100 ? `${stripHtmlTags(line.substring(0, 100))}...` : stripHtmlTags(line)));

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
      className={`bg-[#043873] h-[200px] cursor-pointer text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-left space-y-2 mb-4">
        {previewContent.map((line, index) => (
          <li key={index}>{String(line)}</li>
        ))}
        {descArray.length > 5 && <li>...</li>}
      </ul>
      <button
        onClick={onReadMore}
        className="text-orange-400 -ml-24 hover:text-[#df4e10]"
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

  const stripHtmlTags = (str: string) => {
    return str.replace(/<[^>]*>/g, '');
  };

  const descriptionArray = Array.isArray(description)
    ? description.map(stripHtmlTags)
    : [stripHtmlTags(description)];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">
      <div className="bg-white p-8 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto relative z-[51]">
        <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
        <div className="mb-4 text-gray-800 text-left">
          {descriptionArray.map((line, index) => (
            <p key={index} className="mb-4">
              {line}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MiddleOne: React.FC = () => {
  const [popupContent, setPopupContent] = useState<{ title: string; description: string[] } | null>(null);
  const [expertiseCards, setExpertiseCards] = useState<ExpertiseCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpertiseCards = async () => {
      try {
        const response = await fetch("https://wizzy-africa-backend.onrender.com/api/expertise-cards");
        if (!response.ok) throw new Error(`Failed to fetch data`);

        const data = await response.json();
        setExpertiseCards(data.map((card: ExpertiseCard) => ({
          ...card,
          content: Array.isArray(card.content) ? card.content : [card.content],
        })));
        
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchExpertiseCards();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[#85929e] p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <Skeleton
                  height={24}
                  width={140}
                  className="mb-4"
                  duration={1.5}
                />
                <div className="w-full space-y-2 mb-4">
                  <Skeleton height={20} width="100%" duration={1.5} />
                  <Skeleton height={20} width="80%" duration={1.5} />
                </div>
                <Skeleton
                  height={20}
                  width={80}
                  className="-ml-24"
                  duration={1.5}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  const handleReadMore = (title: string, description: string[]) => {
    setPopupContent({ title, description });
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
        <p className="text-gray-600 mb-12">Our expertise aims to tackle challenges with innovative methods.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseCards.map((card) => (
            <ServiceCard
              key={card._id}
              title={card.title}
              icon={<i className={card.icon}></i>}
              description={card.content}
              linkText="Read More"
              delay={0}
              onReadMore={() => handleReadMore(card.title, card.content)}
            />
          ))}
        </div>
        
        {popupContent && (
          <Popup
            isOpen={!!popupContent}
            onClose={() => setPopupContent(null)}
            title={popupContent.title}
            description={popupContent.description}
          />
        )}
      </div>
    </section>
  );
};


export default MiddleOne;
