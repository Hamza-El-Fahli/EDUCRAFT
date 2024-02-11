import {configureStore} from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import courseReducer from './courseSlice';

// const globalReducer = combineReducers({
//   user :userReducer,
//   course : courseReducer
// })

export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
  },
});
