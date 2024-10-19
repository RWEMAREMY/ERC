import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Images/ERC Logo 2.png";
import Layout from "../../pages/Layout";
import { useNavigate, NavLink } from "react-router-dom";
import globe from "../../assets/GIF/globeGIF.gif";
import BookmarkButton from "../Body/BookmarkButton";

const useTypingEffect = (text: string, typingSpeed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 2000);
    }
  }, [text, currentIndex, typingSpeed]);

  return displayedText;
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  const paragraphText =
    "ERC's mission is to work in the direction of accelerating the time to value and maximize the investment of our clients around the world.";
  const displayedText = useTypingEffect(paragraphText, 200);

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

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      to: "/services",
      label: "Services",
      subItems: [
        { to: "/research", label: "Market Research" },
        { to: "/monitoring", label: "Monitoring, Evaluation & Learning" },
        { to: "/policy", label: "Advise policy Makers" },
        { to: "/program", label: "Programmatic Work" },
      ],
    },
    { to: "/publications", label: "Publications" },
    { to: "/reachus", label: "Connect with us" },
  ];

  return (
    <div className="relative h-auto bg-[#043873] text-white overflow-hidden pb-10">
      <header className="flex justify-between items-center p-4 relative z-20">
        <div className="flex gap-5">
          <button
            className="text-[#DF4E10] cursor-pointer"
            onClick={toggleMenu}
          >
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

        <nav className={`flex items-center hidden md:block`}>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.to} className="relative">
                {item.subItems ? (
                  <div>
                    <button
                      className="text-white hover:text-[#DF4E10] transition-colors"
                      onClick={() =>
                        setServicesDropdownOpen(!servicesDropdownOpen)
                      }
                    >
                      {item.label}
                    </button>
                    {servicesDropdownOpen && (
                      <ul className="absolute left-0 mt-2 py-2 w-48 bg-[#043873] rounded-md shadow-xl">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.to}>
                            <NavLink
                              to={subItem.to}
                              className="block px-4 py-2 text-sm text-white hover:bg-[#0A4D8F] hover:text-[#DF4E10]"
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-white hover:text-[#DF4E10] transition-colors ${
                        isActive ? "font-bold" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden ${servicesDropdownOpen ? "block" : "hidden"}`}
        >
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className="text-white hover:text-[#DF4E10]"
          >
            Services
          </button>
          {servicesDropdownOpen && (
            <ul className="flex flex-col bg-[#043873] rounded-md shadow-xl mt-2">
              {navItems
                .find((item) => item.label === "Services")
                ?.subItems?.map((subItem) => (
                  <li key={subItem.to}>
                    <NavLink
                      to={subItem.to}
                      className="block px-4 py-2 text-sm text-white hover:bg-[#0A4D8F] hover:text-[#DF4E10]"
                    >
                      {subItem.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative pl-8">
            <button
              className={`hover:bg-[#FFFFFF] text-[#DF4E10] text-white p-2 rounded-full transition-all duration-500 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              } hidden md:block`}
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
                className={`absolute right-10 top-full -mt-10`}
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
            className={`bg-[#FFFFFF] hover:bg-[#DF4E10] text-[#DF4E10] hover:text-[#FFFFFF] font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-500 ${
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

      <div
        className={`fixed top-[104px] left-0 w-full h-full bg-[#043873] z-20 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        <Layout />
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center items-start px-4 sm:px-8 space-y-4 sm:space-y-6 mt-8 sm:mt-20 relative z-10">
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold transition-all duration-1000">
            Econometer
          </h1>
          <h2 className="text-3xl sm:text-xl md:text-[2.5rem] font-bold transition-all duration-1000 border-b-4 rounded-b-sm">
            Research Center
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#DF4E10] font-bold max-w-xl h-20 typing-cursor">
            {displayedText}
          </p>
          <div className="flex flex-col sm:flex-row justify-between w-full mt-4 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Button that scrolls to target content */}
            <BookmarkButton
              onClick={() =>
                document
                  .getElementById("targetContent")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
        <div>
          <img
            src={globe}
            alt="gif"
            className={`w-full h-full pr-20 hidden md:block mt-6`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
