import { useContext } from "react";
import Modal from "react-modal";
import { MoviesContext } from "../../MoviesContext";
import { Container } from "./styles";

interface YearsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function YearsModal({ isOpen, onRequestClose }: YearsModalProps) {
  const { validYears } = useContext(MoviesContext);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h4>Selec a year</h4>
        {validYears.length > 0 &&
          validYears.map((validYears) => <p>{validYears}</p>)}
      </Container>
    </Modal>
  );
}
