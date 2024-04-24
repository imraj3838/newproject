// Pagination.js
import React from 'react';

function Pagination({ coursesPerPage, totalCourses, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Previous</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a className="page-link" href="#" onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
        <li className={`page-item ${currentPage === Math.ceil(totalCourses / coursesPerPage) ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
