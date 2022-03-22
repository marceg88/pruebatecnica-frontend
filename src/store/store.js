import { configureStore } from "@reduxjs/toolkit";

import teacherReducer from "./teacherSlice/teacherSlice"
import courseReducer from "./courseSlice/course.slice"
import lessonsReducer from "./lessonsSlice/lessonsSlice"

export const store = configureStore({
    reducer: {
        teacher: teacherReducer,
        course: courseReducer,
        lessons: lessonsReducer
    }
})