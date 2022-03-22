import { Card }  from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { findTeacher, selectTeacher } from "../../../store/teacherSlice/teacherSlice"

import CardDetail from "./cardDetail"

function Detalle(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { teacherid } = useParams()
    
    const teacher = useSelector(selectTeacher)
    const lessons = teacher.lessons
    console.log("teacher",lessons)

    useEffect(() => {
        dispatch(findTeacher(teacherId))
    }, [dispatch, teacherId]);

    return(
        <div>
            <CardDetail key={teacherid} 
                id={teacherid}
                name={teacher[teacherid].name}
                numberId={teacher[teacherid].numberId}
                dateBirth={teacher[teacherid].dateBirth}
                role={teacher[teacherid].role}
                currency={teacher[teacherid].currency}
                price={teacher[teacherid].price}
            />
        </div>
    )
}

export default Detalle