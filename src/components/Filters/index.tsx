import { useMovies } from "../../hooks/useMovies";
import { Container } from "./styles";

interface FiltersProps {
  onOpenYearsModal: () => void;
}

export function Filters({ onOpenYearsModal }: FiltersProps) {
  const { getTopTenRevenue, getValidYears } = useMovies();
  function onClickTopTenRevenuePerYear() {
    getValidYears();
    onOpenYearsModal();
  }
  return (
    <Container>
      <h1>Movie ranking</h1>
      <div>
        <button onClick={getTopTenRevenue}>Top 10 Revenue</button>
        <button onClick={onClickTopTenRevenuePerYear}>
          Top 10 Revenue per Year
        </button>
      </div>
    </Container>
  );
}
