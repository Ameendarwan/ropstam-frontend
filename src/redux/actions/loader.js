import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
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

export const successMsg = (msg) => {
  return {
    type: SHOW_SUCCESS_MESSAGE,
    payload: msg,
  };
};
