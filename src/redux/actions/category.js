import axios from "redux/axios/axios";
import {
  all_categories,
  add_category,
  update_category,
  delete_category,
} from "redux/constants/ApiEndPoints";
import { CATEGORIES_ALL } from "redux/constants/constants";

export const getAllCategories = () => {
  return async (dispatch) => {
    const { data } = await axios.get(all_categories);
    dispatch({ type: CATEGORIES_ALL, payload: data.data });
    return data;
  };
};

export const addCategory = (details) => {
  return async (dispatch) => {
    const { data } = await axios.post(add_category, details);
    dispatch(getAllCategories());
    return data;
  };
};

export const updateCategory = (details) => {
  return async (dispatch) => {
    const { data } = await axios.put(update_category, details);
    dispatch(getAllCategories());
    return data;
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`${delete_category}/${id}`);
    dispatch(getAllCategories());
    return data;
  };
};
