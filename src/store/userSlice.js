import { createSlice} from '@reduxjs/toolkit';


// Create initial state for users
const initialState = {
  username: '',
  userToken: '',
  user : null
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     // reset to default
     resetUser : (state)=>{
      state = initialState
    },
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

export const {setUserName , setUser , resetUser} = appSlice.actions;
export default appSlice.reducer;
