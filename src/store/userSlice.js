import { createSlice} from '@reduxjs/toolkit';


// Create initial state for users
const initialState = {
  username: '',
  userToken: '',
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set User name to show on main and profile screen
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    // get user's token to maintain loging in 
    setUserNameToken: (state, action) => {
      state.userToken = action.payload;
    },
  }
});

export const {setUserName} = appSlice.actions;
export default appSlice.reducer;
