import { put, call, takeEvery } from "redux-saga/effects";
import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  RESET_REQUEST,
} from "./actions";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { db, auth } from "../../services/fireBase.js";
import {
  registerUserSuccess,
  registerUserFailure,
  logoutUserSuccess,
  loginUserSuccess,
  loginUserFailure,
  resetUserSucess,
  resetUserFailure,
} from "./actions";
import { signOut } from "firebase/auth";

function* registerSaga({ payload }) {
  const { email, password, redirectToHomePage } = payload;

  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const user = userCredential.user;

    yield put(registerUserSuccess(user));
    yield redirectToHomePage();
  } catch (error) {
    let error_message = { code: error.code, message: error.message };
    yield put(registerUserFailure(error_message));
  }
}

function* loginSaga({ payload }) {
  const { email, password, redirectToHomePage } = payload;

  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    const user = userCredential.user;
    yield put(loginUserSuccess(user));
    yield redirectToHomePage();
  } catch (error) {
    let error_message = { code: error.code, message: error.message };
    yield put(loginUserFailure(error_message));
  }
}

function* logoutSaga() {
  yield call(signOut, auth);
  yield put(logoutUserSuccess());
}

function* resetSaga({ payload }) {
  try {
    const { email, setSuccess } = payload;

    const emailReset = yield call(sendPasswordResetEmail, auth, email);
    console.log("Email Reset", emailReset);

    yield put(resetUserSucess());
    yield setSuccess(true);
    console.log("email link send susccesfully");
  } catch (error) {
    const error_message = { code: error.code, message: error.message };
    console.log("Error Found in catch block", error_message);
    yield put(resetUserFailure(error_message));
  }
}

export function* watchAuthSaga() {
  yield takeEvery(REGISTER_REQUEST, registerSaga);
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
  yield takeEvery(RESET_REQUEST, resetSaga);
}
