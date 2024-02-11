import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const ip = '192.168.6.1';
const port = '7676';

const initialState = {
  course: 2,
  module: [],
  chapter: [],
};

const courseReducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setModules: (state, action) => {
      state.module = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(setModulesWithApi.fulfilled, (state, action) => {
      state.module = action.payload;
    });
    builder.addCase(setModulesWithApi.pending, () => {
      console.log('pending');
    });
    builder.addCase(setModulesWithApi.rejected, () => {
      console.log('rejected');
    });
  },
});

export const setModulesWithApi = createAsyncThunk(
  'course/setModules',
  async course_id => {
    const result = await fetch(
      `http://${ip}:${port}/mobile/modules/${course_id}`,
    );
    
    const data = await result.json();
    return data;
  },
);

export const {setCourse, setModules} = courseReducer.actions;
export default courseReducer.reducer;
