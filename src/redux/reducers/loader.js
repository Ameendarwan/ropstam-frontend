import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../constants/constants";

const INIT_STATE = {
  loader: false,
  successMsg: "",
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

    default:
      return state;
  }
};

export default loader;
