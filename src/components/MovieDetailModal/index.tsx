import Modal from "react-modal";
import { Container } from "./styles";
import close from "../../assets/close.svg";
import line from "../../assets/line.svg";
import { useContext } from "react";
import { MoviesContext } from "../../MoviesContext";

interface MovieDetailModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function MovieDetailModal({
  isOpen,
  onRequestClose,
}: MovieDetailModalProps) {
  const { movieDetail } = useContext(MoviesContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>{movieDetail.title}</h1>
        <div className="close-button" onClick={onRequestClose}>
          <img src={close} alt="Close"></img>
          <p>Close</p>
        </div>
        <img src={line} alt="Line"></img>

        <h4>Year</h4>
        <p>{movieDetail.year}</p>
        <h4>Genre</h4>
        <p>{movieDetail.genre}</p>
        <h4>Description</h4>
        <p>{movieDetail.description}</p>
        <h4>Director</h4>
        <p className="cast">{movieDetail.director}</p>
        <h4>Actors</h4>
        <p className="cast">{movieDetail.actors}</p>
        <h4>Runtime</h4>
        <p>{movieDetail.runtime}</p>
        <h4>Rating</h4>
        <p>{movieDetail.rating}</p>
        <h4>Votes</h4>
        <p>{movieDetail.votes}</p>
        <h4>Revenue</h4>
        <p>
          {movieDetail.revenue &&
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(movieDetail.revenue)}
        </p>
        <h4>Metascore</h4>
        <p>{movieDetail.metascore}</p>
      </Container>
    </Modal>
  );
}