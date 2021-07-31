import Table from "./Table";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


function Pagination() {
  const users = useSelector((state) => state.users);
  const pages = Math.ceil(users.length / 10);
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  function previousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * 10 - 10;
    const endIndex = startIndex + 10;
    return users.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    return new Array(5).fill().map((_, index) => start + index + 1);
  };



  return (
    <>
    
      <div>
        <Table users={getPaginatedData()} />
      </div>

      <div className="mb-5">
        <span className="mr-10">
          {`Showing ${currentPage * 10 - 10 + 1} 
             to ${
               currentPage === pages ? users.length : currentPage * 10 - 10 + 10
             }
            of 
            ${users.length}`}
        </span>

        <button
          onClick={previousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "activePage" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={nextPage}
          className={`next ${currentPage === pages ? "disabled" : null}`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
