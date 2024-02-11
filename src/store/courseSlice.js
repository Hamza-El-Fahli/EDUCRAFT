import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const ip = '192.168.6.1';
const port = '7676';

const initialState = {
  course: 1,
  module: [],
  chapter: [],
  selectedModule : 1
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
    setSelectedModule : (state,action)=>{
      state.selectedModule = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(setModulesWithApi.fulfilled, (state, action) => {
      state.module = action.payload;
    });
    builder.addCase(setModulesWithApi.pending, () => {});
    builder.addCase(setModulesWithApi.rejected, () => {
      console.log('rejected');
    });

    builder.addCase(setChaptersWithApi.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(setChaptersWithApi.pending, () => {
      console.log('chapters is pending');
    });

    builder.addCase(setChaptersWithApi.rejected, () => {
      console.log('chapters rejected');
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

export const setChaptersWithApi = createAsyncThunk(
  'course/setChapters',
  async module_id => {
    const response = await fetch(
      `http://${ip}:${port}/mobile/chapters/${module_id}`,
    );

    const data = await response.json();
    // data =[{"id":2,"title":"Types de réseaux","module_id":1}]
    return data;
  },
);

export const {setCourse, setModules , setSelectedModule} = courseReducer.actions;
export default courseReducer.reducer;
