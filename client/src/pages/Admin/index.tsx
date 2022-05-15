import { FC, ReactElement } from "react";
import { UserData } from "../../actions/user";
import AdminNav from "../../containers/AdminNav";
import MoviesTable from "../../containers/MoviesTable";

import NavbarContainer from "../../containers/Navbar/container";

interface AdminProps {
    userData: { data: UserData };
}

const Admin: FC<AdminProps> = ({ userData }): ReactElement => {
    return userData?.data?.isAdmin ? (
        <div>
            <NavbarContainer />
            <div className="flex gap-10">
                <AdminNav />
                <MoviesTable />
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
