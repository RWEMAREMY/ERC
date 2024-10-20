import { motion } from "framer-motion";

function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          Our Mission & Vision
        </motion.h2>
        {/* Subtitle */}
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-500 mb-12"
        >
          We provide both technical assistance and statistical consultancy to
          our clients.
        </motion.p>

        {/* Mission & Vision Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2 items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2 mt-1"
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
              <h3 className="text-xl font-semibold text-blue-600 ml-4">
                Our Mission
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-left text-gray-700 leading-relaxed">
                Our mission is to provide innovative, data-driven research and
                advisory services that empower informed decision-making. We
                focus on creating and implementing homegrown solutions to
                address challenges faced by populations on their journey toward
                sustainable and inclusive prosperity. By harnessing local
                knowledge, we aim to drive meaningful change and foster economic
                growth and resilience. Ultimately, we are dedicated to promoting
                long-term development in communities across Africa.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2 mt-1"
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
              <h3 className="text-xl font-semibold text-blue-600 ml-4">
                Our Vision
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-left text-gray-700 leading-relaxed">
                To be a pioneering research consultancy that drives
                transformative change and fosters sustainable development by
                empowering communities and organizations through innovative,
                data-driven solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MissionVision;
