import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './slices/user';
import gaViewIdReducer from './slices/gaViewId';
import dashboardQueuesReducer from './slices/dashboardQueues';
import leadsReducer from './slices/leads';

const reducer = combineReducers({
  userReducer,
  gaViewIdReducer,
  leadsReducer,
  dashboardQueuesReducer
});


const store = configureStore({
  reducer
});

export default store;
