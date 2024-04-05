import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  course: 1,
  module: [],
  chapters: [],
  quizzesByModule: [],
  quizzesForPage: [],
  selectedModule: 0,
  selectedModule_id:'',
  selectedChapter: 1,
  score : null
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
      state.selectedModule_id = state.module[action.payload]._id
      
    },
        // store data requested from the server 
    setChapters: (state, action) => {
      state.chapters = action.payload;
    },
    // detect the current module the user Clicked ( usable when requesting Quiz questions ) 
    setSelecteChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
    // store user's answers 
    setScore:(state,action)=>{
      state.score = action.payload
    },
    setQuizzesByModule : (state,action)=>{
      state.quizzesByModule = action.payload
    },
    setQuizzesForPage : (state,action)=>{
      state.quizzesForPage = action.payload
    }
  },
});

export const {setCourse, setModules, setChapters, setSelectedModule,setScore , setQuizzesByModule,setQuizzesForPage} =
  courseReducer.actions;

export default courseReducer.reducer;
