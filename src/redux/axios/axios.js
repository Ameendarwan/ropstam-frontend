import Axios from "axios";
import { BASE_URL } from "../constants/ApiEndPoints";
import { store } from "../storeConfig/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	showLoader,
	hideLoader,
	showSuccessMsg,
	hideMessage,
	showErrorMsg,
} from "../actions/loader";
const axios = Axios.create({
	baseURL: BASE_URL,
	timeout: 30000,
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
		dispatch(hideLoader());
		return Promise.reject(error);
	}
);
// // Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		dispatch(hideLoader());
		let res = response.data;
		if (response.config.method != "get" && res.success === true)
			toast.success("Success!");
		if (res?.success === false) toast.error("Success!");
		return response;
	},
	function (error) {
		let err = error.response;
		const errorMsg =
			err && err.data.data ? err.data.data.message : "Unexpected error";
		dispatch(hideLoader());
		toast.error("Failed!");
		return Promise.reject(error);
	}
);

export default axios;
