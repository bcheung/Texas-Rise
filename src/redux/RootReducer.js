import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as auth } from '../modules/auth';
import { reducer as main } from '../modules/main';

import * as authTypes from '../modules/auth/actionTypes';

import { formReducerPlugin } from '../modules/form/formReducerPlugin';


// Combine all the reducers
const appReducer = combineReducers({
  auth,
  main,
  form: formReducer.plugin(formReducerPlugin)
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
