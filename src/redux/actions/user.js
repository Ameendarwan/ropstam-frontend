import axios from "redux/axios/axios";
import { user_register, user_login } from "redux/constants/ApiEndPoints";
import { USER_LOGIN } from "redux/constants/constants";

export const regiter = (details) => {
  return async (dispatch) => {
    const { data } = await axios.post(user_register, details);
    return data;
  };
};

export const login = (details) => {
  return async (dispatch) => {
    const { data } = await axios.post(user_login, details);
    dispatch({ type: USER_LOGIN, payload: data });
    return data;
  };
};
