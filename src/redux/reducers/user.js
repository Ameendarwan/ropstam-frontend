import { USER_LOGIN } from "../constants/constants";
const INIT_STATE = {
  token: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null,
  refreshToken: null,
};
const user = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    default:
      return state;
  }
};

export default user;
