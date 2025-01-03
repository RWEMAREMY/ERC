import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import globe from "../assets/Images/globe.jpg";
// import Partner from "../components/Body/Partner";
function Monitoring() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="space-y-10 p-4">
        <section className="bg-gray-100 py-12">
          <div className="flex max-w-6xl mx-auto px-4 md:px-0 gap-10 flex-col md:flex-row">
            <h2 className="text-sm md:text-md lg:text-lg text-[#043873]">
              Across disciplines and around the world, ERC helps development
              organizations and their beneficiaries ensure program
              accountability, measure impact, and use best practices and
              insights to improve program effectiveness.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl md:text-sm lg:text-xl">
              At ERC, we offer end-to-end Monitoring and Evaluation (M&E)
              services designed to help you optimize the success and impact of
              your projects and programs. Whether you're looking to enhance
              performance, measure outcomes, or develop a sustainable long-term
              strategy, our tailored solutions provide actionable insights at
              every stage of your initiative.
            </p>
          </div>
        </section>

        {/* <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#043873]">
              <h3 className="text-lg md:text-xl font-semibold mb-6 sm:text-sm lg:text-lg">
                Our clients include:
              </h3>
              <ul className="list-disc space-y-2 text-xs md:text-sm lg:text-base">
                <li>Government of Rwanda</li>
                <li>FCDO</li>
                <li>SIDA</li>
                <li>
                  <span className="text-[#043873] underline cursor-pointer">
                    USAID
                  </span>
                </li>
                <li>University of Sussex</li>
                <li>BDO</li>
                <li>
                  <span className="text-[#043873] underline cursor-pointer">
                    McKinsey
                  </span>{" "}
                  and Company
                </li>
                <li>TradeMark East Africa</li>
              </ul>

              <ul className="list-disc space-y-2 text-xs md:text-sm lg:text-base">
                <li>
                  Institute of Development Studies{" "}
                  <span className="text-[#043873] underline cursor-pointer">
                    (IDS)
                  </span>
                </li>
                <li>
                  International Center for Tax and Development{" "}
                  <span className="text-[#043873] underline cursor-pointer">
                    (ICTD)
                  </span>
                </li>
                <li>IFC World Bank</li>
                <li>Enable</li>
                <li>RTI</li>
                <li>DAI</li>
                <li>Palladium</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section className="relative">
          <img
            src={globe}
            alt="Data Collection Background"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <h2 className="text-white text-lg sm:text-sm md:text-lg lg:text-xl text-center px-4">
              Econometer Research Center specializes in quantitative and
              qualitative data collection for development.
            </h2>
          </div>
        </section>

        <section className="flex justify-center items-center text-[#043873] py-8 gap-10 p-4 flex-col md:flex-row">
          <div className="flex bg-[#043873] items-center justify-center rounded w-full md:w-1/2 h-56 p-4">
            <h3 className="text-xl sm:text-md md:text-xl text-orange-500 ">
              How we can support you?
            </h3>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2 text-[#043873] font-bold text-xs md:text-sm lg:text-base">
              <li>
                Baseline and endline surveys.
              </li>
              <li>
                Impact assessments.
              </li>
              <li>Lesson learnt.</li>
              <li>Gender & youth mainstreaming.</li>
              <li>Randomized control trials (RCT).</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Monitoring;
