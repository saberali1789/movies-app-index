/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "react-bootstrap";
import "./style/App.css";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";

// https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar-US&page=1
// search: https://api.themoviedb.org/3/search/movie?api_key=80422145e6ec442095be7cc75412206f&query=v&language=en-US
const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar"
    );
    console.log(res);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=80422145e6ec442095be7cc75412206f&language=ar-US&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=80422145e6ec442095be7cc75412206f&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
