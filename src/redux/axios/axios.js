import Axios from "axios";
import { BASE_URL } from "../constants/ApiEndPoints";
import { store } from "../storeConfig/store";
import {
  showLoader,
  hideLoader,
  showSuccessMsg,
  showErrorMsg,
  hideMessage,
} from "redux/actions/loader";

const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const { dispatch } = store;
let token = localStorage.getItem("userToken");

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
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
    if (response.config.method !== "get") {
      dispatch(showSuccessMsg(response.data.message));
    }
    setTimeout(() => {
      dispatch(hideMessage());
    }, 4000);
    dispatch(hideLoader());
    return response;
  },
  function (error) {
    dispatch(hideLoader());
    dispatch(showErrorMsg(error.response.data.message));
    setTimeout(() => {
      dispatch(hideMessage());
    }, 4000);
    return Promise.reject(error);
  }
);

export default axios;
