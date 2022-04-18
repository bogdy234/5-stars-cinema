import { connect } from "react-redux";
import {
  login,
  loginError,
  loginSuccess,
  UserData,
  UserLoginData,
} from "../../actions/user";
import { Dispatch } from "react";
import ChangePass from "./index";
import { UserState } from "../../reducers/user";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    login: (loginData: UserLoginData) => dispatch(login(loginData)),
    loginSuccess: (data: UserData) => dispatch(loginSuccess(data)),
    loginError: () => dispatch(loginError()),
  };
};

const ChangePassContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(ChangePass);

export default ChangePassContainer;
