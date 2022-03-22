import { Filters } from "../Filters";
import { MoviesTable } from "../MoviesTable";
import { DashboardProps } from "./Dashboard.interface";
import { Container } from "./styles";

export function Dashboard({
  onOpenMovieDetail,
  onOpenYearsModal,
}: DashboardProps) {
  return (
    <Container>
      <Filters onOpenYearsModal={onOpenYearsModal} />
      <MoviesTable onOpenMovieDetail={onOpenMovieDetail} />
    </Container>
  );
}
