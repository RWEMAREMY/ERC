import React from "react";
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";



const Services: React.FC = () => {

  return (
    <div className="flex flex-col w-[100%] justify-center">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p>Please select a service from the menu to view its details.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
