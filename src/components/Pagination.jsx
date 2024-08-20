/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

const CustomPagination = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  // pageCount=500
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-5"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-link"}
      nextClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default CustomPagination;
