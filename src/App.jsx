/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "react-bootstrap";
import "./style/App.css";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";


// https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar-US&page=1
// search: https://api.themoviedb.org/3/search/movie?api_key=80422145e6ec442095be7cc75412206f&query=v&language=en-US
const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState([]);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar-US&page=1"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar-US&page=${page}`
    );
    setMovies(res.data.results);
  };


  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=80422145e6ec442095be7cc75412206f&query=${word}&language=en-US`
      );
      setMovies(res.data.results);
    }
  };
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <MoviesList movies={movies} getPage={getPage}/>
      </Container>
    </div>
  );
};

export default App;
