export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

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
  cardNumber: string;
  isAdmin: boolean;
  createdAt: Date;
  modifiedAt: Date;
}

export const login = (data: UserLoginData) => {
  let payload = {
    isLoading: true,
    data,
  };

  return {
    type: LOGIN,
    payload,
  };
};

export const loginSuccess = (data: UserData) => {
  let payload = {
    isLoading: false,
    data,
  };

  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = () => {
  let payload = {
    isLoading: false,
  };

  return {
    type: LOGIN_ERROR,
    payload,
  };
};

export const logout = () => {
  let payload = {
    isLoading: true,
  };

  return {
    type: LOGOUT,
    payload,
  };
};

export const logoutSuccess = () => {
  let payload = {
    isLoading: false,
  };

  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};

export const logoutError = () => {
  let payload = {
    isLoading: false,
  };

  return {
    type: LOGOUT_ERROR,
    payload,
  };
};
