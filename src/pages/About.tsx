import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow items-center justify-center pt-10">
      <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto">
            Here you can add your about us content. This text will be centered
            on the page with a maximum width for better readability.
          </p>
      <main className="flex-grow bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto py-16 px-4">
          
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              {["mission", "team", "values"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 px-6 text-lg font-semibold ${
                    activeTab === tab ? "bg-blue-500 text-white rounded-lg ml-5 mr-5 hover:text-xl" : "text-blue-500 hover:bg-orange-200 rounded-lg pl-10 hover:text-xl"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="p-8">
              {activeTab === "mission" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At TechInnovate, we're on a mission to revolutionize the digital landscape. We create cutting-edge solutions that empower businesses and individuals, bridging the gap between imagination and reality through innovative technology.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our goal is to be at the forefront of technological advancements, constantly pushing boundaries and setting new standards in the industry.
                  </p>
                </div>
              )}
              
              {activeTab === "team" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Team</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We are a diverse group of passionate technologists, designers, and problem-solvers. With expertise spanning various domains, our team is committed to delivering excellence in every project we undertake.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {["John Doe", "Jane Smith", "Mike Johnson"].map((name) => (
                      <div key={name} className="text-center">
                        <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-2"></div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-500">Team Member</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === "values" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Values</h2>
                  <ul className="space-y-4">
                    {["Innovation", "Integrity", "Collaboration", "Customer-Centric"].map((value) => (
                      <li key={value} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <div>
                          <h3 className="font-semibold text-lg">{value}</h3>
                          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;