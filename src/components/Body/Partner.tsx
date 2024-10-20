import React from "react";
import cgap from "../../assets/Logos/cgap.png"
import adb1 from "../../assets/Logos/adb-new.png"
import adb from "../../assets/Logos/adb.svg"
import AFD from "../../assets/Logos/logo_0.png"
import FSD from "../../assets/Logos/fsd.png"
import cordaid from "../../assets/Logos/cordaid.png"

interface Organization {
  name: string;
  logo: string;
  link: string;
}

const organizations: Organization[] = [
  {
    name: "ADB",
    logo: adb1,
    link: "https://www.adb.org",
  },
  {
    name: "AFD",
    logo: AFD,
    link: "https://www.afd.fr",
  },
  {
    name: "African Development Bank",
    logo: adb,
    link: "https://www.afdb.org",
  },
  {
    name: "CGAP",
    logo: cgap,
    link: "https://www.cgap.org",
  },
  {
    name: "Cordaid",
    logo: cordaid,
    link: "https://www.cordaid.org",
  },
  {
    name: "FSD Africa",
    logo: FSD,
    link: "https://www.fsdafrica.org",
  },
];

const OrganizationGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 text-[#043873]">
        <h2 className="text-lg md:text-xl font-semibold mb-6 sm:text-sm lg:text-lg">
          Our Partners:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <a
              href={org.link}
              key={org.name}
              className="group block p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={org.logo}
                alt={`${org.name} logo`}
                className="w-full h-32 object-contain mb-4"
              />
              <span className="inline-block text-orange-500 group-hover:text-orange-600">
                ➜
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationGrid;
