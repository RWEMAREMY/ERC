import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/PagesHeader";
import Footer from "../Footer/Footer";

interface Publication {
  _id: string;
  title: string;
  content: string;
  image: string;
}

function PublicationDetail() {
  const { _id } = useParams();
  const [publication, setPublication] = useState<Publication | null>(null);

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/publication-cards/${_id}`
        );
        if (!response.ok) throw new Error("Publication not found");
        const data = await response.json();
        setPublication(data);
      } catch (error) {
        console.error("Error fetching publication:", error);
      }
    };

    fetchPublication();
  }, [_id]);

  if (!publication) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{publication.title}</h1>
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: publication.content }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PublicationDetail;
