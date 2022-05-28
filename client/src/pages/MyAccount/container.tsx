import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  logout,
  logoutError,
  logoutSuccess,
  selectOption,
} from "../../actions/user";
import { Options } from "../../interfaces/user";
import { UserState } from "../../reducers/user";
import MyAccount from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
    selectedOption: state.persistedUserReducer.selectedOption,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    logout: () => dispatch(logout()),
    logoutSuccess: () => dispatch(logoutSuccess()),
    logoutError: () => dispatch(logoutError()),
    setSelectedOption: (option: Options) => dispatch(selectOption(option)),
  };
};

const MyAccountContainer = connect(
  mapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(MyAccount);

export default MyAccountContainer;
