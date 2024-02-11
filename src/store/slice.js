import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userToken: '',
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const {setUserName} = appSlice.actions;
export default appSlice.reducer;
