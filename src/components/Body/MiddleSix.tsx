import React, { useEffect, useRef, useState } from "react";
import cover from "../../assets/Images/cover-2.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
  message?: string;
}
const MiddleSix: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      const response = await fetch('https://wizzy-africa-backend.onrender.com/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      toast.success('Appointment booked successfully!');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleContact = () => {
    // sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    navigate('/reachus');
  };

  return (
    <div ref={sectionRef} className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${cover})` }}>
      <ToastContainer position="top-right" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
   
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white pt-8 h-4/6">

        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Make an Appointment
        </h1>

        <form
        id="appointment-form"
        onSubmit={handleSubmit}
        className={`max-w-xl w-full transition-all duration-1000 ease-out delay-500 p-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 gap-4">
          <div className="w-full sm:w-1/2">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`w-full p-4 rounded bg-white text-gray-800 focus:outline-none ${
                errors.fullName ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              className={`w-full p-4 rounded bg-white text-gray-800 focus:outline-none ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            className={`w-full p-4 rounded bg-white text-gray-800 focus:outline-none ${
              errors.companyName ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          className={`w-full p-4 mt-4 rounded bg-white text-gray-800 focus:outline-none ${
            errors.message ? 'border-2 border-red-500' : ''
          }`}
          rows={8}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full bg-[#043873] text-white py-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
      </div>
      <div
        className={`absolute bottom-0 w-full py-10 bg-white text-gray-800 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
          <div className="text-left mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold">
              Consulting Agency For Your Business
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Are you confident in how you present your statistical results and conclusions?
            </p>
          </div>

          <button onClick={toggleContact} className="bg-[#043873] text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSix;