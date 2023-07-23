import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    SELECT_OPTION,
    UserData,
} from "../actions/user";
import { Options } from "../interfaces/user";

export interface UserState {
    isLoggedIn: boolean;
    isLoading: boolean;
    data: UserData | null;
    error: false;
    selectedOption: Options;
}

const initialState: UserState = {
    isLoggedIn: false,
    isLoading: false,
    data: null,
    error: false,
    selectedOption: Options.PersonalData,
};

export interface UserAction {
    type: string;
    payload: UserState;
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: null,
                error: false,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                error: false,
                isLoggedIn: true,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: null,
                error: true,
                isLoggedIn: false,
            };
        case LOGOUT:
            return {
                ...initialState,
            };
        case LOGOUT_SUCCESS:
            return;
        case LOGOUT_ERROR:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case SELECT_OPTION:
            return {
                ...state,
                selectedOption: action.payload.selectedOption,
            };
        default:
            return state;
    }
};
export default userReducer;
