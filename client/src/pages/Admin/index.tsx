import { FC, ReactElement, useState } from "react";
import { UserData } from "../../actions/user";
import MovieModal from "../../containers/AddMovieModal";
import MoviesTable from "../../containers/MoviesTable";

import NavbarContainer from "../../containers/Navbar/container";
import AddTimeModal from "../../containers/AddTimeModal";
import EditMovieModal from "../../containers/EditMovieModal";
import { Movie } from "../../interfaces/movies";
import { AdminNavOption } from "../../interfaces";
import AdminReservations from "../../containers/AdminReservations";
import AdminNavContainer from "../../containers/AdminNav/container";
import ViewRunningTimes from "../../containers/ViewRunningTimes";

interface AdminProps {
    userData: { data: UserData };
    selectedOption: AdminNavOption;
}

const Admin: FC<AdminProps> = ({ userData, selectedOption }): ReactElement => {
    const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
    const [showAddTimeModal, setShowAddTimeModal] = useState<boolean>(false);
    const [showEditMovieModal, setShowEditMovieModal] =
        useState<boolean>(false);
    const [showRunningTimesModal, setShowRunningTimesModal] =
        useState<boolean>(false);
    const [movieId, setMovieId] = useState<string>("");
    const [movie, setMovie] = useState<Movie | null>(null);

    const closeAddMoveModal = () => {
        if (!showAddMovieModal) return;
        setShowAddMovieModal(false);
    };

    const closeAddTimeModal = () => {
        if (!showAddTimeModal) return;
        setShowAddTimeModal(false);
    };

    const closeShowRunningTimesModal = () => {
        if (!showRunningTimesModal) return;
        setShowRunningTimesModal(false);
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
                <ViewRunningTimes
                    showModal={showRunningTimesModal}
                    closeModal={closeShowRunningTimesModal}
                    movieId={movieId}
                />
            )}
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
                <AdminNavContainer />
                {selectedOption === AdminNavOption.Movies ? (
                    <MoviesTable
                        showAddMovieModal={() => setShowAddMovieModal(true)}
                        showAddTimeModal={(movieId: string) => {
                            setMovieId(movieId);
                            setShowAddTimeModal(true);
                        }}
                        showEditMovieModal={(movie) => {
                            console.log("here", movie);
                            setShowEditMovieModal(true);
                            setMovie(movie);
                            setMovieId(movie._id);
                        }}
                        showRunningTimesModal={(movie) => {
                            setShowRunningTimesModal(true);
                            setMovie(movie);
                            setMovieId(movie._id);
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
