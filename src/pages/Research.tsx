import React from "react";
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

const MarketResearch: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="space-y-10">
        <section className="bg-gray-100 py-12">
          <div className="flex max-w-6xl mx-auto px-4 gap-10 md:px-0">
            <h2 className="text-xl text-[#043873]">
              Econometer Research Center can help you understand your market and
              grow your business in East Africa.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              In a region where data is scarce, it is essential that
              <span className="text-gray-600 underline cursor-pointer">
                {" "}
                policy makers{" "}
              </span>
              and businesses have access to accurate and timely information on
              consumers,
              <span className="text-gray-600 underline cursor-pointer">
                {" "}
                distribution channels
              </span>
              , retailers, and competitors. Econometer Research Center provides
              <span className="text-gray-600 underline cursor-pointer">
                {" "}
                primary market research services
              </span>{" "}
              to businesses in East Africa.
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-600">
                Econometer Research Center can help your business:
              </h3>
            </div>

            <div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Keep track of trends in the market</li>
                <li>Identify paths to expansion</li>
                <li>Remain relevant in a challenging and growing market</li>
              </ul>
            </div>

            <div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Deliver effective growth campaigns</li>
                <li>Optimize your products and results</li>
                <li>Grow in challenging and dynamic markets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          
              <h3 className="flex bg-[#043873] rounded text-center items-center  text-xl text-white">
                Our market research services include:
              </h3>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Consumer focus groups</li>
                <li>Consumer insight surveys</li>
                <li>Product / Service Use Research</li>
                <li>Immersive observation-based research</li>
                <li>Buyer Persona Research</li>
                <li>Market Segmentation Research</li>
              </ul>

              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Pricing Research</li>
                <li>Competitive Analysis</li>
                <li>Customer Satisfaction and Loyalty Research</li>
                <li>Brand Awareness Research</li>
                <li>Campaign research</li>
                <li>Size of market research</li>
              </ul>
          
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-700 text-lg">
              Econometer Research Center has provided market research services
              to global FMCG brands, regional manufacturers and food processors,
              global consultancy services, and investors in the services sector.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MarketResearch;
