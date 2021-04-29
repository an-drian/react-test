import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersEdit } from 'base/network/user';
import { LOADING, SUCCEED, FAILURE } from '../CONSTANTS';

export const fetchUserEdit = createAsyncThunk('user/fetchUserEdit', async () => {
  const response = await getUsersEdit();
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: LOADING,
    user: null,
    errors: {}
  },
  // approach to create basic reducers to mutate global store
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.count += 1;
    // },
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
  extraReducers: {
    [fetchUserEdit.pending]: (state) => {
      state.status = LOADING;
    },
    [fetchUserEdit.fulfilled]: (state, action) => {
      state.status = SUCCEED;
      state.user = action?.payload?.user;
    },
    [fetchUserEdit.rejected]: (state, action) => {
      state.status = FAILURE;
      state.errors = action.errors;
    }
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
