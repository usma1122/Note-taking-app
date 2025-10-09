export const REGISTER_REQUEST = "registerRequest";
export const REGISTER_SUCCESS = "registerSuccess";
export const REGISTER_FAILURE = "registerFailure";
export const LOGIN_REQUEST = "loginRequest";
export const LOGIN_SUCCESS = "loginSuccess";
export const LOGIN_FAILURE = "loginFailure";
export const LOGOUT_REQUEST = "logoutRequest";
export const LOGOUT_SUCCESS = "logoutSuccess";
export const RESET_REQUEST = "resetRequest";
export const RESET_SUCCESS = "resetSuccess";
export const RESET_FAILURE = "resetFailure";

export function registerUserRequest(userDetails) {
  return {
    type: REGISTER_REQUEST,
    payload: userDetails,
  };
}
export function registerUserSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
}
export function registerUserFailure(error) {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
}

export function loginUserRequest(userData) {
  return {
    type: LOGIN_REQUEST,
    payload: userData,
  };
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
export function loginUserFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function logoutUserRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
export function logoutUserSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function resetUserRequest(data) {
  return {
    type: RESET_REQUEST,
    payload: data,
  };
}
export function resetUserSucess() {
  return {
    type: RESET_SUCCESS,
  };
}
export function resetUserFailure(error) {
  return {
    type: RESET_FAILURE,
    payload: error,
  };
}
