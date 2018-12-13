import * as types from './types';
import user from '../../data/user.json'

/*
export function LogIn(password, email) {
    return (dispatch, getState) => {
        if ( email === user.email && password === user.password ) {
            dispatch(setLoggedInState(true));
            return true;
        }
        dispatch(setLoggedInState(false));
        return false;
    }
}

export function setLoggedInState(loggedInState) {
    return {
        type: types.SET_LOGGED_IN_STATE,
        loggedInState,
    }
} */

const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  const action = (dispatch) => {
    if (email === user.email && password === user.password) {
      dispatch(setLoggedInState(true));
      return true;
    }
    dispatch(setLoggedInState(false));
    return false;
  };
  return action;
};

export {
  logIn,
  setLoggedInState,
};