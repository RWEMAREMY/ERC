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

  const descArray =
    typeof description === "string"
      ? [description]
      : Array.isArray(description)
      ? description
      : [];

  const previewContent = descArray
    .slice(0, 2)
    .map((line) => (line.length > 100 ? `${line.substring(0, 100)}...` : line));

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
      className={`bg-[#043873] cursor-pointer text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-1000 ease-out ${
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
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">
      <div className="bg-white p-8 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto relative z-[51]">
        <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
        <div className="mb-4 text-gray-800">
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
  const [isVisible, setIsVisible] = useState(false);
  const [popupContent, setPopupContent] = useState<{
    title: string;
    description: string[];
  } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [expertiseCards, setExpertiseCards] = useState<ExpertiseCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stripHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  useEffect(() => {
    const fetchExpertiseCards = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/expertise-cards",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          console.error("Response status:", response.status);
          console.error("Response statusText:", response.statusText);
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();

        const cleanedData = data.map((card: ExpertiseCard) => ({
          ...card,
          content: Array.isArray(card.content)
            ? card.content.map((text) => stripHtmlTags(String(text)))
            : [stripHtmlTags(String(card.content))],
        }));

        setExpertiseCards(cleanedData);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };
    fetchExpertiseCards();
  }, []);

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
                  circle={true}
                  height={60}
                  width={60}
                  className="mb-4"
                  duration={1.5}
                />
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
    const descArray = Array.isArray(description) ? description : [description];
    setPopupContent({
      title,
      description: descArray,
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
          Our expertise
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
          {expertiseCards?.map((card) => (
            <div
              key={card._id}
              className="transition-all duration-300 ease-in-out transform rounded-lg hover:scale-105"
            >
              <ServiceCard
                title={card.title}
                icon={<i className={card.icon}></i>}
                description={card.content}
                linkText="Read More"
                delay={0}
                onReadMore={() => handleReadMore(card.title, card.content)}
              />
            </div>
          ))}
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
