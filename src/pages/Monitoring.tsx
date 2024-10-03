import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import globe from "../assets/Images/globe.jpg";

function Monitoring() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="space-y-10">
        <section className="bg-gray-100 py-12">
          <div className="flex max-w-6xl mx-auto px-4 md:px-0 gap-10">
            <h2 className="text-md text-[#043873]">
              Econometer Research Center supports governments and development
              partners generate and analyze data for research, impact
              assessments and monitoring, evaluation, and learning.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Econometer Research Center works with governments, universities,
              <span className="text-gray-600 underline cursor-pointer">
                {" "}
                research institutions
              </span>
              , and development partners in the design and delivery of
              quantitative research. Our team supports the design of survey
              instruments, sampling framework, and delivery of desk and
              field-based
              <span className="text-gray-600 underline cursor-pointer">
                {" "}
                data collection.
              </span>
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#043873]">
              <h3 className="text-xl font-semibold mb-6">
                Our clients include:
              </h3>
              <ul className="list-disc space-y-2">
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

              <ul className="list-disc space-y-2">
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
        </section>

        <section className="relative">
          <img
            src={globe}
            alt="Data Collection Background"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <h2 className="text-white text-3xl text-center px-4">
              Econometer Research Center specializes in quantitative and
              qualitative data collection for development in East Africa.
            </h2>
          </div>
        </section>

        <section className="flex justify-center items-center text-[#043873] py-8 gap-20 p-8">
            <div className="flex bg-[#043873] items-center justify-center rounded w-1/2 h-56">
              <h3 className="text-xl text-white">How we can support you</h3>
            </div>
            <div>
              <ul className="list-disc list-inside space-y-2 text-[#043873] font-bold">
                <li>
                  Baseline and endline surveys for evaluations and impact
                  evaluations
                </li>
                <li>
                  Business perception surveys including for taxpayers and
                  investors
                </li>
                <li>
                  Smallholder farmer surveys and focus group discussions for
                  value chain analysis
                </li>
                <li>
                  Impact modeling and assessments for development partners
                </li>
              </ul>
            </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Monitoring;
