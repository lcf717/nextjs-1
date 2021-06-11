import { types } from "./constants";

//Login functionality
export const createLogin = (data, history) => {
  console.log(data);
  return {
    type: types.CREATE_LOGIN,
    payload: data,
    history,
  };
};

export const createLoginSuccess = (payload) => {
  return {
    type: types.CREATE_LOGIN_SUCCESS,
    payload,
  };
};

export const createLoginFailure = (error) => {
  return {
    type: types.CREATE_LOGIN_FAILURE,
    payload: {},
    error: error,
  };
};

//Forgot Password Functionality

export const createPassword = (data) => {
  console.log(data);
  return {
    type: types.CREATE_PASSWORD,
    payload: data,
  };
};

export const createPasswordSuccess = (payload) => {
  return {
    type: types.CREATE_PASSWORD_SUCCESS,
    payload,
  };
};

export const createPasswordFailure = (error) => {
  return {
    type: types.CREATE_PASSWORD_FAILURE,
    payload: {},
    error: error,
  };
};

//Registration functionality
export const createRegistration = (data, history) => {
  console.log(data);
  return {
    type: types.CREATE_REGISTRATION,
    payload: data,
    history,
  };
};

export const createRegistrationSuccess = (payload) => {
  return {
    type: types.CREATE_REGISTRATION_SUCCESS,
    payload,
  };
};

export const createRegistrationFailure = (error) => {
  return {
    type: types.CREATE_REGISTRATION_FAILURE,
    payload: {},
    error: error,
  };
};
