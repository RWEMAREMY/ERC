import React, { useState } from "react";
import Values from "./Values"
import MissionVision from "./MissionVision";
import MiddleFive from "./MiddleFive";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <main className="flex-grow items-center justify-center pt-10 space-y-10">
      <section className="py-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Introduction
          </h2>
          {/* Subtitle */}
          <p className="text-gray-500 mb-8">
            We provide both technical assistance and statistical consultancy to
            our clients.
          </p>
          {/* Paragraphs */}
          <div className="space-y-8">
            <p className="text-left text-gray-700 leading-relaxed">
              Statistical research underpins many of today’s scientific
              breakthroughs in all areas of life. Select is dedicated to
              remaining at the forefront when it comes to applying statistical
              analysis to improve understanding and deliver practical benefits
              and solutions. Whether you are a business developing new products,
              or an academic embarking on a new area of research, our team can
              help you develop novel statistical approaches to suit your needs.
              Our analysts’ unique combination of research and consultancy
              experience will help you deliver innovative solutions and stand
              out from your competitors.
            </p>
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
              {activeTab === "mission" && (
                <MissionVision />
              )}

              {activeTab === "team" && (
                <MiddleFive />
              )}

              {activeTab === "values" && (
                <Values />
              )}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

export default AboutUs;
