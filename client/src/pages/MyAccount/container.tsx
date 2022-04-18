import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logout, logoutError, logoutSuccess } from "../../actions/user";
import { UserState } from "../../reducers/user";
import MyAccount from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    logout: () => dispatch(logout()),
    logoutSuccess: () => dispatch(logoutSuccess()),
    logoutError: () => dispatch(logoutError()),
  };
};

const MyAccountContainer = connect(
  mapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(MyAccount);

export default MyAccountContainer;
