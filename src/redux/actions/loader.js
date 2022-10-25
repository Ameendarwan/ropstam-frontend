import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR_MESSAGE,
  HIDE_MESSAGE,
} from "../constants/constants";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showSuccessMsg = (msg) => {
  return {
    type: SHOW_SUCCESS_MESSAGE,
    payload: msg,
  };
};

export const showErrorMsg = (msg) => {
  return {
    type: SHOW_ERROR_MESSAGE,
    payload: msg,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
