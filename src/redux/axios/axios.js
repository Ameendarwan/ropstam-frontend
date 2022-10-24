import Axios from "axios";
import { BASE_URL } from "../constants/ApiEndPoints";
import { store } from "../storeConfig/store";
import { showLoader, hideLoader, successMsg } from "redux/actions/loader";

const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const { dispatch } = store;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    dispatch(showLoader());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// // Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    if (response.config.method != "get")
      dispatch(successMsg(response.data.message));
    dispatch(hideLoader());
    return response;
  },
  function (error) {
    dispatch(hideLoader());
    return Promise.reject(error);
  }
);

export default axios;
