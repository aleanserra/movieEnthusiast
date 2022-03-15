import { createContext, ReactNode, useState } from "react";
import { api } from "./services/api";
import { orderBy as _orderBy } from "lodash";

export interface Movie {
  id: string;
  rank: number;
  revenue: number;
  title: string;
  year: number;
}

export interface MovieDetail extends Movie {
  genre: string;
  description: string;
  director: string;
  actors: string;
  runtime: number;
  rating: number;
  votes: number;
  metascore: number;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
  offset: number;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

interface Data {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  sort: Sort;
  size: number;
  content: Movie[];
  number: number;
  empty: boolean;
}

export type MovieSelected = Pick<Movie, "id">;

interface MoviesProviderProps {
  children: ReactNode;
}

interface MoviesContextData {
  getMovies: () => void;
  getValidYears: () => void;
  getTopTenRevenue: () => void;
  getMovie: (id: string) => void;
  movieDetail: MovieDetail;
  movies: Movie[];
  validYears: number[];
}

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>({} as Movie[]);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>(
    {} as MovieDetail
  );
  const [validYears, setValidYears] = useState<number[]>([]);

  function getMovies() {
    api.get("movies").then((response) => {
      setMovies(response.data.content);
    });
  }

  function getMovie(id: string) {
    api.get(`movies/${id}`).then((response) => setMovieDetail(response.data));
  }

  function getTopTenRevenue() {
    api.get("movies").then((response) => {
      setMovies(
        _orderBy(
          response.data.content.filter((movie: Movie) => movie.revenue != null),
          ["revenue"],
          ["desc"]
        ).splice(0, 10)
      );
    });
  }

  function getValidYears() {
    api.get("movies").then((response) => {
      let years = response.data.content.map((movie: Movie) => movie.year);
      setValidYears(
        years.filter((element: number, index: number) => {
          return years.indexOf(element) === index;
        })
      );
    });
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
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
