import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

function Reachus() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow items-center justify-center pt-10 gap-16"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Please reach out to us</h2>
          <p className="max-w-2xl mx-auto">
            We provide both technical assistance and statistical consultancy to
            our clients.
          </p>
          </motion.div>
        <div className="flex flex-col items-center">
          {/* Main wrapper */}
          <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-16"
            >
              <div>
                <h1 className="text-4xl font-bold">
                  Get in <span className="text-[#043873]">touch</span>
                </h1>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                    placeholder="Contact name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                    placeholder="Street"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                    placeholder="Contact Phone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Let's talk about your idea
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                    placeholder="Let’s talk about your idea"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition"
                >
                  Submit
                </button>
              </form>

              <div className="flex flex-col items-center justify-between md:flex-row md:space-x-2 space-y-6 md:space-y-0">
                {/* Phone Section */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 text-black"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>call [#191]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7319.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M94,7167 L94,7169 L96,7169 C96,7167.895 95.105,7167 94,7167 M94,7163 L94,7165 C96.206,7165 98,7166.794 98,7169 L100,7169 C100,7165.686 97.314,7163 94,7163 M94,7159 L94,7161 C98.411,7161 102,7164.589 102,7169 L104,7169 C104,7163.477 99.523,7159 94,7159 M98.652,7177.234 C98.641,7177.265 98.64,7177.27 98.652,7177.234 M98.117,7174.578 C97.422,7174.204 96.719,7173.778 95.992,7173.481 C94.587,7172.908 94.682,7174.602 93.679,7175.151 C93.027,7175.508 92.107,7174.861 91.538,7174.503 C90.544,7173.877 89.663,7173.053 88.931,7172.1 C88.556,7171.613 87.728,7170.697 87.83,7170.014 C87.992,7168.93 89.274,7168.876 88.907,7167.55 C88.711,7166.84 88.36,7166.141 88.097,7165.457 C87.745,7164.54 87.6,7163.953 86.573,7164.003 C85.831,7164.039 85.339,7164.356 84.883,7164.951 C83.649,7166.558 83.835,7168.725 84.664,7170.488 C85.838,7172.983 87.85,7175.335 89.999,7176.855 C91.461,7177.889 93.387,7178.828 95.157,7178.987 C96.453,7179.104 98.266,7178.403 98.73,7176.996 C98.698,7177.094 98.667,7177.189 98.652,7177.234 C98.663,7177.199 98.687,7177.128 98.73,7176.996 C98.777,7176.854 98.8,7176.783 98.811,7176.751 C98.797,7176.793 98.765,7176.891 98.731,7176.993 C99.139,7175.753 99.189,7175.155 98.117,7174.578 M98.811,7176.751 C98.819,7176.727 98.819,7176.725 98.811,7176.751"
                            id="call-[#191]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-blue-600">111 111 111</p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center space-x-2">
                  <svg
                    fill="#000000"
                    className="h-6 w-6 text-black"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">E-MAIL</p>
                    <p className="text-blue-600">info@company.com</p>
                  </div>
                </div>

                {/* Helpdesk Section */}
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12.079V5a1 1 0 00-1-1H4a1 1 0 00-1 1v7.079a12.46 12.46 0 00-1.034 5.158A11.08 11.08 0 003 22.955c0 .073.006.145.017.217a11.153 11.153 0 001.483 3.578A9.945 9.945 0 006 28h12a9.946 9.946 0 001.5-.249c.082-.144.158-.292.227-.443a11.091 11.091 0 001.498-3.587c.014-.072.022-.145.022-.218a11.013 11.013 0 001.026-5.131c0-1.986-.338-3.893-1.03-5.639zm-2.062 7.021a.97.97 0 01-.54.875c-.285.117-.663.205-1.06.262H6.633c-.396-.057-.775-.145-1.06-.262a.971.971 0 01-.54-.875v-.75H18v.75z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">HELPDESK</p>
                    <a href="https://googlemeet.com" className="text-blue-600">
                      https://googlemeet.com
                    </a>
                  </div>
                </div>
              </div>
              </motion.div>
            {/* Right side - Google Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative w-full h-819"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7974.862650875328!2d30.095449000000006!3d-1.9820219999999968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1725647055697!5m2!1sen!2srw"
                width="600"
                height="450"
                className="absolute top-0 left-0 w-full h-full border-2 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
              </motion.div>
          </div>
        </div>
        </motion.main>

      <Footer />
    </div>
  );
}

export default Reachus;
