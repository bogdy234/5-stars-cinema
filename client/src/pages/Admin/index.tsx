import { FC, ReactElement, useState } from "react";
import { UserData } from "../../actions/user";
import AdminNav from "../../containers/AdminNav";
import MovieModal from "../../containers/AddMovieModal";
import MoviesTable from "../../containers/MoviesTable";

import NavbarContainer from "../../containers/Navbar/container";

interface AdminProps {
  userData: { data: UserData };
}

const Admin: FC<AdminProps> = ({ userData }): ReactElement => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);

  const closeAddMoveModal = () => {
    if (!showAddMovieModal) return;
    setShowAddMovieModal(false);
  };

  return userData?.data?.isAdmin ? (
    <div>
      <NavbarContainer />
      <MovieModal
        showModal={showAddMovieModal}
        closeModal={closeAddMoveModal}
      />
      <div className="flex gap-10">
        <AdminNav />
        <MoviesTable showAddMovieModal={() => setShowAddMovieModal(true)} />
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
