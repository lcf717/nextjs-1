/*
 *
 * Alerts actions
 *
 */

import { types } from "./constants";

export function successAlert(payload) {
  return {
    type: types.SUCCESS_SNACKBAR,
    payload,
  };
}
export function errorAlert(payload) {
  return {
    type: types.ERROR_SNACKBAR,
    payload,
  };
}
export function warningAlert(payload) {
  return {
    type: types.WARNING_SNACKBAR,
    payload,
  };
}
export function removeAlert(payload) {
  return {
    type: types.CLEAR_SNACKBAR,
    payload,
  };
}
