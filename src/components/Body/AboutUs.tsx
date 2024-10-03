import { useState } from "react";
import Values from "./Values";
import MissionVision from "./MissionVision";
import MiddleFive from "./MiddleFive";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <main className="flex-grow items-center justify-center pt-10 space-y-10">
      <section className="py-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-500 mb-8">
            We provide both technical assistance and statistical consultancy to
            our clients.
          </p>
          {/* Paragraphs */}
          <div className="space-y-8">
            <p className="text-left text-gray-700 leading-relaxed">
              Econometer Research Center LTD (ERC) is a rapidly growing
              Africa-based research and advisory firm, established in 2020.
              Specializing in research, impact evaluation and policy advisory.
              ERC delivers high-quality research and strategic services to
              governments, businesses, and non-profit organizations. ERC uses
              innovative tools and rigorous methodologies to drive
              transformative outcomes across Africa.
            </p>
            <h2 className="text-left">We specialize in:</h2>
            <div className="flex gap-10">
              <p className="text-left text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside">
                  <li>Monitoring & Evaluation Framework Design</li>
                  <li>Policy Analysis</li>
                  <li>Professional Training</li>
                </ul>
              </p>
              <p className="text-left text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside">
                  <li>Feasibility and Diagnostic Studies</li>
                  <li>Data Warehousing Services</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <main className="flex-grow ">
        <div className="container mx-auto py-16 px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              {["mission", "team", "values"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 px-6 text-lg font-semibold ${
                    activeTab === tab
                      ? "bg-blue-500 text-white rounded-lg ml-5 mr-5 hover:text-xl"
                      : "text-blue-500 hover:bg-orange-200 rounded-lg pl-10 hover:text-xl"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === "mission" && <MissionVision />}

              {activeTab === "team" && <MiddleFive />}

              {activeTab === "values" && <Values />}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

export default AboutUs;
