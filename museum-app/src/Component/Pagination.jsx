import './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };


  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };


  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="prev"
        onClick={(e) => {
          e.preventDefault();
          handlePrev();
        }}
        disabled={currentPage === 1}
      >
        &laquo; Précédent
      </button>


      {pages.map((page) => (
        <button
          key={page}
          className={`page-number ${currentPage === page ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(page);
          }}
        >
          {page}
        </button>
      ))}

      <button
        className="next"
        onClick={(e) => {
          e.preventDefault();
          handleNext();
        }}
        disabled={currentPage === totalPages} 
      >
        Suivant &raquo;
      </button>
    </div>
  );
};

export default Pagination;
