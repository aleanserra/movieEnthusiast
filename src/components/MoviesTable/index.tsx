import { useContext, useEffect } from "react";
import { Container } from "./styles";
import detailImg from "../../assets/detail.svg";
import { Movie, MoviesContext } from "../../MoviesContext";

interface MoviesTableProps {
  onOpenMovieDetail: () => void;
}

export function MoviesTable({ onOpenMovieDetail }: MoviesTableProps) {
  const { getMovies, getMovie, movies } = useContext(MoviesContext);

  useEffect(() => {
    getMovies();
  }, []);

  function onClickMovieDetail(id: string) {
    getMovie(id);
    onOpenMovieDetail();
  }

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
