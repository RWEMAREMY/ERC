import React, { useState } from 'react';
import { motion } from "framer-motion";

// Define the type for a moral
type Moral = {
  title: string;
  description: string;
  link: string;
};

const Morals: React.FC = () => {
  const [selectedMoral, setSelectedMoral] = useState<Moral | null>(null); // Updated state type

  const moralsData: Moral[] = [ // Specify the type for moralsData
    {
      title: 'Impact Oriented',
      description:
        'We are dedicated to making a significant impact through our services, ensuring that our partners achieve their goals effectively and efficiently. Our focus is on delivering measurable results that enhance the quality of life for the communities we serve.',
      link: 'Read more ',
    },
    {
      title: 'Participation',
      description:
        'We believe in the power of collaboration and actively involve our clients in the decision-making process. By fostering a participatory approach, we empower our clients to take ownership of their challenges and solutions, leading to more sustainable outcomes.',
      link: 'Read more ',
    },
    {
      title: 'Team Work',
      description:
        'Our success is built on teamwork, where diverse talents come together to create innovative solutions. We value each team member’s contribution and promote a culture of mutual respect and support, ensuring that we achieve our objectives collectively.',
      link: 'Read more ',
    },
    {
      title: 'Integrity',
      description:
        'Integrity is at the core of our operations. We adhere to the highest ethical standards, ensuring transparency and accountability in all our dealings. Our commitment to honesty builds trust with our partners and clients, fostering long-lasting relationships.',
      link: 'Read more ',
    },
    {
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do. Our commitment to quality drives us to continuously improve our services and processes. We set high standards for ourselves and work diligently to exceed the expectations of our clients and stakeholders.',
      link: 'Read more ',
    },
  ];

  const handleMoralClick = (moral: Moral) => { 
    setSelectedMoral(moral); 
  };

  const handleClosePopup = () => {
    setSelectedMoral(null); 
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-white"
      >
        <div className="max-w-6xl mx-auto text-left px-4">
          {/* Title */}
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-[#043873] mb-2"
          >
            Our Values
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-500 mb-12"
          >
            We provide both technical assistance and statistical consultancy to our clients.
          </motion.p>

          {/* Values Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {moralsData.map((moral, index) => (
              <motion.div
                key={index}
                onClick={() => handleMoralClick(moral)} // Trigger popup on click
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-[#043873] mb-4">{moral.title}</h3>
                <p className="text-gray-700 text-l mb-6">
                  {moral.description.slice(0, 70)}{moral.description.length > 20 ? '...' : ''}
                </p>
                <motion.a
                  href="#"
                  className="text-[#043873] hover:underline"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMoralClick(moral)} // Trigger popup on click
                >
                  {moral.link}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Popup for detailed description */}
      {selectedMoral && ( // Conditional rendering of the popup
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> {/* Added z-50 */}
         <div className="bg-white p-6 rounded-lg shadow-lg h-fit w-[55%]"> {/* Your existing styles */}
           <h3 className="text-xl font-semibold text-[#043873] mb-4">{selectedMoral.title}</h3>
           <p className="text-gray-700 mb-6">{selectedMoral.description}</p>
           <button onClick={handleClosePopup} className="text-red-500">Close</button>
         </div>
       </div>
      )}
    </>
  );
};

export default Morals;