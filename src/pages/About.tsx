import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/Body/AboutUs";

function About() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;