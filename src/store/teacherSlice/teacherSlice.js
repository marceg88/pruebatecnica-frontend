import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReactAPI } from "../../services/conectionAPI";

export const registerTeacher = createAsyncThunk(
    "teacher/registerTeacher",
    (values) => ReactAPI.registerTeacher(values)
)

export const findTeacher = createAsyncThunk(
    "teacher/findTeacher",
    (teacherId) => ReactAPI.findTeacher(teacherId)
)

export const getLessonsByTeacherId = createAsyncThunk(
    "teacher/getLessonsByTeacherId",
    (teacherId) => ReactAPI.getLessonsByTeacherId(teacherId)
)

export const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        teacher: JSON.parse(window.localStorage.getItem('teacher')),
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
        } 
    },
    reducers: {
        resetTeacherMethodsMessage(state, action){
            state[action.payload].message = '';
            state[action.payload].status = '';
        },
        setTeacher(state, action) {
            state.teacher = action.payload;
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(registerTeacher.fulfilled, (state, action) => {
                
                console.log(action.payload);

                if (action.payload.status === 'Failed') {
                    state.registerTeacherState.message = 'Ocurrió un error al tratar de registrar el Profesor.';
                    state.registerTeacherState.status = 'Failed';
                }

                if (action.payload.status === 'OK') {
                    state.registerTeacherState.message = 'El Profesor fue registrado exitosamente.';
                    state.registerTeacherState.status = 'OK';
                    window.localStorage.setItem('teacher', JSON.stringify(action.payload.data));
                    state.teacher = action.payload.data;
                    return;
                }
            })
                //
                
                .addCase(findTeacher.fulfilled, (state, action) => {
                    state.findTeacherState.loading = false;
                    state.findTeacherState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.teacher = null;
                        state.findTeacherState.message = 'Ocurrió un error al tratar de obtener el teacher 😔.';
                    }

                    if (action.payload.status === 'OK') {
                        state.findTeacherState.message = 'El teacher fue exitosamente encontrado 😊.';
                        state.findTeacherState.status = 'OK';
                        window.localStorage.setItem('teacher', JSON.stringify(action.payload.data));
                        state.teacher = action.payload.data;
                        return;
                    }

                })
                //
                .addCase(getLessonsByTeacherId.fulfilled, (state, action) => {
                    state.getLessonsByTeacherIdState.loading = false;
                    state.getLessonsByTeacherIdState.error = false;
                    console.log(action.payload)

                    if (action.payload.status === 'Failed') {
                        state.getLessonsByTeacherIdState.message = 'Los lessons no puedieron ser listados. Porfavor intente otra vez 😔.';
                        state.getLessonsByTeacherIdState.status = 'Failed'
                    }

                    if (action.payload.status === 'OK') {
                        state.teacher.lessons = action.payload.data;
                        return;
                    }
                })
        }   
})

export const { resetTeacherMethodsMessage, setTeacher } = teacherSlice.actions

export const selectTeacher = (state) => state.teacher.teacher
export const selectRegisterTeacherState = (state) => state.teacher.registerTeacherState
export const selectFindTeacherState = (state) => state.teacher.findTeacherState
export const selectGetLessonsByTeacherIdState = (state) => state.teacher.getLessonsByTeacherId

export default teacherSlice.reducer