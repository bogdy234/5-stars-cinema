import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  selectMoviesOption,
  selectReservationOption,
} from "../../actions/admin";
import { AdminReducer } from "../../interfaces/reducers";
import AdminNav from "./index";

const mapStateToProps = (state: { persistedAdminReducer: AdminReducer }) => {
  return {
    selectedOption: state.persistedAdminReducer.selectedOption,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    selectMoviesOption: () => dispatch(selectMoviesOption()),
    selectReservationOption: () => dispatch(selectReservationOption()),
  };
};

// @ts-ignore
const AdminNavContainer = connect(
  mapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(AdminNav);

export default AdminNavContainer;
