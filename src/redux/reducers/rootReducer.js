import { combineReducers } from "redux";
import user from "./user";
import car from "./car";
import category from "./category";
import loader from "./loader";

const rootReducer = combineReducers({
  user,
  car,
  category,
  loader,
});

export default rootReducer;
