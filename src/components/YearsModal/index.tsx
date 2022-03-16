import Modal from "react-modal";
import { useMovies } from "../../hooks/useMovies";
import { Container } from "./styles";

interface YearsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function YearsModal({ isOpen, onRequestClose }: YearsModalProps) {
  const { validYears, getMoviesByYear } = useMovies();

  function onClickYear(year: number) {
    console.log(year);
    getMoviesByYear(year);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-small-content"
    >
      <Container>
        <h4>Select a year</h4>
        {validYears.length > 0 &&
          validYears.map((validYear, i) => (
            <p onClick={() => onClickYear(validYear)} key={i}>
              {validYear}
            </p>
          ))}
      </Container>
    </Modal>
  );
}
