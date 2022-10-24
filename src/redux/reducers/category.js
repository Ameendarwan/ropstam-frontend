import { CATEGORIES_ALL } from "../constants/constants";
const INIT_STATE = {
  categories: null,
};
const category = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_ALL:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default category;
