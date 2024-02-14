import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_API_URL} from '../GlobalConfig';
const ip = '192.168.6.1';
const port = '7676';

const initialState = {
  username: '',
  userToken: '',
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  }
});

export const {setUserName} = appSlice.actions;
export default appSlice.reducer;
