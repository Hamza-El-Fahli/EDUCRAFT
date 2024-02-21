import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import courseReducer from './courseSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
  },
});
