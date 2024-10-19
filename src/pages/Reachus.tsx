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
        className="flex-grow items-center justify-center p-4 gap-16 "
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Please reach out to us</h2>
          <p className="max-w-2xl mx-auto">
            We provide both technical assistance and statistical consultancy to our clients.
          </p>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {["Contact Name", "Street", "Contact Phone", "E-mail", "Let's talk about your idea"].map((label, index) => (
                  <div key={index}>
                    <label
                      htmlFor={label.toLowerCase().replace(/\s+/g, '')}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                    </label>
                    {label === "Let's talk about your idea" ? (
                      <textarea
                        id={label.toLowerCase().replace(/\s+/g, '')}
                        rows={4}
                        className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                        placeholder={label}
                      ></textarea>
                    ) : (
                      <input
                        type={label === "E-mail" ? "email" : "text"}
                        id={label.toLowerCase().replace(/\s+/g, '')}
                        className="w-full border-b-2 border-gray-300 p-2 focus:border-teal-400 outline-none"
                        placeholder={label}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition"
                >
                  Submit
                </button>
              </form>

              <div className="flex flex-col items-center justify-between md:flex-row md:space-x-2 space-y-6 md:space-y-0">
                {[
                  { title: "Phone", value: "+250788392152", icon: "call" },
                  { title: "E-MAIL", value: "ERC@gmail.com", icon: "email" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      className={`h-6 w-6 text-black ${contact.icon === 'call' ? '' : 'fill-current'}`}
                      viewBox={contact.icon === 'call' ? "0 0 20 20" : "0 0 1920 1920"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {contact.icon === 'call' ? (
                        <>
                          <path d="M94,7167 L94,7169 L96,7169 C96,7167.895 95.105,7167 94,7167 M94,7163 L94,7165 C96.206,7165 98,7166.794 98,7169 L100,7169 C100,7165.686 97.314,7163 94,7163 M94,7159 L94,7161 C98.411,7161 102,7164.589 102,7169 L104,7169 C104,7163.477 99.523,7159 94,7159 M98.652..." />
                        </>
                      ) : (
                        <>
                          <path d="M0 1694.235h1920V226H0v1468.235ZM112.941..." />
                        </>
                      )}
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{contact.title}</p>
                      <p className="text-blue-600">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative w-full h-[300px] md:h-[450px]"
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