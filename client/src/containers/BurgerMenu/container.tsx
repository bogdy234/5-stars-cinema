import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import BurgerMenu from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};

// @ts-ignore
const BurgerMenuContainer = connect(mapStateToProps)(BurgerMenu);

export default BurgerMenuContainer;
