import { all } from "redux-saga/effects";

import {
  authSaga,
  authPasswordSaga,
  authRegistrationSaga,
} from "../Stores/Auth/saga";
export default function* rootSagas() {
  yield all([authSaga(), authPasswordSaga(), authRegistrationSaga()]);
}
