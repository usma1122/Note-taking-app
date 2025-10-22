import { put, call, takeEvery } from "redux-saga/effects";
import {
  ADDDATA_REQUEST,
  FETCHDATA_REQUEST,
  fetchUserDataFailure,
  fetchUserDataSuccess,
  DELETEDATA_REQUEST,
  deleteUserDataFailure,
  addUserDataFailure,
  deleteUserDataSuccess,
  EDITDATA_REQUEST,
  addUserDataSuccess,
  editUserDataSuccess,
  editUserDataFailure,
} from "./actions";
import { db, auth } from "../../services/fireBase";
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
function* addUserDataSaga({ payload }) {
  try {
    const userData = yield call(addDoc, collection(db, "notes"), payload);
    yield put(addUserDataSuccess({ id: userData.id, ...payload }));
  } catch (error) {
    const error_message = { code: error.code, message: error.message };
    yield put(addUserDataFailure(error_message));
  }
}

function* fetchUserDataSaga({ payload }) {
  // console.log(payload);
  
  try {
    const q = query(collection(db, "notes"), where("userId", "==", payload));
    const qureySnapshot = yield call(getDocs, q);
    const notes = qureySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    // console.log(notes);

    yield put(fetchUserDataSuccess(notes));
  } catch (error) {
    const error_message = { code: error.code, message: error.message };
    console.log(error_message);

    fetchUserDataFailure(error_message);
  }
}

function* deleteUserDataSaga({ payload }) {
  const { id, userId } = payload;
  try {
    yield call(deleteDoc, doc(db, "notes", id));
    const q = query(collection(db, "notes"), where("userId", "==", userId));
    const qureySnapshot = yield call(getDocs, q);
    const notes = qureySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    yield put(deleteUserDataSuccess(notes));
  } catch (error) {
    const error_message = { code: error.code, message: error.message };
    console.log("Error Message", error_message);
    yield put(deleteUserDataFailure(error_message));
  }
}

function* editUserDataSaga({ payload }) {
  const { id, userId, ...rest } = payload;
  try {
    const documentRef = doc(db, "notes", id);
    yield call(updateDoc, documentRef, rest);
    const q = query(collection(db, "notes"), where("userId", "==", userId));
    const qureySnapshot = yield call(getDocs, q);
    const notes = qureySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    yield put(editUserDataSuccess(notes));
  } catch (error) {
    const error_message = { code: error.code, message: error.message };
    yield put(editUserDataFailure(error_message));
  }
}
export function* watchUserDataSaga() {
  yield takeEvery(ADDDATA_REQUEST, addUserDataSaga);
  yield takeEvery(FETCHDATA_REQUEST, fetchUserDataSaga);
  yield takeEvery(DELETEDATA_REQUEST, deleteUserDataSaga);
  yield takeEvery(EDITDATA_REQUEST, editUserDataSaga);
}
