import { Button }  from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { findTeacher, getLessonsByTeacherId, selectFindTeacherState, selectTeacher } from "../../../../store/teacherSlice"
import "./detailTeacher.css"
import CardDetail from "./cardDetail"
import {DeleteOutlined} from "@ant-design/icons"
import { deleteTeacherById } from "../../../../store/teacherSlice"

import teachers from "../../../../utils/data/teachers"
import CardDetailHour from "../../Hours/cardDetailHour"

function Detalle(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { teacherId } = useParams()
    const teacher = useSelector(selectTeacher)
    const { message } = useSelector(selectFindTeacherState)
    
    useEffect(() => {
        dispatch(findTeacher(teacherId))
    }, [dispatch, teacherId]);   

    return(
        <div className="detail_teacher">
            <div className="list_teacher_button">
                <h1>Detalle profesor</h1>
                <div className="button_detail">
                    <div className="button1">
                    <Button type="primary" onClick={() => navigate("/profesores/lista")}>REGRESAR</Button>
                    </div>
                    <div className="button2">
                    <Button type="primary" onClick={() => navigate(`/lecciones/lista/${teacherId}`)}>LISTA LECCIONES</Button>
                    </div>
                    
                </div>
                
            </div>
            <div className="list_lessons">
                <CardDetail  
                    id={teacherId}
                    name={teacher.name}
                    numberId={teacher.numberId}
                    dateBirth={teacher.dateBirth}
                    role={teacher.role}
                    currency={teacher.currency}
                    price={teacher.price}
                    lecciones={teacher.lecciones}
                />
                
                {/* <CardDetailHour 
                    id={teacherId}
                    lecciones={lessons}
                /> */}
                
            </div>
        </div>
    )
}

export default Detalle