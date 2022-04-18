import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import MyReservations from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};

//@ts-ignore
const MyReservationsContainer = connect(mapStateToProps)(MyReservations);

export default MyReservationsContainer;
