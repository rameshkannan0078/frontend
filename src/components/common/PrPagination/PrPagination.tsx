import React from 'react';
import PrIcon from '../PrIcon/PrIcon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PrPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate the range of page numbers based on total pages
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`px-4 py-2 rounded-l ${
          isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <PrIcon name="ChevronLeft" className="w-3 h-3" color="currentColor" />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 ${pageNumber === currentPage ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} `}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded-r ${
          isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <PrIcon name='ChevronRight' className="w-3 h-3" color="currentColor" />
      </button>
    </div>
  );
};

export default PrPagination;


