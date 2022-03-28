import { configureStore } from "@reduxjs/toolkit";

import teacherReducer from "./teacherSlice"
import courseReducer from "./courseSlice"
import lessonsReducer from "./lessonsSlice"

export const store = configureStore({
    reducer: {
        teacher: teacherReducer,
        course: courseReducer,
        lessons: lessonsReducer
    }
})