import Header from "../components/Header/Header";
import MiddleOne from "../components/Body/MiddleOne";
import MiddleTwo from "../components/Body/MiddleTwo";
import MiddleThree from "../components/Body/MiddleThree";
import MiddleFour from "../components/Body/MiddleFour";
import MiddleFive from "../components/Body/MiddleFive";
import MiddleSix from "../components/Body/MiddleSix";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="font-sans">
      <Header />
      <MiddleOne />
      <MiddleTwo />
      <MiddleThree />
      <MiddleFour />
      <MiddleFive />
      <MiddleSix />
      <Footer />
    </div>
  );
}

export default Home;
