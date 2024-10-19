import React, { useState, useEffect, useRef } from "react";
import Avatar from "../../assets/Images/Avater.png";
import { useLocation, Link } from "react-router-dom";

const MiddleThree: React.FC = () => {
  const location = useLocation();
  const publicationsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    if (location.state && location.state.scrollToPublications) {
      publicationsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrolling = true;
    let animationId: number;
    let startX: number;
    let scrollLeft: number;

    const scroll = () => {
      if (scrolling && scrollContainer) {
        scrollContainer.scrollLeft += scrollDirection;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          setScrollDirection(-1);
        } else if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1);
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseDown = (e: MouseEvent) => {
      scrolling = false;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseUp = () => {
      scrolling = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!scrolling) {
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      scrolling = false;
      startX = e.touches[0].clientX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrolling) {
        const x = e.touches[0].clientX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
      }
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseleave", handleMouseUp);

    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseleave", handleMouseUp);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollDirection]);

  return (
    <section ref={publicationsRef} className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
        <p className="text-gray-600 mb-12">
          We provide both technical assistance and statistical consultancy to
          our clients.
        </p>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-hidden cursor-grab active:cursor-grabbing p-2"
            style={{ userSelect: "none" }}
          >
            {/* Card 1 */}
            <div className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
              <p className="mb-8">
                Whitepace is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <hr className="border-white mb-4" />
              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Oberon Shaw, MCH</p>
                  <p className="text-sm">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
              <p className="mb-8">
                Whitepace is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <hr className="border-white mb-4" />
              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Oberon Shaw, MCH</p>
                  <p className="text-sm">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
              <p className="mb-8">
                Whitepace is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <hr className="border-white mb-4" />
              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Oberon Shaw, MCH</p>
                  <p className="text-sm">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
              <p className="mb-8">
                Whitepace is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <hr className="border-white mb-4" />
              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Oberon Shaw, MCH</p>
                  <p className="text-sm">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#043873] text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
              <p className="mb-8">
                Whitepace is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <hr className="border-white mb-4" />
              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Oberon Shaw, MCH</p>
                  <p className="text-sm">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <button className="bg-[#043873] rounded-xl p-4 mt-2 font-back hover:bg-[#df4e10] hover:font-bold ">
              <Link to="/publications" className="text-white hover:text-white">
                More publications <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleThree;
