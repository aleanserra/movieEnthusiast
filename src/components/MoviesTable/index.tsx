import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import detailImg from "../../assets/detail.svg";
import { Movie, MoviesContext } from "../../MoviesContext";
import { UIInfiniteScroll } from "../InfiniteScroll/InfiniteScroll";

interface MoviesTableProps {
  onOpenMovieDetail: () => void;
}

export function MoviesTable({ onOpenMovieDetail }: MoviesTableProps) {
  const { getMovies, getMovie, movies, getMoviesPageable, isLoadingMovies } =
    useContext(MoviesContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, []);

  function onClickMovieDetail(id: string) {
    getMovie(id);
    onOpenMovieDetail();
  }

  // function fetchMorePage() {
  //   let newPage = page + 1;
  //   getMoviesPageable(newPage);
  //   setPage(newPage);
  // }

  return (
    <Container>
      <div>
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
        {/* <UIInfiniteScroll fetchMore={fetchMorePage} /> */}
      </div>
    </Container>
  );
}
