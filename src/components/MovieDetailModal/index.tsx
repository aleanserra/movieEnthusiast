import Modal from "react-modal";
import {
  Cast,
  CastContainer,
  CloseButton,
  Container,
  Director,
} from "./styles";
import close from "../../assets/close.svg";
import line from "../../assets/line.svg";
import { useMovies } from "../../hooks/useMovies";
import { MovieDetailModalProps } from "./MovieDetailModal.interface";

export function MovieDetailModal({
  isOpen,
  onRequestClose,
}: MovieDetailModalProps) {
  const { movieDetail } = useMovies();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>{movieDetail.title}</h1>
        <CloseButton onClick={onRequestClose}>
          <img src={close} alt="Close"></img>
          <p>Close</p>
        </CloseButton>
        <img src={line} alt="Line"></img>
        <h4>Year</h4>
        <p>{movieDetail.year}</p>
        <h4>Genre</h4>
        <p>{movieDetail.genre}</p>
        <h4>Description</h4>
        <p>{movieDetail.description}</p>
        <CastContainer>
          <Director>
            <h4>Director</h4>
            <Cast>{movieDetail.director}</Cast>
          </Director>
          <div>
            <h4>Actors</h4>
            <Cast>{movieDetail.actors}</Cast>
          </div>
        </CastContainer>
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
