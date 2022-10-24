import { CAR_ALL } from "../constants/constants";
const INIT_STATE = {
  cars: null,
};
const car = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CAR_ALL:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default car;
