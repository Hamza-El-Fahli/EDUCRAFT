import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {TempChapters} from './tmpChapters'
const ip = '192.168.6.1';
const port = '7676';

const initialState = {
  course: 1,
  module: [],
  chapter: TempChapters,
  quiz:[],
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
  },

  extraReducers: builder => {
    builder.addCase(setModulesWithApi.fulfilled, (state, action) => {
      state.module = action.payload;
      // console.log(action.payload)
    });
    builder.addCase(setModulesWithApi.pending, () => {
      // console.log(' setModulesWithApi pending');

    });
    builder.addCase(setModulesWithApi.rejected, () => {
      console.log(' setModulesWithApi rejected');
    });

    builder.addCase(setChapter.fulfilled, (state, action) => {
      state.chapter = (action.payload);
    });

    builder.addCase(setChapter.pending, () => {
      // console.log('chapters is pending');
    });

    builder.addCase(setChapter.rejected, () => {
      console.log('setChapter rejected');
    });
  },
});

export const setModulesWithApi = createAsyncThunk(
  'course/setModules',
  async course_id => {
    const result = await fetch(`http://${ip}:${port}/web/modules/${course_id}`);
    const data = await result.json();
    // console.log('executed');

    return data;
  },
);

export const setChapter = createAsyncThunk(
  'course/setChapter',
  async moduleId => {
    const response = await fetch(
      `http://${ip}:${port}/web/chapters/${moduleId}`,
    );
    const data = await response.json();
    // data =[{"id":2,"title":"Types de réseaux","module_id":1}]
    return data;
  },
);














export const {setCourse, setModules, setSelectedModule} = courseReducer.actions;

export default courseReducer.reducer;
