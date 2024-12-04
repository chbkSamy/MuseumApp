import { useState, useEffect } from 'react';
import './App.css';
import ImageContainer from './Component/ImageContainer';
import Pagination from './Component/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const apikey = "pYwXfSZ3"


  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const apikey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apikey}&ps=100`
        );
        const result = await response.json();
        setData(result.artObjects);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="App">
      <ImageContainer
        data={data}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
