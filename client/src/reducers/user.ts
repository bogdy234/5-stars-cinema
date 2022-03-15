import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, UserData} from "../actions/user";

export interface UserState {
    isLoggedIn: boolean;
    isLoading: boolean;
    data: UserData | null;
    error: false;
}

const initialState: UserState = {
    isLoggedIn: false,
    isLoading: false,
    data: null,
    error: false,
};

export interface UserAction {
    type: string;
    payload: UserState;
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isLoading: action.payload.isLoading, data: null, error: false, isLoggedIn: false}
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                error: false,
                isLoggedIn: true
            }
        case LOGIN_ERROR:
            return {...state, isLoading: action.payload.isLoading, data: null, error: true, isLoggedIn: false,}
        default:
            return state;
    }
}
export default userReducer;
