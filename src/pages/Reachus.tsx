import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  contactName: string;
  phoneNumber: string;
  email: string;
  mainIdea: string;
}

interface FormErrors {
  contactName?: string;
  phoneNumber?: string;
  email?: string;
  mainIdea?: string;
}
function Reachus() {
  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    phoneNumber: '',
    email: '',
    mainIdea: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mainIdea.trim()) {
      newErrors.mainIdea = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://wizzy-africa-backend.onrender.com/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit query');
      }

      toast.success('Message sent successfully!');
      setFormData({
        contactName: '',
        phoneNumber: '',
        email: '',
        mainIdea: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ToastContainer position="top-right" />
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className={`w-full border-b-2 ${errors.contactName ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-teal-400 outline-none`}
                    placeholder="Contact Name"
                  />
                  {errors.contactName && (
                    <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full border-b-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-teal-400 outline-none`}
                    placeholder="Contact Phone"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-teal-400 outline-none`}
                    placeholder="E-mail"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mainIdea" className="block text-sm font-medium text-gray-700">
                    Let's talk about your idea
                  </label>
                  <textarea
                    id="mainIdea"
                    value={formData.mainIdea}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full border-b-2 ${errors.mainIdea ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-teal-400 outline-none`}
                    placeholder="Let's talk about your idea"
                  />
                  {errors.mainIdea && (
                    <p className="text-red-500 text-sm mt-1">{errors.mainIdea}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#043873] text-white font-semibold py-2 px-4 rounded hover:bg-blue-900 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
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