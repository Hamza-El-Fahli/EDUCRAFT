import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  course: 1,
  module: [],
  chapter: null,
  quiz: [],
  quizzesByModule: [],
  selectedModule: 0,
  selectedChapter: 1,
  GivenAnswers : []
};

const courseReducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    //  set courses (ccna 1 or ccna 2 ....)
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    // store data requested from the server 
    setModules: (state, action) => {
      state.module = action.payload;
    },
    // detect the current module the user sees ( usable when requesting chapters ) 
    setSelectedModule: (state, action) => {
      state.selectedModule = action.payload;
    },
        // store data requested from the server 
    setChapters: (state, action) => {
      state.chapter = action.payload;
    },
    // detect the current module the user Clicked ( usable when requesting Quiz questions ) 
    setSelecteChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
    // store user's answers 
    setGivenAnswers:(state,action)=>{
      state.GivenAnswers = action.payload
    },
    setQuizzesByModule : (state,action)=>{
      state.quizzesByModule = action.payload
    }
  },
});

export const {setCourse, setModules, setChapters, setSelectedModule,setGivenAnswers , setQuizzesByModule} =
  courseReducer.actions;

export default courseReducer.reducer;
