import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILURE,
} from "./actions";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function authReducer(state = initialState, { type, payload } = action) {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        user: null,
        loading: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        user: null,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case RESET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_FAILURE:
      return {
        ...state,
        error: payload,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
}
