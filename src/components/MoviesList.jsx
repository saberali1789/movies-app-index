/* eslint-disable react/prop-types */

import { Row} from "react-bootstrap";
import CardMovie from "./CardMovie";
import CustomPagination from "./Pagination";

const MoviesList = ({movies, getPage, pageCount} ) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد أفلام ....</h2>}
    {movies.length >= 1 ? (<CustomPagination getPage={getPage} pageCount={pageCount} />) : null}
    
    </Row>
  );
};

export default MoviesList;
