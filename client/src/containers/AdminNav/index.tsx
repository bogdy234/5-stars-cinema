import { FC, ReactElement } from "react";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";

interface AdminNavProps {}

const { MOVIES } = CONSTANTS.TEXT.ADMIN_NAV;

const AdminNav: FC<AdminNavProps> = (): ReactElement => {
    const onClickMovies = () => {};
    return (
        <div className="w-80 bg-gray-800 min-h-screen text-white pl-10 pt-16 text-xl">
            <div>
                <Button
                    onClick={onClickMovies}
                    text={MOVIES}
                    leftIconAlt={"test"}
                    leftIconSrc={"/movies.svg"}
                />
            </div>
        </div>
    );
};

export default AdminNav;
