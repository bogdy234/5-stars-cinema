import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import MyAccountData from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};

// @ts-ignore
const MyAccountDataContainer = connect(mapStateToProps)(MyAccountData);

export default MyAccountDataContainer;
