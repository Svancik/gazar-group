import React from "react";
import { Link, Element, scroller } from "react-scroll";
import "./pagination.scss";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];



  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {totalPosts > postsPerPage && (
        <div className="paginationWrapper">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <Link
                  activeClass="active"
                  to="middle"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {number === currentPage ? (
                    <div
                      href
                      className="pagination-item pagination-item-active"
                    >
                      {currentPage}
                    </div>
                  ) : (
                    <div
                      href
                      className="pagination-item"
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
