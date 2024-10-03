import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

function Publications() {
  return (
    <section id="pub" className="flex flex-col min-h-screen" >
      <Header />
      <main className="flex-grow">
      <div>
        <p>Publications</p>
      </div>
      </main>

      <Footer />
    </section>
  );
}

export default Publications;
