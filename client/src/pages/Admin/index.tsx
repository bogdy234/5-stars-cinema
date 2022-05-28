import { FC, ReactElement, useState } from "react";
import { UserData } from "../../actions/user";
import AdminNav from "../../containers/AdminNav";
import MovieModal from "../../containers/AddMovieModal";
import MoviesTable from "../../containers/MoviesTable";

import NavbarContainer from "../../containers/Navbar/container";
import AddTimeModal from "../../containers/AddTimeModal";
import EditMovieModal from "../../containers/EditMovieModal";
import { Movie } from "../../interfaces/movies";
import { AdminNavOption } from "../../interfaces";
import AdminReservations from "../../containers/AdminReservations";

interface AdminProps {
  userData: { data: UserData };
}

const Admin: FC<AdminProps> = ({ userData }): ReactElement => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const [showAddTimeModal, setShowAddTimeModal] = useState<boolean>(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>("");
  const [movie, setMovie] = useState<Movie | null>(null);
  const [selectedOption, setSelectedOption] = useState<AdminNavOption>(
    AdminNavOption.Movies
  );

  const closeAddMoveModal = () => {
    if (!showAddMovieModal) return;
    setShowAddMovieModal(false);
  };

  const closeAddTimeModal = () => {
    if (!showAddTimeModal) return;
    setShowAddTimeModal(false);
  };

  return userData?.data?.isAdmin ? (
    <div>
      <NavbarContainer />
      <MovieModal
        showModal={showAddMovieModal}
        closeModal={closeAddMoveModal}
      />
      <AddTimeModal
        showModal={showAddTimeModal}
        closeModal={closeAddTimeModal}
        movieId={movieId}
      />
      {movie && (
        <EditMovieModal
          showModal={showEditMovieModal}
          closeModal={() =>
            showEditMovieModal ? setShowEditMovieModal(false) : null
          }
          movie={movie}
        />
      )}
      <div className="flex gap-10">
        <AdminNav
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {selectedOption === AdminNavOption.Movies ? (
          <MoviesTable
            showAddMovieModal={() => setShowAddMovieModal(true)}
            showAddTimeModal={(movieId: string) => {
              setMovieId(movieId);
              setShowAddTimeModal(true);
            }}
            showEditMovieModal={(movie) => {
              setShowEditMovieModal(true);
              setMovie(movie);
            }}
          />
        ) : (
          <AdminReservations />
        )}
      </div>
      <div></div>
    </div>
  ) : (
    <div className="text-white text-3xl text-center pt-10">
      You are not an admin!
    </div>
  );
};

export default Admin;
