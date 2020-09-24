import { USER_LOGIN, USER_LOGOUT, USER_ERROR } from "../actions/actions";

const initialState = { user: null, error: null };

export default (state = initialState, action) => {
  if (action.type === USER_LOGIN) {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === USER_LOGOUT) {
    return {
      ...state,
      user: null,
    };
  } else if (action.type === USER_ERROR) {
    return {
      ...state,
      error: action.payload.message,
    };
  }

  return state;
};
