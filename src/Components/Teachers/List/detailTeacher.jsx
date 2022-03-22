import { Card }  from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { findTeacher, selectTeacher } from "../../../store/teacherSlice/teacherSlice"

import teachers from "../../../utils/data/teachers"

import CardDetail from "./cardDetail"

function Detalle(){
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const { id } = useParams()
    
    // const teacher = useSelector(selectTeacher)
    // const lessons = teacher.lessons
    // console.log("teacher",lessons)

    // useEffect(() => {
    //     dispatch(findTeacher(teacherId))
    // }, [dispatch, teacherId]);

    return(
        <div>
            <CardDetail key={id} 
                id={id}
                name={teachers[id].name}
                numberId={teachers[id].numberId}
                dateBirth={teachers[id].dateBirth}
                role={teachers[id].role}
                currency={teachers[id].currency}
                price={teachers[id].price}
            />
        </div>
    )
}

export default Detalle