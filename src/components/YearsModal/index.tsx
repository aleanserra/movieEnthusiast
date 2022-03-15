import { useContext } from "react";
import Modal from "react-modal";
import { MoviesContext } from "../../MoviesContext";
import { Container } from "./styles";

interface YearsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function YearsModal({ isOpen, onRequestClose }: YearsModalProps) {
  const { validYears, getMoviesByYear } = useContext(MoviesContext);

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
          validYears.map((validYears, i) => (
            <p onClick={() => onClickYear(validYears)} key={i}>
              {validYears}
            </p>
          ))}
      </Container>
    </Modal>
  );
}
