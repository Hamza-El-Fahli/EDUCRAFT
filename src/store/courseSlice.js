import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
    course : 1 ,
    module : 1,
    chapter : 1,
}


const courseReducer = createSlice({
    name : 'course',
    initialState ,
    reducers:{
        setCourse : (state,action)=>{
            state.course = action.payload
        }
    }
})




export const { setCourse } = courseReducer.actions
export default courseReducer.reducer