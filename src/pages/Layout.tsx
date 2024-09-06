import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  const handlePublicationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToPublications: true } });
  };

  return (
    <>
      <div className="p-10 text-white">
        <nav className="mt-8 ml-8">
          <ul className="space-y-7">
            <li>
              <Link to="/" className="text-2xl font-bold hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-2xl font-bold hover:text-blue-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={toggleServices}
                className="text-2xl font-bold hover:text-blue-200 flex items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-2 transform ${
                    servicesOpen ? "rotate-180" : ""
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
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {servicesOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/services"
                      className="text-xl hover:text-blue-200"
                    >
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-xl hover:text-blue-200"
                    >
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-xl hover:text-blue-200"
                    >
                      Service 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#publications"
                onClick={handlePublicationsClick}
                className="text-2xl font-bold hover:text-blue-200"
              >
                Publications
              </a>
            </li>
            <li>
              <Link
                to="/reachus"
                className="text-2xl font-bold hover:text-blue-200"
              >
                Reach Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
