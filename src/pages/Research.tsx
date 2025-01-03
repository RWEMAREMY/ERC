import React from "react";
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

const MarketResearch: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="space-y-10">
        <section className="bg-gray-100 py-12">
          <div className="flex max-w-6xl mx-auto px-4 gap-10 md:px-0 flex-col md:flex-row">
            <h2 className="text-lg md:text-xl lg:text-2xl text-[#043873]">
              At ERC, we use a market systems approach to address problems by
              identifying root causes, not just symptoms, through the strategic
              use of data
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base lg:text-lg">
              In a region where data is limited, it is essential for
              policymakers and businesses to access accurate and timely
              information. In line with our vision of empowering stakeholders
              through data-driven insights, Econometer Research Center uses a
              market systems approach to deliver comprehensive primary market
              research services. By examining the complex dynamics within the
              market, we help businesses across Africa gain a deeper
              understanding of their environment, empowering them to make
              informed decisions and foster sustainable growth.
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="flex text-orange-500 bg-[#043873]  rounded text-center items-center text-sm md:text-xl lg:text-2xl p-4">
              Econometer Research Center can help your business:
            </h3>
            </div>

            <div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 text-sm md:text-base lg:text-lg">
                <li>Keep track of trends in the market</li>
                <li>Identify paths to expansion</li>
                <li>Remain relevant in a challenging and growing market</li>
              </ul>
            </div>

            <div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 text-sm md:text-base lg:text-lg">
                <li>Deliver effective growth campaigns</li>
                <li>Optimize your products and results</li>
                <li>Grow in challenging and dynamic markets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
            <h3 className="flex bg-[#043873] rounded text-center items-center text-lg md:text-xl lg:text-2xl text-orange-500   p-4">
              Our market research services include:
            </h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base lg:text-lg">
              <li>Consumer surveys focusing on demand and supply</li>
              <li>Market Segmentation and profiling Leaning needs assessment</li>
              <li>Market diagnostic studies</li>
              <li>Consumer Behaviour Analysis</li>
            </ul>

            <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base lg:text-lg">
              <li>Brand Health Tracking</li>
              <li>Pricing Research</li>
              <li>Public Opinion Research</li>
              <li>Economic Impact Studies</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-700 text-sm md:text-base lg:text-lg">
              At Econometer Research Center, we believe that informed
              decision-making is essential for success
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MarketResearch;
