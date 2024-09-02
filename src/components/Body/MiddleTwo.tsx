import React from 'react';
import imageOne from '../../assets/Images/card-item.png'

const MiddleTwo: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">We are providing best service.</h2>
        <p className="text-gray-600 mb-12">
          We provide both technical assistance and statistical consultancy to our clients.
        </p>

        <div className="relative mx-auto" style={{ maxWidth: '800px' }}>
          <img
            src={imageOne}
            alt="Service Video"
            className="w-full shadow-lg"
          />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video link
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="bg-[#4F9CF9] text-white p-4 rounded-full">
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
            </div>
          </a>
        </div>
      </div>
      <div className="bg-[#043873] -mt-40" style={{ height: '300px' }}></div> {/* Blue section at the bottom */}
    </section>
  );
};

export default MiddleTwo;
