import { ReactElement } from 'react';
import { PaginationProps } from "../models/model";

function Pagination({
  companiesPerPage,
  totalCompanies,
  paginate,
  currentPage,
  backPage,
  forwardPage,
}: PaginationProps): ReactElement {

  const pageNumbers = [];

  // Display the correct range of numbers
  for (let i = 1; i <= Math.ceil(totalCompanies / companiesPerPage); i++) {
    if (currentPage < 5 && i <= 10) {
      pageNumbers.push(i);
    } else if (currentPage - 5 < i && currentPage + 6 > i) {
      pageNumbers.push(i);
    }
  }

  // Show limited amount pagination numbers;
  const paginationNumbers = pageNumbers.slice(0, 9);

  return (
    <nav className="pagination-nav">
      <label htmlFor="back" className="back">
        <input onClick={() => backPage(1)} type="button" value="<" />
      </label>
      <ul className="pagination">
        {paginationNumbers.map((number) => (
          <li key={number}>
            <label
              htmlFor="page"
            >
              <input
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                type="button"
                id="page"
                value={number}
              />
            </label>
          </li>
        ))}
      </ul>
      <label htmlFor="forward" className="forward">
        <input onClick={() => forwardPage(1)} type="button" value=">" />
      </label>
    </nav>
  );
}

export default Pagination;
