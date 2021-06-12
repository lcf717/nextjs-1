import { types } from "./constants";

const initialState = {
  loading: false,
  error: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    //Login functionality
    case types.CREATE_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: action.payload,
        error: {},
      };
    case types.CREATE_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    //Password functionality

    case types.CREATE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        password: action.payload,
        error: {},
      };
    case types.CREATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // register functionality

    case types.CREATE_REGISTRATION:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        login: action.payload,
        error: {},
      };
    case types.CREATE_REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
