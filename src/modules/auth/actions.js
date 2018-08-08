import firebase from 'firebase';
import * as fbAPI from './../../core/firebase/fbAPI';
import * as types from './actionTypes';
import NavigationService from '../../core/navigation/NavigationService';

export const clearForm = () => {
  return {
    type: types.CLEAR_FORM
  };
};

export const inputUpdate = ({ prop, value }) => {
  return {
    type: types.INPUT_CHANGED,
    payload: { prop, value }
  };
};

export const initializationStart = () => {
  return {
    type: types.INITIALIZATION_START
  };
};

export const authRequest = () => {
  return {
    type: types.AUTH_REQUEST
  };
};

export const loginRequest = data => {
  return {
    type: types.LOGIN_REQUEST,
    data
  };
};

  // data = { firstName, lastName, year, email, role, password, confirmPassword }
export const registerRequest = data => {
  return {
    type: types.REGISTER_REQUEST,
    data
  };
};

export const logoutRequest = () => {
  return {
    type: types.LOGOUT_REQUEST
  };
};
