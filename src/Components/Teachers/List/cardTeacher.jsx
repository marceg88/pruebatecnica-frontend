import { Card } from "antd"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectTeacher } from "../../../store/teacherSlice"


function CardTeacher( { _id, name, numberId, role } ){
   
    return(
        <Card 
            title={name} 
            extra={<a href={`/profesores/lista/${_id}`}>Detalles</a>} 
            style={{ width: 500 }}
        >
            <p>Numero de cedula: {numberId}</p>
            <p>Fecha de nacimiento: {role}</p>
        </Card>
    )
}

export default CardTeacher