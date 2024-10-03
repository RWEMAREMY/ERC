import Footer from "../components/Footer/Footer";
import Header from "../components/Header/PagesHeader";
import magnifier from "../assets/Images/magnifier.jpg";
import food from "../assets/Images/food.jpg";

function Program() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="font-sans text-gray-800">
        <nav className="bg-gray-50 p-4 flex justify-center space-x-6 border-b">
          <a href="#" className="text-[#0872b3] hover:text-[#043873]">
            Young Impact Associate
          </a>
          <a href="#" className="text-[#0872b3] hover:text-[#043873]">
            The Fortified Wholegrain Initiative
          </a>
        </nav>

        <header className="flex items-center justify-center bg-white p-8 text-center">
          <h1 className="text-xl text-[#043873]">
            Econometer Research Center advises governments and development
            partners in programme and strategy design and implementation.
          </h1>
        </header>

        <section className="relative">
          <img src={magnifier} alt="Graph and data" className="w-1/2 h-1/2" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold text-center px-4">
              Ultimately, we work to grow the voice and opportunities for the
              population we serve with a focus on those who are most
              disadvantaged.
            </p>
          </div>
        </section>

        <section className="p-8 bg-white">
          <h2 className="text-3xl text-[#043873] pb-12 pt-12">
            Young Impact Associate Programme
          </h2>
          <p className="mt-4 text-lg text-[#043873]">
            The YIA fellowship is a program of Econometer Research Center work
            as an Impact Partner Organization (IPO) for The Mastercard
            Foundation in Rwanda. The Foundation aims to create 30 million
            dignified and fulfilling jobs for young people in Africa by 2030.
          </p>

          <div className="flex justify-between items-center gap-10 p-10">
            <button className="flex bg-[#043873] items-center justify-center rounded w-1/2 h-40 text-white ">
              Our mission
            </button>
            <ul className="list-disc list-inside">
              <li>
                {" "}
                <a href="#" className="text-[#043873] underline">
                  The Young Impact Associate (YIA)
                </a>{" "}
                fellowship is a paid fellowship focused on laying the
                foundations for a successful career in the field of
                <a href="#" className="text-[#043873] underline">
                  Monitoring, Evaluation and Learning (MEL).
                </a>
              </li>
              <li>
                YIAs are exposed to the key discipline of impact evaluation, and
                are involved in everything from project management to data
                collection and analysis.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="font-sans text-gray-800 p-8 bg-gray-50">
        <section className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-[#043873]">
            Fortified Wholegrain Initiative
          </h2>
          <p className="mt-4 text-lg">
            We're working to gradually supply FWG flour and derived products to
            all schools, and eventually consumer markets in Rwanda.
          </p>
        </section>

        <div className="flex justify-between items-center gap-10 p-10">
            <button className="flex bg-[#043873] items-center justify-center rounded w-1/2 h-40 text-white ">
              Our mission
            </button>
            <ul className="list-disc list-inside">
              <li>
              We are on a mission to provide nutrition-rich meals to 4 million schoolchildren in Rwanda. In 2020, the Fortified Whole Grain (FWG) Initiative was introduced in Rwanda by the Rockefeller Foundation, with Vanguard Economics as its implementing partner.
              </li>
            </ul>
          </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src={food}
            alt="Image 1"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={food}
            alt="Image 2"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={food}
            alt="Image 3"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={food}
            alt="Image 4"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={food}
            alt="Image 5"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={food}
            alt="Image 6"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Program;
