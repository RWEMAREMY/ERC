import React from 'react';
import Ellipse from '../../assets/Images/Ellipse 2.png'

const MiddleFour: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
        <p className="text-gray-600 mb-12">
          We always deliver what we promise and add value that goes beyond our client’s expectations.
        </p>

        <div className="flex justify-center space-x-4">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
            <div className="text-blue-900 mb-4">
              <div className="flex">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl text-gray-400">★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8">
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
            <div className="flex items-center">
              <img
                src={Ellipse}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-blue-900">Regina Miles</p>
                <p className="text-sm text-gray-600">Designer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
            <div className="text-blue-900 mb-4">
              <div className="flex">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl text-gray-400">★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8">
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
            <div className="flex items-center">
              <img
                src={Ellipse}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-blue-900">Regina Miles</p>
                <p className="text-sm text-gray-600">Designer</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80">
            <div className="text-blue-900 mb-4">
              <div className="flex">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl text-gray-400">★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8">
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
            <div className="flex items-center">
              <img
                src={Ellipse}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-blue-900">Regina Miles</p>
                <p className="text-sm text-gray-600">Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mx-1"></span>
        </div>
      </div>
    </section>
  );
};

export default MiddleFour;
