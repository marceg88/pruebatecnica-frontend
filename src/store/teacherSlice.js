import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReactAPI } from "../services/conectionAPI";

export const getTeacher = createAsyncThunk(
    "teacher/getTeacher",
    ReactAPI.getTeacher
)

// export const findLessonsByOwner = createAsyncThunk(
//     "teacher/findLessonsByOwner",
//     (teacherId) => ReactAPI.findLessonsByOwner(teacherId)
// )

export const findTeacher = createAsyncThunk(
    "teacher/findTeacher",
    (teacherId) => ReactAPI.findTeacher(teacherId)
)

export const registerTeacher = createAsyncThunk(
    "teacher/registerTeacher",
    (data) => ReactAPI.registerTeacher(data)
)

export const getLessonsByTeacherId = createAsyncThunk(
    "teacher/getLessonsByTeacherId",
    (teacherId) => ReactAPI.getLessonsByTeacherId(teacherId)
)

export const deleteTeacherById = createAsyncThunk(
    "teacher/deleteTeacherById",
    (teacherId) => ReactAPI.deleteTeacher(teacherId)
)


export const getByMounth = createAsyncThunk(
    "teacher/getByMounth",
    (mounth) => ReactAPI.getByMounth(mounth)
)


export const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        teacher: [],
        getTeacherState: {
            message: "",
            status: ""
        },
        registerTeacherState: {
            message: "",
            status: ""
        },
        findTeacherState: {
            message: "",
            status: ""
        },
        getLessonsByTeacherIdState: {
            message: "",
            status: ""
        },
        
        getByMounthState: {
            message: "",
            status: ""
        },
        deleteTeacherByIdState: {
            message: "",
            status: ""
        }
    },
    reducers: {
        resetTeacherMethodsMessage:
        (state) =>{
            state.registerTeacherState =
            {
                message: '',
                status: ''
            }
        },
        setTeacher(state, action) {
            state.teacher = action.payload;
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(getTeacher.fulfilled, (state, action) => {
                    
                console.log("getTeacher",action.payload);
                const { message, status } = action.payload
                state.getTeacherState = {
                    message,
                    status
                }
                state.teacher = action.payload.data
            })
            .addCase(findTeacher.fulfilled, (state, action) => {
                
                console.log("findTeacher",action.payload);
                const { message, status } = action.payload
                state.findTeacherState = {
                    message,
                    status
                }
                state.teacher = action.payload.data
            })
            .addCase(registerTeacher.fulfilled, (state, action) => {
                
                console.log("registrar",action.payload);
                const { message, status } = action.payload
                state.registerTeacherState = {
                    message,
                    status
                }
               
                state.teacher = action.payload.data
            })
            
            .addCase(getByMounth.fulfilled, (state, action) => {
                
                console.log("getByMounth",action.payload);
                const { message, status } = action.payload
                state.getByMounthState = {
                    message,
                    status
                }
                state.teacher = action.payload.data
            })
            .addCase(deleteTeacherById.fulfilled, (state, action) => {
                
                console.log("deleteTeacherById",action.payload);
                const { message, status } = action.payload
                state.deleteTeacherById = {
                    message,
                    status
                }
                
                state.teacher = action.payload.data;
            })
        }   
})

export const { resetTeacherMethodsMessage, setTeacher } = teacherSlice.actions

export const selectTeacher = (state) => state.teacher.teacher
export const selectRegisterTeacherState = (state) => state.teacher.registerTeacherState
export const selectFindTeacherState = (state) => state.teacher.findTeacherState
export const selectGetLessonsByTeacherIdState = (state) => state.teacher.getLessonsByTeacherId
export const selectGetTeacherState = (state) => state.teacher.getTeacherState
// export const selectFindLessonsByOwner = (state) => state.teacher.findLessonsByOwnerState
export const selectgetByMounth = (state) => state.teacher.getByMounthState
export default teacherSlice.reducer