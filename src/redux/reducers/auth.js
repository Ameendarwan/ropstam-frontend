// import { USER_SIGIN } from '../constants/constants';
const INIT_STATE = {
  user_data: null,
  token: null,
};
const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    // case USER_SIGIN:
    //     return {
    //         ...state,
    //     }
    default:
      return state;
  }
};

export default auth;
