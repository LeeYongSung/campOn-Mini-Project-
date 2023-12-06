import React from 'react';

function Pagination({ page, setPage }) {
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="pagination d-flex justify-content-center">
      <a href="#" className="page-arrow" onClick={prevPage}>&laquo;</a>

      <div className="page-list">
        <a href="#" className="page-no">{page}</a>
      </div>

      <a href="#" className="page-arrow" onClick={nextPage}>&rsaquo;</a>
      <a href="#" className="page-arrow">&raquo;</a>
    </div>
  );
}

export default Pagination;