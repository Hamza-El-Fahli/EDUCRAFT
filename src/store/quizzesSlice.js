import {createSlice} from '@reduxjs/toolkit';


const initialState = {
 
  quizzes: [],
  selectedGroup: '',
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
    // store data requested from the server 
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;      
    }
  },
});

export const {setAnswers  , setSelectedGroup , setQuizzes} =  quizzesReducer.actions;

export default quizzesReducer.reducer;
