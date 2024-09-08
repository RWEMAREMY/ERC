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
    navigate("/", { state: { scrollToPublications: true } });
  };

  const services = [
    { name: "Advice", slug: "advice" },
    { name: "Analysis", slug: "analysis" },
    { name: "Data Collection & Management", slug: "dataCollectionManagement" },
    { name: "Data Mining", slug: "dataMining" },
    { name: "Design", slug: "design" },
    { name: "Innovation & Research", slug: "innovationResearch" },
    { name: "Modelling", slug: "modelling" },
    { name: "Prediction", slug: "prediction" },
    { name: "Qualitative Analysis", slug: "qualitativeAnalysis" },
    { name: "Reporting", slug: "reporting" },
    { name: "Review", slug: "review" }
  ];

  const handleServiceClick = (slug: string) => {
    navigate(`/services`, { state: { selectedService: slug } });
    setServicesOpen(false);
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
            <li className="relative">
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
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-[20%] -top-36 ml-4 p-6 rounded-lg shadow-lg w-[800px]">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Our Services</h3>
                  <ul className="grid grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <li key={index} className="mb-2">
                        <button
                          onClick={() => handleServiceClick(service.slug)}
                          className="text-lg hover:text-blue-300 transition-colors duration-200"
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
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
