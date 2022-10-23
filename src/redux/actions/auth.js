import axios from "../axios/axios";
import {
	sign_in,
	sign_up,
	change_password,
	forgot_password,
	reset_password,
} from "../constants/ApiEndPoints";

export const userSignIn = (values) => {
	return async (dispatch) => {
		const { data } = await axios.post(sign_in, values);
		localStorage.setItem("userEmail", data?.data?.info?.email);
		localStorage.setItem("token", data?.data?.info?.auth?.token);
		window.location.href = "/";
		return data;
	};
};
export const userSignUp = (values) => {
	return async (dispatch) => {
		const { data } = await axios.post(sign_up, {
			firstName: "string",
			lastName: "string",
			email: "string",
			password: "string",
			type: 0,
		});
		return data;
	};
};
export const userChangePassword = (values) => {
	return async (dispatch) => {
		const { data } = await axios.post(change_password, {
			user_id: values.email,
			password: values.password,
			new_password: 0,
		});
		return data;
	};
};
export const userForgotPassword = (values) => {
	return async (dispatch) => {
		const { data } = await axios.post(forgot_password, values);
		return data;
	};
};
export const userResetPassword = (values) => {
	return async (dispatch) => {
		const { data } = await axios.post(reset_password, {
			email: values.email,
			token: values.token,
			password: values.password,
			password_confirmation: values.password,
		});
		return data;
	};
};
