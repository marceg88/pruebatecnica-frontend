import { useDispatch, useSelector } from "react-redux"
import { selectTeacher, findTeacher, selectGetLessonsByTeacherIdState, registerTeacher, getTeacher, selectGetTeacherState } from "../../../store/teacherSlice"
import CardTeacher from "./cardTeacher"
import { useEffect } from "react"
import "./listTeacher.css"
import teachers from "../../../utils/data/teachers"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { selectCourse } from "../../../store/courseSlice"

function ListaProfesores(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teachers = useSelector(selectTeacher)

    useEffect(() => {
        dispatch(getTeacher())
    }, []);   

    return(
        <div className="container_list_teacher">
            <div className="list_teacher_button">
                <h1>Lista de profesores</h1>
                <Button type="primary" onClick={() => navigate("/profesores")}>REGISTRAR</Button>
            </div>
            {teachers?.map(teacher => <CardTeacher key={teacher._id}{...teacher}
            />)}
        </div>
    )
}

export default ListaProfesores