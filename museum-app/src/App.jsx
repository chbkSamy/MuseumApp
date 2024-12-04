import { useState } from 'react'
import './App.css'
import PaintingDisplay from './Component/PaintingDisplay'
import ImageContainer from './Component/ImageContainer'
import Pagination from './Component/Pagination'
import data from './infosMockAPI.json'; 

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <ImageContainer currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.artObjects.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default App;
