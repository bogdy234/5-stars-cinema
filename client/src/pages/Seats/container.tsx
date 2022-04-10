import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import Seats from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
    return {
        userData: state.persistedUserReducer,
    };
};

// @ts-ignore
const SeatsContainer = connect(mapStateToProps)(Seats);

export default SeatsContainer;
