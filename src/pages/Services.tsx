import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

interface ServiceContent {
  title: string;
  details: string[];
}

const Services: React.FC = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [serviceContent, setServiceContent] = useState<ServiceContent | null>(
    null
  );

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setSelectedService(location.state.selectedService);
      fetchServiceContent(location.state.selectedService);
    }
  }, [location]);

  const fetchServiceContent = async (slug: string) => {
    const mockFetch = async (slug: string): Promise<ServiceContent> => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const content: { [key: string]: ServiceContent } = {
        advice: {
          title: "Advice",
          details: [
            "You may already have in-house data expertise, but does your team fully understand how to carry out the statistical tasks needed to turn data into actionable insights you can trust? Clients often come to us for support in choosing the most appropriate analysis technique or statistical test, or to understand the best ways of presenting their results. Statistical analysis has the potential to draw clearer understanding from your data than many people realise. Our Advice service provides access to expert statistical guidance. Your staff can then understand, perform and interpret the right statistical analyses and help you get the most out of your data.",
            "We also advise you on how you can present the results of your analyses or tests in more informative and engaging ways - helping you turn data and analysis into insights you can easily put into practice. Clients from a wide range of sectors benefit from this advice including, among others, business, environmental and medical organisations. Advice can be provided on an ad-hoc basis, while some clients prefer an on-going support contract because they have a regular need. And, of course, this type of advice can always be built into a wider Training service.",
            "By having access to professional advice, at the right time, you can significantly enhance your ability to interpret and understand your data accurately.",
          ],
        },
        analysis: {
          title: "Analysis",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        dataCollectionManagement: {
          title: "Data Collection & Management",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        dataMining: {
          title: "Advice",
          details: [
            "You may already have in-house data expertise, but does your team fully understand how to carry out the statistical tasks needed to turn data into actionable insights you can trust? Clients often come to us for support in choosing the most appropriate analysis technique or statistical test, or to understand the best ways of presenting their results. Statistical analysis has the potential to draw clearer understanding from your data than many people realise. Our Advice service provides access to expert statistical guidance. Your staff can then understand, perform and interpret the right statistical analyses and help you get the most out of your data.",
            "We also advise you on how you can present the results of your analyses or tests in more informative and engaging ways - helping you turn data and analysis into insights you can easily put into practice. Clients from a wide range of sectors benefit from this advice including, among others, business, environmental and medical organisations. Advice can be provided on an ad-hoc basis, while some clients prefer an on-going support contract because they have a regular need. And, of course, this type of advice can always be built into a wider Training service.",
            "By having access to professional advice, at the right time, you can significantly enhance your ability to interpret and understand your data accurately.",
          ],
        },
        design: {
          title: "Design",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        innovationResearch: {
          title: "Innovation & Research",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        modelling: {
          title: "Modelling",
          details: [
            "You may already have in-house data expertise, but does your team fully understand how to carry out the statistical tasks needed to turn data into actionable insights you can trust? Clients often come to us for support in choosing the most appropriate analysis technique or statistical test, or to understand the best ways of presenting their results. Statistical analysis has the potential to draw clearer understanding from your data than many people realise. Our Advice service provides access to expert statistical guidance. Your staff can then understand, perform and interpret the right statistical analyses and help you get the most out of your data.",
            "We also advise you on how you can present the results of your analyses or tests in more informative and engaging ways - helping you turn data and analysis into insights you can easily put into practice. Clients from a wide range of sectors benefit from this advice including, among others, business, environmental and medical organisations. Advice can be provided on an ad-hoc basis, while some clients prefer an on-going support contract because they have a regular need. And, of course, this type of advice can always be built into a wider Training service.",
            "By having access to professional advice, at the right time, you can significantly enhance your ability to interpret and understand your data accurately.",
          ],
        },
        prediction: {
          title: "Prediction",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        qualitativeAnalysis: {
          title: "Qualitative Analysis",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
        reporting: {
          title: "Reporting",
          details: [
            "You may already have in-house data expertise, but does your team fully understand how to carry out the statistical tasks needed to turn data into actionable insights you can trust? Clients often come to us for support in choosing the most appropriate analysis technique or statistical test, or to understand the best ways of presenting their results. Statistical analysis has the potential to draw clearer understanding from your data than many people realise. Our Advice service provides access to expert statistical guidance. Your staff can then understand, perform and interpret the right statistical analyses and help you get the most out of your data.",
            "We also advise you on how you can present the results of your analyses or tests in more informative and engaging ways - helping you turn data and analysis into insights you can easily put into practice. Clients from a wide range of sectors benefit from this advice including, among others, business, environmental and medical organisations. Advice can be provided on an ad-hoc basis, while some clients prefer an on-going support contract because they have a regular need. And, of course, this type of advice can always be built into a wider Training service.",
            "By having access to professional advice, at the right time, you can significantly enhance your ability to interpret and understand your data accurately.",
          ],
        },
        review: {
          title: "Review",
          details: [
            "Data analysis and interpretation",
            "Process efficiency analysis",
            "Market trend analysis",
            "Competitive landscape assessment",
          ],
        },
      };

      return (
        content[slug] || {
          title: "Service Not Found",
          description: "The requested service information is not available.",
          details: [],
        }
      );
    };

    const content = await mockFetch(slug);
    setServiceContent(content);
  };

  if (!selectedService || !serviceContent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p>Please select a service from the menu to view its details.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[100%] justify-center">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{serviceContent.title}</h1>
        <ul className="list-disc pl-5 space-y-6">
          {serviceContent.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
