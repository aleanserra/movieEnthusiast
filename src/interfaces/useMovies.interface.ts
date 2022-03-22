import { ReactNode } from "react";

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

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
  offset: number;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Data {
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

export interface MoviesProviderProps {
  children: ReactNode;
}

export interface MoviesContextData {
  getMoviesPageable: (page: number) => void;
  getMovies: () => void;
  getValidYears: () => void;
  getTopTenRevenue: () => void;
  getMovie: (id: string) => void;
  getMoviesByYear: (year: number) => void;
  movieDetail: MovieDetail;
  movies: Movie[];
  validYears: number[];
  isLoadingMovies: boolean;
  isLoadedMoviesByYear: boolean;
}
