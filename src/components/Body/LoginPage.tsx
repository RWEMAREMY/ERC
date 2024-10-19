import Logo from "../../assets/Images/ERC Logo 2.png";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#043873] gap-12 p-10">
      <img
        src={Logo}
        alt="Profile"
        className="w-22 h-24 transition-opacity duration-1000"
      />
      <div className="bg-transparent border border-gray-300 rounded-lg p-8 w-full max-w-md relative h-800">
        <div className="mt-2 text-center">
          <h2 className="text-2xl text-white font-bold mb-2">login</h2>
          <p className="text-gray-300">Admin</p>
        </div>

        <form className="space-y-14 mt-8 p-8">
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
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="flex bottom-14 -left-20">
        <button
          className="border border-gray-300 text-white py-1 px-4 rounded-lg"
          onClick={handleNavigate}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
