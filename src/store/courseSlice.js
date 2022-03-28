import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReactAPI } from "../services/conectionAPI";

export const registerCourse = createAsyncThunk(
    "course/registerCourse",
    (data) => ReactAPI.registerCourse(data)
)

export const courseSlice = createSlice({
    name: "course",
    initialState: {
        course: null,
        registerCourseState: {
            message: "",
            status: ""
        }
    },
    reducers: {
        resetCourseMethodsMessage(state, action){
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers: 
    (builder) => {
        builder
            //* registerCourse Method Thunk */

            .addCase(registerCourse.fulfilled, (state, action) => {
                // state.registerCourseState.loading = false;
                // state.registerCourseState.error = false;
                console.log(action.payload);

                if (action.payload.status === 'Failed') {
                    state.registerCourseState.message = 'El curso ya fue registrado.';
                    state.registerCourseState.status = 'Failed';
                    return;
                }

                if (action.payload.status === 'OK') {
                    state.registerCourseState.message = 'El curso fue registrado con exito.';
                    state.registerCourseState.status = 'OK';
                    return;
                }
            })
    }
})

export const { resetCourseMethodsMessage } = courseSlice.actions

export const selectCourse = (state) => state.course
export const selectRegisterCourseState = (state) => state.course.registerCourseState

export default courseSlice.reducer