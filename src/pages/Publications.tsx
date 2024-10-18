// src/pages/Publications.tsx
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import random from "../assets/Images/1 10.png"
import random1 from "../assets/Images/nisr.jpeg"
import random2 from "../assets/Images/consultancy.jpeg"

function Publications() {
  const handleDownload = (url: string) => {
    if (window.confirm("Do you want to download this document?")) {
      window.location.href = url; // Redirect to the document URL for download
    }
  };

  return (
    <section id="pub" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Card 1 */}
            <div className="bg-blue-200 hover:bg-orange-300 hover:scale-105 duration-300 border rounded-lg shadow-lg p-4">
            <img src={random} alt="Random" className="mb-2 rounded" />
              <h3 className="font-semibold">ERC Profile</h3>
              <p className="text-sm">A brief description of the ERC Profile document.</p>
              <button 
                onClick={() => handleDownload("https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing")} 
                className="text-black-500 underline"
              >
                Download
              </button>

            </div>
            {/* Card 2 */}
            <div className="bg-blue-300 hover:bg-orange-300 hover:scale-105 duration-300 border rounded-lg shadow-lg p-4">
            <img src={random1} alt="random1" className="mb-2 rounded pb-5" />
              <h3 className="font-semibold">Third Document</h3>
              <p className="text-sm">A brief description of the Third Document.</p>
              <button 
                onClick={() => handleDownload("/path/to/your/Third-Document.pdf")} 
                className="text-black-500 underline"
              >
                Download
              </button>
              <embed 
                src="/path/to/your/Third-Document.pdf" 
                type="application/pdf" 
                width="10%" 
                height="20px" 
                className="rounded" 
              />
            </div>
            {/* Card 3 */}
            <div className="bg-blue-300 hover:bg-orange-300 hover:scale-105 duration-300 border rounded-lg shadow-lg p-4">
            <img src={random2} alt="random2" className="mb-2 rounded" />
              <h3 className="font-semibold">Fourth Document</h3>
              <p className="text-sm">A brief description of the Fourth Document.</p>
              <button 
                onClick={() => handleDownload("/path/to/your/Fourth-Document.pdf")} 
                className="text-black-500 underline"
              >
                Download
              </button>
              <embed 
                src="/path/to/your/Fourth-Document.pdf" 
                type="application/pdf" 
                width="10%" 
                height="20px" 
                className="rounded" 
              />
            </div>
            {/* Card 4 */}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Publications;