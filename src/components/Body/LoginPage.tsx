import React, { FormEvent, useState } from "react"; // Added import for useState
import Logo from "../../assets/Images/ERCDOCLOGO.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: string;
  };
}

const LoginComponent = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [id]: value
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
    setIsLoading(true);
    setError(null); // Reset error state

    // Show loading toast
    const loadingToast = toast.loading("Logging in...");

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data: LoginResponse = await response.json();
      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Store token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Update loading toast to success
      toast.update(loadingToast, {
        render: "Login successful! Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      // Redirect based on role after a short delay
      setTimeout(() => {
        if (data.user.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/client/dashboard');
        }
      }, 2000);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setError(errorMessage); 
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

        {/* Error message display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

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
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-white outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            {/* Validation message for email */}
            {!isEmailValid && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-white outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
            {/* Validation message for password */}
            {!isPasswordValid && (
              <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long.</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'LOGGING IN...' : 'SUBMIT'}
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