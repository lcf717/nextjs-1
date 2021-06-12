import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "./constants";
import axios from "axios";
import history from "../../utils/history";
import {
  createLoginSuccess,
  createLoginFailure,
  createPasswordSuccess,
  createPasswordFailure,
  createRegistrationSuccess,
  createRegistrationFailure,
} from "./actions";
import { successAlert, errorAlert } from "../Alerts/actions";
const BACKEND_URI = "http://demo.thingsboard.io/api";

console.log("history", history);
//Login Saga
function* addLogin({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${BACKEND_URI}/auth/login`,
      payload
    );

    console.log("response>>>", response);
    yield put(createLoginSuccess({ data: response.data }));
    history.push("/dashboard");
  } catch (error) {
    yield put(createLoginFailure(error));
    yield put(errorAlert(error.response.data.message));
    console.log("error>>>", error.response.data.message);
  }
}

export function* authSaga() {
  yield takeEvery(types.CREATE_LOGIN, addLogin);
}

//Password Saga

function* addPassword({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${BACKEND_URI}/noauth/resetPasswordByEmail`,
      payload
    );

    console.log("response>>>", response);
    yield put(createPasswordSuccess({ data: response.data }));
    yield put(successAlert("Sended Mail Successfully"));
  } catch (error) {
    yield put(createPasswordFailure(error));
    yield put(errorAlert(error.response.data.message));

    console.log("error>>>", error.response.data.message);
  }
}

export function* authPasswordSaga() {
  yield takeEvery(types.CREATE_PASSWORD, addPassword);
}
//Register Saga

function* addRegistration({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${BACKEND_URI}/noauth/signup`,
      payload
    );

    console.log("response>>>", response);
    yield put(createRegistrationSuccess({ data: response.data }));
    history.push("/dashboard");
  } catch (error) {
    yield put(createRegistrationFailure(error));
    yield put(errorAlert(error.response.data.message));
    console.log("error>>>", error.response.data.message);
  }
}

export function* authRegistrationSaga() {
  yield takeEvery(types.CREATE_REGISTRATION, addRegistration);
}
