import React, { useState, useEffect } from "react";
import Logo from "../../assets/Images/ERC Logo 2.png";
import  Element  from "../../assets/Icons/Element";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    console.log("Menu toggled", !menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-screen bg-[#043873] text-white overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 relative z-10">
        <div className="flex gap-5">
          <button className="text-white cursor-pointer" onClick={toggleMenu}>
            {/* Menu Icon */}
            <svg
              className={`w-8 h-8 -mt-10 transition-transform duration-500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <img
            src={Logo}
            alt="Profile"
            className={`w-22 h-24 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer -mt-10 transition-all duration-500 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          onClick={() => alert("Login clicked")}
        >
          Login
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-start px-8 space-y-6 ml-10 mt-20 relative z-10">
        <h1 className={`text-8xl font-bold pt-10 transition-all duration-1000 ${
          animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          Econometer
        </h1>
        <h1 className={`text-6xl font-bold transition-all duration-1000 delay-300 ${
          animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          Research Center Consultants
        </h1>
        <p className={`text-lg max-w-xl transition-all duration-1000 delay-500 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          ERC's mission is to work in the direction of accelerating the time to
          value and maximize the investment of our clients around the world.
        </p>
        <button
          className={`mt-4 bg-[#F64D05] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer opacity-100 h-20 w-18 transition-all duration-1000 delay-700 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          onClick={() => alert("Get in touch clicked")}
        >
          Get in touch →
        </button>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Element />
      </div>

    </div>
  );
};

export default Header;