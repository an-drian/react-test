import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './slices/user';
import gaViewIdReducer from './slices/gaViewId';
import dashboardQueuesReducer from './slices/dashboardQueues';

const reducer = combineReducers({
  userReducer,
  gaViewIdReducer,
  dashboardQueuesReducer
});


const store = configureStore({
  reducer
});

export default store;
