// src/pages/Publications.tsx
import { useState } from "react"; // Import useState for pagination
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import random from "../assets/Images/1 10.png";
import random1 from "../assets/Images/nisr.jpeg";
import random2 from "../assets/Images/consultancy.jpeg";

function Publications() {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 8; // Number of items per page

  const documents = [
    {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    },
    {
      img: random1,
      title: "Third Document",
      description: "A brief description of the Third Document.",
      url: "/path/to/your/Third-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random2,
      title: "Fourth Document",
      description: "A brief description of the Fourth Document.",
      url: "/path/to/your/Fourth-Document.pdf",
    },
    {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    }, {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    }, {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    }, {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    }, {
      img: random,
      title: "ERC Profile",
      description: "A brief description of the ERC Profile document.",
      url: "https://drive.google.com/file/d/1TmfWI9r9j6V0ZcauCmc3p-4Na0kv25Xm/view?usp=sharing",
    },
    // Add more documents as needed
  ];

  const indexOfLastItem = currentPage * itemsPerPage; 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  const currentItems = documents.slice(indexOfFirstItem, indexOfLastItem); 

  const totalPages = Math.ceil(documents.length / itemsPerPage); // Calculate total pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
  };

  const handleDownload = (url: string) => {
    if (window.confirm("Do you want to download this document?")) {
      window.location.href = url; // Redirect to the document URL for download
    }
  };

  // New function to get pagination numbers
  const getPaginationNumbers = () => {
    const paginationNumbers = [];
    const maxVisiblePages = 1; // Updated to show more pages

    if (totalPages <= maxVisiblePages + 1) { // Adjusted condition for fewer pages
      // If total pages are less than or equal to max visible pages, show all
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }
    } else {
      // Show ellipsis if needed
      if (currentPage > maxVisiblePages + 1) {
        paginationNumbers.push('...'); // Show ellipsis before the first visible page
      }

      // Show first page
      paginationNumbers.push(1);

      // Calculate the range of pages to show
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(i);
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - maxVisiblePages) {
        paginationNumbers.push('...'); // Show ellipsis after the last visible page
      }

      // Show last page
      paginationNumbers.push(totalPages);
    }

    return paginationNumbers;
  };

  return (
    <section id="pub" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"> {/* Updated grid for responsiveness */}
            {currentItems.map((doc, index) => (
              <div key={index} className="bg-blue-300 hover:bg-orange-300 hover:scale-105 duration-300 border rounded-lg shadow-lg p-4">
                 <img src={doc.img} alt={doc.title} className="mb-2 rounded h-62 w-full object-cover" />
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-sm">{doc.description}</p>
                <button 
                  onClick={() => handleDownload(doc.url)} 
                  className="text-black-500 underline"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 items-center flex-wrap"> {/* Added flex-wrap for better responsiveness */}
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="mx-2 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <i className="fa-solid fa-arrow-left"></i> {/* Left Arrow */}
            </button>
            {getPaginationNumbers().map((page, index) => (
              <button 
                key={index} 
                onClick={() => typeof page === 'number' && handlePageChange(page)} 
                className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                disabled={page === '...'} // Disable button for ellipsis
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages} 
              className="mx-2 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <i className="fa-solid fa-arrow-right"></i> {/* Right Arrow */}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Publications;