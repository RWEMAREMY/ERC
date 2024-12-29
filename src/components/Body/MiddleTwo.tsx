import React, { useEffect, useRef, useState } from "react";
import videoSource from "../../assets/Video/Library _ Loom - 5 August 2024.mp4";
import thumbnailImage from "../../assets/Images/card-item.png";

const MiddleTwo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const startVideo = () => {
    if (videoRef.current) {
      setShowThumbnail(false);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-16 pb-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2
          className={`text-3xl font-bold mb-4 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          We are providing best service.
        </h2>
        <p
          className={`text-gray-600 mb-12 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We provide both technical assistance and statistical consultancy to
          our clients.
        </p>

        <div
          className={`relative mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ maxWidth: "800px" }}
        >

          <div className="relative rounded-lg overflow-hidden shadow-xl">

            {showThumbnail && (
              <div className="absolute inset-0 z-20">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${thumbnailImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      title="Play Video"
                      onClick={startVideo}
                      className="bg-[#4F9CF9] text-white p-6 rounded-full transform transition-transform hover:scale-110 hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.883v4.234a1 1 0 001.555.832l3.197-2.133a1 1 0 000-1.665z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className="w-full"
              playsInline
              onClick={togglePlay}
              onEnded={() => {
                setIsPlaying(false);
                setShowThumbnail(true);
              }}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!showThumbnail && (
              <button
                onClick={togglePlay}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? "opacity-0" : "opacity-100 bg-black bg-opacity-40"
                } hover:opacity-100`}
              >
                <div className="bg-[#4F9CF9] text-white p-4 rounded-full transform transition-transform hover:scale-110">
                  {!isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.883v4.234a1 1 0 001.555.832l3.197-2.133a1 1 0 000-1.665z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 9v6m4-6v6"
                      />
                    </svg>
                  )}
                </div>
              </button>
            )}

            {!showThumbnail && (
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                } hover:opacity-100`}
              >
                <div className="flex items-center justify-between text-white">
                  <button
                    onClick={togglePlay}
                    className="hover:text-[#4F9CF9] transition-colors"
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#043873] transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        style={{ height: "300px", zIndex: 1 }}
      ></div>
    </section>
  );
};

export default MiddleTwo;
