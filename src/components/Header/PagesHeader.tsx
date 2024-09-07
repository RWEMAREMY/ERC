import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Images/ERC Logo 2.png";
import Element from "../../assets/Icons/Element";
import Layout from "../../pages/Layout";
import { useLocation, useNavigate } from "react-router-dom";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/login');
  }

  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname.slice(1);

    switch (path) {
      case "":
        return "Home";
      case "about":

        return "About us";

      case "publications":
        return "Publications";
      case "reachus":
        return "Reach us";
      case "services":
        return "Services";
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative bg-[#043873] text-white overflow-hidden h-3/4">
      {/* Header */}
      <header className="flex justify-between items-center p-4 relative z-26">
        <div className="flex gap-5">
          <button className="text-white cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className={`w-8 h-8 transition-transform duration-500 ${
                  animate ? "translate-x-0" : "-translate-x-full"
                }`}
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
            )}
          </button>
          <img
            src={Logo}
            alt="Profile"
            className={`w-22 h-24 transition-opacity duration-1000 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative pl-8">
            <button
              className={`hover:bg-[#F64D05] text-white p-2 rounded-full transition-all duration-500 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            {searchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-10 top-full -mt-10"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white text-black p-2 rounded-full focus:outline-none"
                  placeholder="Search..."
                />
              </form>
            )}
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-500 ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </header>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-4/6 bg-[#043873] z-20 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center p-4 relative z-26">
          <div className="flex gap-5">
            <button className="text-white cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className={`w-8 h-8 transition-transform duration-500 ${
                    animate ? "translate-x-0" : "-translate-x-full"
                  }`}
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
              )}
            </button>
            <img
              src={Logo}
              alt="Profile"
              className={`w-22 h-24 transition-opacity duration-1000 ${
                animate ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </header>
        <Layout />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center px-8 space-y-6 ml-10 mt-20 relative z-10">
        <h1
          className={`text-8xl font-bold pt-10 transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          {getPageTitle()}
        </h1>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Element />
      </div>
    </div>
  );
};

export default Header;
