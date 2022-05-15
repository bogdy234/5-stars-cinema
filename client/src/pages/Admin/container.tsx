import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import Admin from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
    return {
        userData: state.persistedUserReducer,
    };
};

// @ts-ignore
const AdminContainer = connect(mapStateToProps)(Admin);

export default AdminContainer;
