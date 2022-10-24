import axios from "redux/axios/axios";
import {
  all_cars,
  add_car,
  update_car,
  delete_car,
} from "redux/constants/ApiEndPoints";
import { CAR_ALL } from "redux/constants/constants";

export const getAllCars = () => {
  return async (dispatch) => {
    const { data } = await axios.get(all_cars);
    dispatch({ type: CAR_ALL, payload: data.data });
    return data;
  };
};

export const addCar = (details) => {
  return async (dispatch) => {
    const { data } = await axios.post(add_car, details);
    dispatch(getAllCars());
    return data;
  };
};

export const updateCar = (details) => {
  return async (dispatch) => {
    const { data } = await axios.put(update_car, details);
    dispatch(getAllCars());
    return data;
  };
};

export const deleteCar = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`${delete_car}/${id}`);
    dispatch(getAllCars());
    return data;
  };
};
