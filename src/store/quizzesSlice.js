import {createSlice} from '@reduxjs/toolkit';


const initialState = {
 
  quizzes: [],
  selectedGroup: '',
  chapter_id : '',
  answers : [] // like [{ quizzID , answer }]
};

const quizzesReducer = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    //  set courses (ccna 1 or ccna 2 ....)
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    setSelectedQuizGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
    setChapterId: (state, action) => {
      state.chapter_id = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;      
    }
  },
});

export const {setAnswers , setSelectedQuizGroup , setQuizzes, setChapterId} =  quizzesReducer.actions;

export default quizzesReducer.reducer;
