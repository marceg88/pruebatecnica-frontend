import { Button } from "antd";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  findLessonsByOwner, selectLessons } from "../../../store/lessonsSlice";
import { getTeacher, selectTeacher } from "../../../store/teacherSlice";
import { courses } from "../../Courses/ListCourse/listCourses";

import CardDetailHour from "./cardDetailHour";

import "./listLessons.css"

function ListLessons() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const lessons =  useSelector(selectLessons)
    const teacher = useSelector(selectTeacher)
    const {teacherId} = useParams()

    useEffect(() => {
        dispatch(findLessonsByOwner(teacherId))
    }, [])

    return(
        <div className="list_lessons">
            
            <div className="button_regresar">
                <h1>El profesor dicto:</h1>
                <Button type="primary" onClick={() => navigate("/profesores/lista")}>REGRESAR</Button>
                
            </div>
               {lessons?.map(item => <CardDetailHour key={item._id}{...item} id={item._id}/>)}
        </div>
        
    )
}

export default ListLessons