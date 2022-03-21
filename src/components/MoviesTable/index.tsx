import { useEffect, useState } from "react";
import { Container } from "./styles";
import detailImg from "../../assets/detail.svg";
import { Movie } from "../../hooks/useMovies";
import { useMovies } from "../../hooks/useMovies";

interface MoviesTableProps {
  onOpenMovieDetail: () => void;
}

const NUMBER_INITIAL_PAGE = 1;

export function MoviesTable({ onOpenMovieDetail }: MoviesTableProps) {
  const { getMovie, movies, getMoviesPageable } = useMovies();
  const [page, setPage] = useState(NUMBER_INITIAL_PAGE);

  useEffect(() => {
    getMoviesPageable(page);
  }, []);

  function onClickMovieDetail(id: string) {
    getMovie(id);
    onOpenMovieDetail();
  }

  function scrollToEnd() {
    let newPage = page + 1;
    getMoviesPageable(newPage);
    setPage(newPage);
  }

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>RANKING</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>REVENUE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 &&
            movies.map((movie: Movie) => (
              <tr key={movie.id}>
                <td>{movie.rank}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>
                  {movie.revenue &&
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(movie.revenue)}
                </td>
                <td>
                  <img
                    src={detailImg}
                    onClick={() => onClickMovieDetail(movie.id)}
                    alt="Detail"
                  ></img>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
