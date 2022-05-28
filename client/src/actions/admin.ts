import { AdminNavOption } from "../interfaces";

export const SELECT_MOVIES_OPTION = "SELECT_MOVIES_OPTION";
export const SELECT_RESERVATION_OPTION = "SELECT_MOVIES_OPTION";

export const selectMoviesOption = () => {
  return {
    type: SELECT_MOVIES_OPTION,
    payload: {
      option: AdminNavOption.Movies,
    },
  };
};

export const selectReservationOption = () => {
  return {
    type: SELECT_RESERVATION_OPTION,
    payload: {
      option: AdminNavOption.Reservations,
    },
  };
};
