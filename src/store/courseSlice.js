import {createSlice} from '@reduxjs/toolkit';

import {_API_URL, _MOBILE_URL} from '../GlobalConfig';

const initialState = {
  course: 1,
  module: [],
  chapter: null,
  quiz: [],
  selectedModule: 0,
};

const courseReducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSelectedModule: (state, action) => {
      state.selectedModule = action.payload;
    },
    setModules: (state, action) => {
      state.module = action.payload;
    },
    setChapters: (state, action) => {
      state.chapter = action.payload;
    },
  },
});

export const {setCourse, setModules, setChapters, setSelectedModule} =
  courseReducer.actions;

export default courseReducer.reducer;
