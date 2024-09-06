import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <main className="flex-grow items-center justify-center pt-10">
      <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto">
            Here you can add your about us content. This text will be centered
            on the page with a maximum width for better readability.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
