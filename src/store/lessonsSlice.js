import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReactAPI } from "../services/conectionAPI";

export const findLessonsByOwner = createAsyncThunk(
    "lessons/findLessonsByOwner",
    (teacherId) => ReactAPI.findLessonsByOwner(teacherId)
)

export const registerLessons = createAsyncThunk(
    "lessons/registerLessons",
    (values) => ReactAPI.registerLessons(values)
)

export const findLessonsByCourse = createAsyncThunk(
    "lessons/findLessonsByCourse",
    (nameCourse) => ReactAPI.findLessonsByCourse(nameCourse)
)

export const deleteLessonsById = createAsyncThunk(
    "lessons/deleteLessonsById",
    (lessonId) => ReactAPI.deleteLesson(lessonId)
)

export const lessonsSlice = createSlice({
    name: "lessons",
    initialState: {
        lessons: [],
        registerLessonsState: {
            message: "",
            status: ""
        },
        findLessonsByCourseState: {
            message: "",
            status: ""
        },
        findLessonsByOwnerState: {
            message: "",
            status: ""
        },
        deleteLessonsByIdState: {
            message: "",
            status: ""
        }
    },
    reducers: {
        resetLessonsMethodsMessage(state, action){
            state[action.payload].message = '';
            state[action.payload].status = '';
        },
        setLessons(state, action) {
            state.lessons = action.payload;
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(findLessonsByOwner.fulfilled, (state, action) => {
                
                console.log("findLessonsByOwner",action.payload);
                const { message, status } = action.payload
                state.findLessonsByOwnerState = {
                    message,
                    status
                }
                state.lessons = action.payload.data
            })
            .addCase(registerLessons.fulfilled, (state, action) => {
                
                console.log("registerLessons",action.payload);
                const { message, status } = action.payload
                state.registerLessonsState = {
                    message,
                    status
                }
                state.lessons = action.payload.data
            })
            
            .addCase(findLessonsByCourse.fulfilled, (state, action) => {
                
                console.log("findLessonsByCourse",action.payload);
                const { message, status } = action.payload
                state.findLessonsByCourseState = {
                    message,
                    status
                }
                state.lessons = action.payload.data
            })
            .addCase(deleteLessonsById.fulfilled, (state, action) => {
                
                console.log("deleteLessonsById",action.payload);
                const { message, status } = action.payload
                state.deleteLessonsById = {
                    message,
                    status
                }
                
                state.lessons = action.payload.data;
            })
            
        }
    })

export const { resetLessonsMethodsMessage } = lessonsSlice.actions

export const selectLessons = (state) => state.lessons.lessons
export const selectRegisterLessonsState = (state) => state.lessons.registerLessonsState
export const selectfindLessonsByCourse = (state) => state.lessons.findLessonsByCourse
export const selectFindLessonsByOwner = (state) => state.lessons.findLessonsByOwner
export default lessonsSlice.reducer