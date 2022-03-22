import { useEffect } from "react";
import Modal from "react-modal";
import { useMovies } from "../../hooks/useMovies";
import { Container } from "./styles";
import { YearsModalProps } from "./YearsModal.interface";

export function YearsModal({ isOpen, onRequestClose }: YearsModalProps) {
  const { validYears, getMoviesByYear, isLoadedMoviesByYear } = useMovies();

  function onClickYear(year: number) {
    getMoviesByYear(year);
  }
  useEffect(() => {
    if (isLoadedMoviesByYear) {
      onRequestClose();
    }
  }, [isLoadedMoviesByYear]);

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
