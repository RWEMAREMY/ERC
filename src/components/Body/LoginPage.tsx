import Logo from "../../assets/Logos/Photoroom.png";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

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
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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

      setTimeout(() => {
        const dashboardUrl = new URL("http://localhost:5174");
        dashboardUrl.searchParams.append("token", data.token);
        dashboardUrl.searchParams.append("user", JSON.stringify(data.user));
        window.location.href = dashboardUrl.toString();
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred during login";
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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
