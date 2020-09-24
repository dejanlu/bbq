import firebase from "../api/firebase";
import { USER_LOGIN, USER_LOGOUT, USER_ERROR } from "./actions";

import history from "../history";

export const login = (email, password) => async (dispatch) => {
  const response = await firebase.login(email, password);

  if (response.error) {
    dispatch({
      type: USER_ERROR,
      payload: { message: response.error },
    });
  } else {
    dispatch({
      type: USER_LOGIN,
      payload: response.user,
    });

    history.push("/menu");
  }
};

export const register = (email, password) => async (dispatch) => {
  const response = await firebase.register(email, password);

  if (response.error) {
    dispatch({
      type: USER_ERROR,
      payload: { message: response.error },
    });
  } else {
    dispatch({
      type: USER_LOGIN,
      payload: response.user,
    });

    history.push(`/user/${response.user.uid}`);
  }
};

export const logout = () => {
  firebase.logout();

  return { type: USER_LOGOUT };
};
