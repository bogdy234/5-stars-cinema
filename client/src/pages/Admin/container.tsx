import { connect } from "react-redux";
import { AdminReducer } from "../../interfaces/reducers";
import { UserState } from "../../reducers/user";
import Admin from "./index";

const mapStateToProps = (state: {
  persistedUserReducer: UserState;
  persistedAdminReducer: AdminReducer;
}) => {
  return {
    userData: state.persistedUserReducer,
    selectedOption: state.persistedAdminReducer.selectedOption,
  };
};

// @ts-ignore
const AdminContainer = connect(mapStateToProps)(Admin);

export default AdminContainer;
