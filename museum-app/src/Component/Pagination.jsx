import './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      handleScrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      handleScrollToTop();
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      handleScrollToTop();
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pagination">

      <button
        className="first-page"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(1);
        }}
        disabled={currentPage === 1}
      >
        Première
      </button>

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

      <span className="page-info">
        Page {currentPage} sur {totalPages}
      </span>

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

      <button
        className="last-page"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(totalPages);
        }}
        disabled={currentPage === totalPages}
      >
        Dernière
      </button>

      <button
        className="scroll-to-top"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToTop();
        }}
      >
        ⬆️
      </button>
    </div>
  );
};

export default Pagination;
