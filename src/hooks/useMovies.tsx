import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { orderBy as _orderBy } from "lodash";
import {
  Movie,
  MovieDetail,
  MoviesContextData,
  MoviesProviderProps,
} from "../interfaces/useMovies.interface";

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

const NUMBER_PAGES = 30;

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>(
    {} as MovieDetail
  );
  const [validYears, setValidYears] = useState<number[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadedMoviesByYear, setIsLoadedMoviesByYear] = useState(false);

  function getMoviesPageable(page: number) {
    setIsLoadingMovies(true);
    api
      .get(`movies?page=${page}&size=${NUMBER_PAGES}`)
      .then((response) => {
        setIsLoadingMovies(false);
        setMovies((prevMovies) => [...prevMovies, ...response.data.content]);
      })
      .catch((error) => console.log(error));
  }

  function getMovies() {
    api
      .get("movies")
      .then((response) => {
        setMovies(response.data.content);
      })
      .catch((error) => console.log(error));
  }

  function getMovie(id: string) {
    api.get(`movies/${id}`).then((response) => setMovieDetail(response.data));
  }

  function getTopTenRevenue() {
    api
      .get("movies")
      .then((response) => {
        setMovies(
          _orderBy(
            response.data.content.filter(
              (movie: Movie) => movie.revenue != null
            ),
            ["revenue"],
            ["desc"]
          ).splice(0, 10)
        );
      })
      .catch((error) => console.log(error));
  }

  function getValidYears() {
    api
      .get("movies")
      .then((response) => {
        let years = response.data.content.map((movie: Movie) => movie.year);
        setValidYears(
          years
            .filter((element: number, index: number) => {
              return years.indexOf(element) === index;
            })
            .sort()
        );
      })
      .catch((error) => console.log(error));
  }

  function getMoviesByYear(year: number) {
    setIsLoadedMoviesByYear(false);
    api
      .get(`movies?start=${year}`)
      .then((response) => {
        setMovies(
          _orderBy(
            response.data.content.filter(
              (movie: Movie) => movie.revenue != null
            ),
            ["revenue"],
            ["desc"]
          ).splice(0, 10)
        );
        console.log("hey");
        setIsLoadedMoviesByYear(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <MoviesContext.Provider
      value={{
        getMovies,
        getMovie,
        movieDetail,
        movies,
        getTopTenRevenue,
        validYears,
        getValidYears,
        getMoviesByYear,
        getMoviesPageable,
        isLoadingMovies,
        isLoadedMoviesByYear,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
