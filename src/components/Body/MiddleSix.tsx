import React, { useEffect, useRef, useState } from "react";
import cover from "../../assets/Images/cover-2.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://wizzy-africa-backend.onrender.com/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      toast.success("Appointment booked successfully!");
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-cover bg-center py-6 px-4 md:px-8 flex flex-col"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <ToastContainer position="top-right" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-start items-center w-full max-w-4xl mx-auto">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 md:mb-12 transition-all duration-1000 ease-out ${
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
          className={`w-full mb-8 md:mb-12 transition-all duration-1000 ease-out delay-500 space-y-6 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full p-3 md:p-4 rounded bg-white text-gray-800 focus:outline-none ${
                  errors.fullName ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                className={`w-full p-3 md:p-4 rounded bg-white text-gray-800 focus:outline-none ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className={`w-full p-3 md:p-4 rounded bg-white text-gray-800 focus:outline-none ${
                errors.companyName ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={6}
              className={`w-full p-3 md:p-4 rounded bg-white text-gray-800 focus:outline-none resize-none ${
                errors.message ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#043873] text-white py-3 md:py-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50 text-base md:text-lg font-semibold"
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>

      {/* <div
        className={`w-full bg-white text-gray-800 py-6 md:py-8 rounded-lg transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold">
                Consulting Agency For Your Business
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Are you confident in how you present your statistical results
                and conclusions?
              </p>
            </div>
            <button
              onClick={() => navigate("/reachus")}
              className="bg-[#043873] text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 text-sm md:text-base font-semibold whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MiddleSix;
