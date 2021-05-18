import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLeadById, geAllLeads } from 'base/network/leads';
import { LOADING, SUCCEED, FAILURE } from 'store/CONSTANTS';

export const initialState = {
  status: LOADING,
  page: 1,
  leads: [],
  lead: null,
  errors: {}
};

export const fetchLeadById = createAsyncThunk(
  'leadsSlice/fetchLeadById',
  async (id) => {
    const response = await getLeadById(id);
    return response.data;
  });

export const fetchAllLeads = createAsyncThunk(
  'leadsSlice/fetchAllLeads',
  async ({ page, gaViewId, ...rest }) => {
    const response = await geAllLeads({ page, gaViewId, ...rest });
    return response.data;
  });

export const leadsSlice = createSlice({
  name: 'leadsSlice',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchLeadById.pending]: (state) => {
      state.status = LOADING;
    },
    [fetchLeadById.fulfilled]: (state, action) => {
      state.queues = action.payload?.lead;
      state.status = SUCCEED;
    },
    [fetchLeadById.rejected]: (state) => {
      state.status = FAILURE;
    },

    [fetchAllLeads.pending]: (state) => {
      state.status = LOADING;
    },
    [fetchAllLeads.fulfilled]: (state, action) => {
      state.queues = action.payload?.leads;
      state.status = SUCCEED;
    },
    [fetchAllLeads.rejected]: (state) => {
      state.status = FAILURE;
    }
  }
});


export default leadsSlice.reducer;
