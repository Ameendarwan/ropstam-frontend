import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR_MESSAGE,
  HIDE_MESSAGE,
} from "../constants/constants";

const INIT_STATE = {
  loader: false,
  successMsg: "",
  showSuccessMsg: false,
  errorMsg: "",
  showErrorMsg: false,
};

const loader = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        loader: false,
        showSuccessMsg: true,
        successMsg: action.payload,
      };
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        loader: false,
        showErrorMsg: true,
        errorMsg: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        showErrorMsg: false,
        showSuccessMsg: false,
      };
    default:
      return state;
  }
};

export default loader;
