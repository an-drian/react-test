import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGAViewIds } from 'base/network/gaViews';
import { LOADING, SUCCEED, FAILURE } from 'store/CONSTANTS';

export const initialState = {
  status: LOADING,
  ids: [],
  errors: {}
};

export const fetchGAViewIds = createAsyncThunk('gaViewIdsSlice/fetchGAViewIds', async () => {
  const response = await getGAViewIds();
  return response.data;
});

export const gaViewIdsSlice = createSlice({
  name: 'gaViewIdsSlice',
  initialState,
  extraReducers: {
    [fetchGAViewIds.pending]: (state) => {
      state.status = LOADING;
    },
    [fetchGAViewIds.fulfilled]: (state, action) => {
      console.log(action);
      state.status = SUCCEED;
    },
    [fetchGAViewIds.rejected]: (state) => {
      state.status = FAILURE;
    }
  }
});

export default gaViewIdsSlice.reducer;
