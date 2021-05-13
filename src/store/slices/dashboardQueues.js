import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDashboardQueues } from 'base/network/dashboardQueues';
import { LOADING, SUCCEED, FAILURE } from 'store/CONSTANTS';

export const initialState = {
  status: LOADING,
  queues: [],
  errors: {}
};

export const fetchDashboardQueues = createAsyncThunk(
  'dashboardQueuesSlice/fetchDashboardQueues',
  async (id) => {
    const response = await getDashboardQueues(id);
    return response.data;
});

export const dashboardQueuesSlice = createSlice({
  name: 'gaViewIdsSlice',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchDashboardQueues.pending]: (state) => {
      state.status = LOADING;
    },
    [fetchDashboardQueues.fulfilled]: (state, action) => {
      console.log(action.payload?.dashboard_queues);
      state.queues = action.payload?.dashboard_queues;
      state.status = SUCCEED;
    },
    [fetchDashboardQueues.rejected]: (state) => {
      state.status = FAILURE;
    }
  }
});

export const { setSelectedId } = dashboardQueuesSlice.actions;

export default dashboardQueuesSlice.reducer;
