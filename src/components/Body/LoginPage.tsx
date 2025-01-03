<<<<<<< HEAD
import React, { FormEvent, useState } from "react"; // Added import for useState
import Logo from "../../assets/Images/ERCDOCLOGO.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import Logo from "../../assets/Logos/Photoroom.png";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token: string;
  message?: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImage: string;
    role: string;
    isActive: boolean;
    lastLogin: string;
  };
}

const LoginComponent = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState<string | null>(null); 
=======
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateInput = (id: string, value: string): string => {
    switch (id) {
      case "email":
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return "";
      default:
        return "";
    }
  };
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: validateInput(id, value),
    }));

    // Validate email and password on change
    if (id === 'email') {
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)); // Simple email regex
    } else if (id === 'password') {
      setIsPasswordValid(value.length >= 8); // Example password validation
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsLoading(true);
    setError(null); // Reset error state
=======
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030

    const emailError = validateInput("email", credentials.email);
    const passwordError = validateInput("password", credentials.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      toast.error("Please fill fields correctly before submitting");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Logging in...");

    try {
      const response = await fetch("https://wizzy-africa-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include",
      });

      const data: LoginResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      setAuthCookie(data.token, data.user);

      toast.update(loadingToast, {
        render: "Login successful! Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
<<<<<<< HEAD
      setTimeout(() => {
        window.location.href = 'https://erc-dashboard-one.vercel.app'; 
=======

      setTimeout(() => {
        const dashboardUrl = new URL("http://localhost:5174");
        dashboardUrl.searchParams.append("token", data.token);
        dashboardUrl.searchParams.append("user", JSON.stringify(data.user));
        window.location.href = dashboardUrl.toString();
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030
      }, 2000);
    } catch (err) {
<<<<<<< HEAD
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setError(errorMessage); 
=======
      console.error("Login error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred during login";
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030
      toast.update(loadingToast, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const setAuthCookie = (
    token: string,
    user: { id: string; email: string }
  ) => {
    const secure = process.env.NODE_ENV === "production";

    Cookies.set("auth_token", token, {
      expires: 1,
      secure: secure,
      sameSite: "strict",
      path: "/",
    });

    Cookies.set("user_info", JSON.stringify(user), {
      expires: 1,
      secure: secure,
      sameSite: "strict",
      path: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#043873] gap-12 p-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <img
        src={Logo}
        alt="Profile"
        className="w-22 h-24 transition-opacity duration-1000"
      />
      <div className="bg-transparent border border-gray-300 rounded-lg p-8 w-full max-w-md relative h-800">
        <div className="mt-2 text-center">
          <h2 className="text-2xl text-white font-bold mb-2">Login</h2>
          <p className="text-gray-300">Admin</p>
        </div>

<<<<<<< HEAD
        {/* Error message display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

=======
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030
        <form className="space-y-14 mt-8 p-8" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={credentials.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border-b ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-transparent text-white outline-none focus:border-blue-500`}
              placeholder="Enter your email"
            />
<<<<<<< HEAD
            {/* Validation message for email */}
            {!isEmailValid && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
=======
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030
            )}
          </div>

          <div className="relative">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border-b ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-transparent text-white outline-none focus:border-blue-500`}
              placeholder="Enter your email"
            />
<<<<<<< HEAD
            {/* Validation message for password */}
            {!isPasswordValid && (
              <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long.</p>
=======
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
>>>>>>> 27667019b21f31a5016d23bc90460982359bf030
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "LOGGING IN..." : "SUBMIT"}
          </button>
        </form>
      </div>

      <div className="flex bottom-14 -left-20">
        <button
          className="border border-gray-300 text-white py-1 px-4 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;