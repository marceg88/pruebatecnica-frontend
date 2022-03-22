import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReactAPI } from "../../services/conectionAPI";

export const registerLessons = createAsyncThunk(
    "lessons/registerLessons",
    (values) => ReactAPI.registerLessons(values)
)



export const lessonsSlice = createSlice({
    name: "lessons",
    initialState: {
        lessons: JSON.parse(window.localStorage.getItem('lessons')),
        registerLessonsState: {
            message: "",
            status: ""
        },
        
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
            .addCase(registerLessons.fulfilled, (state, action) => {
                
                console.log(action.payload);

                if (action.payload.status === 'Failed') {
                    state.registerLessonsState.message = 'Ocurrió un error al tratar de registrar el Register 😔.';
                    state.registerLessonsState.status = 'Failed';
                }

                if (action.payload.status === 'OK') {
                    state.registerLessonsState.message = 'El Register fue exitosamente registrado 😊.';
                    state.registerLessonsState.status = 'OK';
                    window.localStorage.setItem('lessons', JSON.stringify(action.payload.data));
                    return;
                }
            })
        }
    })

export const { resetLessonsMethodsMessage } = lessonsSlice.actions

export const selectLessons = (state) => state.lessons
export const selectRegisterLessonsState = (state) => state.lessons.registerLessonsState

export default lessonsSlice.reducer