import { useState, useEffect } from 'react';
import './App.css';
import ImageContainer from './Component/ImageContainer';
import Pagination from './Component/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const apiUrl = '/.netlify/functions/get-collection';


        const params = new URLSearchParams({
          ps: 100
        });


        const response = await fetch(`${apiUrl}?${params.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.artObjects);
        setFilteredData(result.artObjects);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const searchResults = data.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.principalOrFirstMaker?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(searchResults);
    } else {
      setFilteredData(data);
    }
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredData(data);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!filteredData || filteredData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>RIJKSMUSEUM</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            className='search-input'
            type="text"
            placeholder="Search by title or artist..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className='search-button' type="submit">Search</button>
          <button className='clear-button' type="button" onClick={handleClearSearch}>Clear</button>
        </form>
      </header>

      <ImageContainer
        data={filteredData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
