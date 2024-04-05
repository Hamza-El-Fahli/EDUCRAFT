import { createSlice} from '@reduxjs/toolkit';


// Create initial state for users
const initialState = {
  username: 'hamza',
  userToken: '',
  user : {"_id": "65e5e5435548b1378de505f3", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU1ZTU0MzU1NDhiMTM3OGRlNTA1ZjMiLCJuYW1lIjoiaGFtemEiLCJwcm9maWxlIjoicHJvZiIsImlhdCI6MTcxMjM1MTM3MX0.-GnrdDkBFE-h8yryRAjvyYs_JuNuNPgTrzKjFDz887A", "annee": 2, "email": "h@mail.ru", "filiere": "TSSRI", "name": "hamza", "password": "147258", "profile": "prof"}
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
