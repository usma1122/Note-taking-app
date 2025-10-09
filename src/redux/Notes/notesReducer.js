import {
  ADDDATA_REQUEST,
  ADDDATA_SUCCESS,
  ADDDATA_FAILURE,
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
  FETCHDATA_FAILURE,
  DELETEDATA_REQUEST,
  DELETEDATA_SUCCESS,
  DELETEDATA_FAILURE,
  EDITDATA_REQUEST,
  EDITDATA_SUCCESS,
  EDITDATA_FAILURE,
} from "./actions";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

export function notesReducer(state = initialState, { type, payload } = action) {
  switch (type) {
    case ADDDATA_REQUEST:
      return {
        ...state,
        userData: null,
        loading: true,
        error: null,
      };
    case ADDDATA_SUCCESS:
      return {
        ...state,
        userData: payload,
        loading: false,
        error: null,
      };
    case ADDDATA_FAILURE:
      return {
        ...state,
        userData: null,
        loading: false,
        error: payload,
      };
    case FETCHDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCHDATA_SUCCESS:
      return {
        ...state,
        userData: payload,
        loading: false,
        error: null,
      };
    case FETCHDATA_FAILURE:
      return {
        ...state,
        userData: null,
        loading: false,
        error: payload,
      };
    case DELETEDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETEDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: payload,
      };
    case DELETEDATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case EDITDATA_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EDITDATA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        userData: payload,
      };
    case EDITDATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
