import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const ip = '192.168.6.1';
const port = '7676';

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
      console.log(action);
    },
  },
  extraReducers: builder => {
    builder.addCase(isUser.pending, () => {
      console.log('pandng');
    });
    builder.addCase(isUser.fulfilled, (state, action) => {
      console.log('fulfilled');
      state.userName = action.payload.name;
    });
    builder.addCase(isUser.rejected, () => {
      console.log('rejected');
    });
  },
});

export const isUser = createAsyncThunk(
  'user/isuser',
  async ({email, password}) => {
    const result = await fetch(
      `http://${ip}:${port}/mobile/isuser/${email}/${password}`,
    );
    return result.json();
  },
);

export const {setUserName } = appSlice.actions;
export default appSlice.reducer;
