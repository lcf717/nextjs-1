/*
 *
 * Alerts reducer
 *
 */
import { types } from "./constants";

const initialState = {
  successSnackBarOpen: false,
  errorSnackBarOpen: false,
  warningSnackBarOpen: false,
  successSnackBarMessage: "",
  errorSnackBarMessage: "",
  warningSnackBarMessage: "",
};

/* eslint-disable default-case, no-param-reassign */
export default function alertProviderReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_SNACKBAR:
      return {
        ...state,
        successSnackBarOpen: true,
        successSnackBarMessage: action.payload,
      };
    case types.ERROR_SNACKBAR:
      console.log(action.payload);
      return {
        ...state,
        errorSnackBarOpen: true,
        errorSnackBarMessage: action.payload,
      };

    case types.WARNING_SNACKBAR:
      return {
        ...state,
        warningSnackBarOpen: true,
        warningSnackBarMessage: action.payload,
      };

    case types.CLEAR_SNACKBAR:
      if (action.payload === "success") {
        return {
          ...state,
          successSnackBarOpen: false,
          successSnackBarMessage: "",
        };
      } else if (action.payload === "warning") {
        return {
          ...state,
          warningSnackBarOpen: false,
          warningSnackBarMessage: "",
        };
      } else if (action.payload === "error") {
        return {
          ...state,
          errorSnackBarOpen: false,
          errorSnackBarMessage: "",
        };
      }

    default:
      return state;
  }
}
