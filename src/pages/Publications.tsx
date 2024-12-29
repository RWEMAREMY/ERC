import { useEffect, useState } from "react";
import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
interface Card {
  _id?: string;
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

function Publications() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "https://wizzy-africa-backend.onrender.com/api/publication-cards",{
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      if (Array.isArray(data)) {
        setCards(data);
      } else if (data.data && Array.isArray(data.data)) {
        setCards(data.data);
      } else {
        console.error("Unexpected API response format:", data);
        toast.error("Invalid data format received");
        setCards([]);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
      toast.error("Failed to load publications");
    } finally {
      setIsLoading(false);
    }
  };

  const truncateContent = (content: string, maxLength: number = 250) => {
    const strippedContent = content.replace(/<[^>]+>/g, "");
    if (strippedContent.length <= maxLength) return content;
    return strippedContent.substring(0, maxLength) + "...";
  };

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#85929e" highlightColor="#85929e">
        <div className="flex flex-wrap gap-6 p-6 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex-1 basis-[300px] max-w-[400px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Skeleton height={200} />
              <div className="p-4">
                <Skeleton height={30} width="100%" />
                <Skeleton count={3} />
                <div className="flex justify-between items-center mt-4">
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const handleDownload = (url: string) => {
  //   if (window.confirm("Do you want to download this document?")) {
  //     window.location.href = url;
  //   }
  // };

  const getPaginationNumbers = () => {
    const paginationNumbers = [];
    const maxVisiblePages = 1;

    if (totalPages <= maxVisiblePages + 1) {
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }
    } else {
      if (currentPage > maxVisiblePages + 1) {
        paginationNumbers.push("...");
      }

      paginationNumbers.push(1);

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(i);
      }

      if (currentPage < totalPages - maxVisiblePages) {
        paginationNumbers.push("...");
      }

      paginationNumbers.push(totalPages);
    }

    return paginationNumbers;
  };

  return (
    <section id="pub" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
            {" "}
            {currentItems.map((doc, index) => (
              <div
                key={index}
                className="bg-[#043873] hover:bg-orange-600 hover:scale-105 duration-300 border rounded-lg shadow-lg p-4"
              >
                <div className="aspect-w-16 aspect-h-9 mb-2">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="rounded w-full h-[250px] object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white">{doc.title}</h3>
                <p
                  className="text-white"
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(doc.content),
                  }}
                />
                {doc.content.length > 250 && (
                  <Link
                    to={`/publication/${doc._id}`}
                    className="text-white hover:text-white mt-2 inline-block"
                  >
                    Read More
                  </Link>
                )}
                {/* <button
                  onClick={() => handleDownload(doc.url)}
                  className="text-black-500 underline"
                >
                  Download
                </button> */}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 items-center flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 p-2 rounded-full bg-[#043873] hover:bg-blue-900"
              aria-label="Previous page"
            >
              <i className="fa-solid fa-arrow-left text-white"></i>
            </button>
            {getPaginationNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof page === "number" && handlePageChange(page)
                }
                className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === page
                    ? "bg-[#043873] text-white"
                    : "bg-gray-200"
                }`}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-2 p-2 rounded-full bg-[#043873] hover:bg-blue-900"
              aria-label="Next page"
            >
              <i className="fa-solid fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Publications;
