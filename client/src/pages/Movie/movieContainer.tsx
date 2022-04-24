import { connect } from "react-redux";
import { UserState } from "../../reducers/user";
import Movie from "./index";

const mapStateToProps = (state: { persistedUserReducer: UserState }) => {
  return {
    userData: state.persistedUserReducer,
  };
};

// @ts-ignore
const MovieContainer = connect(mapStateToProps)(Movie);

export default MovieContainer;
