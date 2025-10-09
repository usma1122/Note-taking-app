import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./Auth/AuthSaga";
import { watchUserDataSaga } from "./Notes/notesSaga";

export default function* rootSaga() {
  yield all([watchAuthSaga(), watchUserDataSaga()]);
}
