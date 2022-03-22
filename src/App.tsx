import { useState } from "react";
import { MoviesProvider, useMovies } from "./hooks/useMovies";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { MovieDetailModal } from "./components/MovieDetailModal";
import { YearsModal } from "./components/YearsModal";

Modal.setAppElement("#root");

export function App() {
  const [isMovieDetailModalOpen, setIsMovieDetailModalOpen] = useState(false);
  const [isYearsModalOpen, setIsYearsModalOpen] = useState(false);
  const { isLoadedMoviesByYear } = useMovies();

  function handleOpenYearsModal() {
    setIsYearsModalOpen(true);
  }

  function handleCloseYearsModal() {
    setIsYearsModalOpen(false);
  }

  function handleOpenMovieDetailModal() {
    setIsMovieDetailModalOpen(true);
  }

  function handleCloseMovieDetailModal() {
    setIsMovieDetailModalOpen(false);
  }

  return (
    <MoviesProvider>
      <Header />
      <Dashboard
        onOpenMovieDetail={handleOpenMovieDetailModal}
        onOpenYearsModal={handleOpenYearsModal}
      />
      <MovieDetailModal
        isOpen={isMovieDetailModalOpen}
        onRequestClose={handleCloseMovieDetailModal}
      />
      <YearsModal
        isOpen={isYearsModalOpen && !isLoadedMoviesByYear}
        onRequestClose={handleCloseYearsModal}
      />

      <GlobalStyle />
    </MoviesProvider>
  );
}
