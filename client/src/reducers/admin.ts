import {
  SELECT_MOVIES_OPTION,
  SELECT_RESERVATION_OPTION,
} from "../actions/admin";
import { AdminNavOption } from "../interfaces";

const initialState = {
  selectedOption: AdminNavOption.Movies,
};

export interface AdminAction {
  type: string;
  payload: {
    option: AdminNavOption;
  };
}

const adminReducer = (state = initialState, action: AdminAction) => {
  switch (action.type) {
    case SELECT_MOVIES_OPTION:
      return {
        ...state,
        selectedOption: action.payload.option,
      };
    case SELECT_RESERVATION_OPTION:
      return {
        ...state,
        selectedOption: action.payload.option,
      };
    default:
      return state;
  }
};
export default adminReducer;
