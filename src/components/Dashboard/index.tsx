import { Filters } from "../Filters";
import { MoviesTable } from "../MoviesTable";
import { Container } from "./styles";

interface DashboardProps {
  onOpenMovieDetail: () => void;
  onOpenYearsModal: () => void;
}
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
