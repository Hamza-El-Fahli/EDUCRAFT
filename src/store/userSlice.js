import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { _WEB_URL } from '../GlobalConfig';
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
  },
  extraReducers: builder => {
    builder.addCase(isUser.pending, () => {});
    builder.addCase(isUser.fulfilled, (state, action) => {
      state.username = action.payload.name;
    });
    builder.addCase(isUser.rejected, () => {
      console.log('Uthentification rejected');
    });
  },
});

export const isUser = createAsyncThunk(
  'user/isuser',
  async ({email, password}) => {
    // const result = await fetch( `http://${ip}:${port}/mobile/isuser/${email}/${password}`);
    const result = await fetch( `${_WEB_URL}/isuser/${email}/${password}`);
    const data = await result.json();
    return data;
  },
);

export const {setUserName} = appSlice.actions;
export default appSlice.reducer;
