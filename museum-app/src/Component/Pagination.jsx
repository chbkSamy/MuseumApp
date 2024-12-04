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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pagination">
      {/* Première page */}
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

      {/* Page précédente */}
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

      {/* Affichage de la page actuelle */}
      <span className="page-info">
        Page {currentPage} sur {totalPages}
      </span>

      {/* Page suivante */}
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

      {/* Dernière page */}
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

      {/* Remonter en haut */}
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
