import { createSlice} from '@reduxjs/toolkit';


// Create initial state for users
const initialState = {
  username: '',
  userToken: '',
  user : {}
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
    setUser : (state , action)=>{
        state.user = {...action.payload}
    }
  }
});

export const {setUserName , setUser} = appSlice.actions;
export default appSlice.reducer;
