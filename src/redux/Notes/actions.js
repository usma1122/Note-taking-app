export const FETCHDATA_REQUEST = "fetchDataRequest";
export const FETCHDATA_SUCCESS = "fetchDataSuccess";
export const FETCHDATA_FAILURE = "fetchDataFailure";
export const ADDDATA_REQUEST = "addDataRequest";
export const ADDDATA_SUCCESS = "addDataSuccess";
export const ADDDATA_FAILURE = "addDataFailure";
export const UPDATEDATA_REQUEST = "updateDataRequest";
export const UPDATEDATA_SUCCESS = "updateDataSuccess";
export const UPDATEDATA_FAILURE = "updateDataFailure";
export const DELETEDATA_REQUEST = "deleteDataRequest";
export const DELETEDATA_SUCCESS = "deleteDataSuccess";
export const DELETEDATA_FAILURE = "deleteDataFailure";
export const EDITDATA_REQUEST = "editDataRequest";
export const EDITDATA_SUCCESS = "editDataSuccess";
export const EDITDATA_FAILURE = "editDataFailure";
// export const SHAREDATA_REQUEST = "sahreNoteRequest";
// export const SHAREDATA_SUCCESS = "sahreNoteSuccess";
// export const SHAREDATA_failure = "sahreNoteFailure";

export function addUserDataRequest(data) {
  return {
    type: ADDDATA_REQUEST,
    payload: data,
  };
}
export function addUserDataSuccess(userData) {
  return {
    type: ADDDATA_SUCCESS,
    payload: userData,
  };
}
export function addUserDataFailure(error) {
  return {
    type: ADDDATA_FAILURE,
    payload: error,
  };
}
export function fetchUserDataRequest(userId) {
  return {
    type: FETCHDATA_REQUEST,
    payload: userId,
  };
}

export function fetchUserDataSuccess(userData) {
  return {
    type: FETCHDATA_SUCCESS,
    payload: userData,
  };
}
export function fetchUserDataFailure(error) {
  return {
    type: FETCHDATA_FAILURE,
    payload: error,
  };
}
export function deleteUserDataRequest(id, userId) {
  return {
    type: DELETEDATA_REQUEST,
    payload: {
      id,
      userId,
    },
  };
}
export function deleteUserDataSuccess(userData) {
  return {
    type: DELETEDATA_SUCCESS,
    payload: userData,
  };
}
export function deleteUserDataFailure(error) {
  return {
    type: DELETEDATA_FAILURE,
    payload: error,
  };
}
export function editUserDataRequest(editData) {
  return {
    type: EDITDATA_REQUEST,
    payload: editData, 
  };
}
export function editUserDataSuccess(editData) {
  return {
    type: EDITDATA_SUCCESS,
    payload: editData,
  };
}
export function editUserDataFailure(error) {
  return {
    type: EDITDATA_FAILURE,
    payload: error,
  };
}
