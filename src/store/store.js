import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import courseReducer from './courseSlice';
import quizzesReducer from './quizzesSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    quiz : quizzesReducer
  },
});
