export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface UserLoginData {
    email: string;
    password: string;
}

export interface UserData {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    cardNumber: string,
    isAdmin: boolean,
    createdAt: Date,
    modifiedAt: Date,
}

export const login = (data: UserLoginData) => {
    let payload = {
        isLoading: true,
        data,
    }

    return {
        type: LOGIN,
        payload,
    }
}

export const loginSuccess = (data: UserData) => {
    let payload = {
        isLoading: false,
        data,
    }

    return {
        type: LOGIN_SUCCESS,
        payload,
    }
}

export const loginError = () => {
    let payload = {
        isLoading: false,
    }

    return {
        type: LOGIN_ERROR,
        payload
    }
}
