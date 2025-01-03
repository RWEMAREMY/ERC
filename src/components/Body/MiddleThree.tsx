import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

interface PublicationCard {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  position: string;
}

const MiddleThree: React.FC = () => {
  const location = useLocation();
  const publicationsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [publicationCards, setPublicationCards] = useState<PublicationCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location.state && location.state.scrollToPublications) {
      publicationsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let startX: number;
    let scrollLeft: number;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.animation = 'none';
    };

    const handleMouseUp = () => {
      isDragging = false;
      scrollContainer.style.animation = '';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseleave", handleMouseUp);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const fetchPublicationCards = async () => {
      try {
        const response = await fetch('https://wizzy-africa-backend.onrender.com/api/publication-cards', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch publication cards');
        }
        const data = await response.json();
        setPublicationCards(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublicationCards();
  }, []);

  const truncateContent = (content: string, maxLength: number = 150) => {
    const strippedContent = content.replace(/<[^>]*>/g, '');
    if (strippedContent.length <= maxLength) return strippedContent;
    const truncated = strippedContent.substr(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return `${truncated.substr(0, lastSpace)}...`;
  };

  if (isLoading) return (
    <div role="status" className="flex justify-center items-center h-screen">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (error) return <div className="text-center py-16 text-red-500">{error}</div>;

  return (
    <section ref={publicationsRef} className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
        <p className="text-gray-600 mb-12">
          We provide both technical assistance and statistical consultancy to
          our clients.
        </p>

        <div className="relative overflow-hidden w-full">
          <div
            ref={scrollContainerRef}
            className="flex w-max"
            style={{ userSelect: "none" }}
          >
            <div className="flex space-x-4 animate-slide-left hover:pause">
              {publicationCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0"
                >
                  <div className="text-4xl mb-4">"</div>
                  <p className="mb-8">{truncateContent(card.content)}</p>
                  <hr className="border-white mb-4" />
                  <div className="flex items-center">
                    <img
                      src={card.image}
                      alt={`${card.author}'s profile`}
                      className="w-12 h-12 rounded-full mr-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/fallback-image.png';
                      }}
                    />
                    <div>
                      <p className="font-bold">{card.title}</p>
                      <p className="text-sm">{card.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 animate-slide-left hover:pause">
              {publicationCards.map((card, index) => (
                <div
                  key={`${card.id}-duplicate-${index}`}
                  className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0"
                >
                  <div className="text-4xl mb-4">"</div>
                  <p className="mb-8">{truncateContent(card.content)}</p>
                  <hr className="border-white mb-4" />
                  <div className="flex items-center">
                    <img
                      src={card.image}
                      alt={`${card.author}'s profile`}
                      className="w-12 h-12 rounded-full mr-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/fallback-image.png';
                      }}
                    />
                    <div>
                      <p className="font-bold">{card.title}</p>
                      <p className="text-sm">{card.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <button className="bg-[#043873] rounded-xl p-4 mt-2 font-back hover:bg-[#df4e10] hover:font-bold">
            <Link to="/publications" className="text-white hover:text-white">
              More publications <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiddleThree;