import { motion } from "framer-motion";

function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-500 mb-12"
        >
          We provide both technical assistance and statistical consultancy to
          our clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2 items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#043873] mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#043873] ml-4">
                Our Mission
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-700 leading-relaxed">
                Our mission is to provide innovative, data-driven research and
                advisory services that empower informed decision-making. We
                focus on creating and implementing homegrown solutions to
                address the challenges faced by populations on their journey
                toward sustainable and inclusive prosperity. By harnessing local
                knowledge, emphasizing private sector development, and utilizing
                a market systems approach, we aim to drive meaningful change by
                providing actionable insights. We are intentional about gender
                equity in all that we do.
              </p>
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-[#043873] mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#043873] ml-4">
                Our Vision
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-700 leading-relaxed">
                To be the premier research and advisory firm in Africa,
                empowering stakeholders with data-driven insights that drive
                sustainable development and resilience. We envision a future
                where informed decisions transform challenges into opportunities
                for impactful change. 
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MissionVision;
