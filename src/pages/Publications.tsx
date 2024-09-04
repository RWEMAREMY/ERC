import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";

function Publications() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <main className="flex-grow">
      <div>
        <p>Publications</p>
      </div>
      </main>

      <Footer />
    </div>
  );
}

export default Publications;
