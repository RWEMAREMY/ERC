import React from 'react';
import { motion } from "framer-motion"
const Morals: React.FC = () => {

  const moralsData = [
    {
      title: 'Impact Oriented',
      description:
        'We always endeavor to provide quality services to our partners to ensure that their interventions...',
      link: 'Read more',
    },
    {
      title: 'Participation',
      description:
        'We are champions of participatory approaches to problem solving. We view our clients...',
      link: 'Read more',
    },
    {
      title: 'Team Work',
      description:
        'Our work is team effort. We create synergy with experts from diverse fields of practice...',
      link: 'Read more',
    },
    {
      title: 'Integrity',
      description:
        'We conduct ourselves in accordance with the highest standards of professional...',
      link: 'Read more',
    },
    {
      title: 'Excellence',
      description:
        'We conduct ourselves in accordance with the highest standards of professional...',
      link: 'Read more',
    },
  ];

  return (
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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#043873] mb-4">{moral.title}</h3>
              <p className="text-gray-700 mb-6">{moral.description}</p>
              <motion.a
                href="#"
                className="text-[#043873] hover:underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {moral.link}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Morals;
