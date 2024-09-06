import Logo from "../../assets/Images/ERC Logo 2.png";
import Element from "../../assets/Icons/Element";

const LoginComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#043873] gap-20">
      <img
        src={Logo}
        alt="Profile"
        className="w-22 h-24 transition-opacity duration-1000"
      />
      <Element />
      {/* Outer container */}
      <div className="bg-transparent border border-gray-300 rounded-lg p-8 w-full max-w-md relative h-800">
        {/* Login form */}
        <div className="mt-2 text-center">
          <h2 className="text-2xl text-white font-bold mb-2">login</h2>
          <p className="text-gray-300">Admin</p>
        </div>

        <form className="space-y-14 mt-8 p-8">
          {/* Email input */}
          <div className="relative">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-white outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password input */}
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
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-white outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
            <a
              href="#"
              className="absolute text-xs text-gray-300 right-0 -bottom-6"
            >
              Forgot password
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Back button */}
      <div className="absolute bottom-20 left-20">
        <button className="border border-gray-300 text-white py-1 px-4 rounded-lg" onClick={() => alert('Clicked!')}>
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
