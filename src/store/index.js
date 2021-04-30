import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './slices/user';
// import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  // here we will be adding reducers
  userReducer
});


const store = configureStore({
  reducer
});

export default store;