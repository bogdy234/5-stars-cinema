import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import Navbar from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
    return {
        userData: state.persistedUserReducer,
    };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
