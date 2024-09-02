// import React from 'react';
// import Avatar from '../../assets/Images/Avater.png'

// const MiddleThree: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
//         <p className="text-gray-600 mb-12">
//           We provide both technical assistance and statistical consultancy to our clients.
//         </p>

//         <div className="flex justify-center space-x-4">
//           {/* Card 1 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80 ">
//             <div className="text-4xl text-blue-900 mb-4">“</div>
//             <p className="text-gray-700 mb-8">
//               Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
//             </p>
//             <hr className="mb-4" />
//             <div className="flex items-center">
//               <img
//                 src={Avatar}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-bold text-gray-900">Oberon Shaw, MCH</p>
//                 <p className="text-sm text-gray-600">Head of Talent Acquisition, North America</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80">
//             <div className="text-4xl mb-4">“</div>
//             <p className="mb-8">
//               Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
//             </p>
//             <hr className="border-white mb-4" />
//             <div className="flex items-center">
//               <img
//                 src={Avatar}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-bold">Oberon Shaw, MCH</p>
//                 <p className="text-sm">Head of Talent Acquisition, North America</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80">
//             <div className="text-4xl mb-4">“</div>
//             <p className="mb-8">
//               Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
//             </p>
//             <hr className="border-white mb-4" />
//             <div className="flex items-center">
//               <img
//                 src={Avatar}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-bold">Oberon Shaw, MCH</p>
//                 <p className="text-sm">Head of Talent Acquisition, North America</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Card 4 */}
//           <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80">
//             <div className="text-4xl mb-4">“</div>
//             <p className="mb-8">
//               Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
//             </p>
//             <hr className="border-white mb-4" />
//             <div className="flex items-center">
//               <img
//                 src={Avatar}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-bold">Oberon Shaw, MCH</p>
//                 <p className="text-sm">Head of Talent Acquisition, North America</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Card 5 */}
//           <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80">
//             <div className="text-4xl mb-4">“</div>
//             <p className="mb-8">
//               Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
//             </p>
//             <hr className="border-white mb-4" />
//             <div className="flex items-center">
//               <img
//                 src={Avatar}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-bold">Oberon Shaw, MCH</p>
//                 <p className="text-sm">Head of Talent Acquisition, North America</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8">
//           <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mx-1"></span>
//           <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>
//           <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MiddleThree;




import React from 'react';
import Avatar from '../../assets/Images/Avater.png'
import './animations.css'

const MiddleThree: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
        <p className="text-gray-600 mb-12">
          We provide both technical assistance and statistical consultancy to our clients.
        </p>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* Cards container */}
            <div className="flex space-x-4 min-w-full">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="bg-white shadow-lg rounded-lg p-6 text-left w-80 ">
            <div className="text-4xl text-blue-900 mb-4">“</div>
            <p className="text-gray-700 mb-8">
              Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <hr className="mb-4" />
            <div className="flex items-center">
              <img
                src={Avatar}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-900">Oberon Shaw, MCH</p>
                <p className="text-sm text-gray-600">Head of Talent Acquisition, North America</p>
              </div>
            </div>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
            <p className="mb-8">
              Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
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
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
            <p className="mb-8">
              Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
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
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
              </div>

              {/* Card 4 */}
              <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
            <p className="mb-8">
              Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
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
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
              </div>

              {/* Card 5 */}
              <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-left w-80 flex-shrink-0">
              <div className="text-4xl mb-4">“</div>
            <p className="mb-8">
              Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
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
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
              </div>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="flex space-x-4 min-w-full">
            <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mx-1"></span>

            </div>
          </div>
        </div>

        {/* Remove the dots */}
      </div>
    </section>
  );
};

export default MiddleThree;