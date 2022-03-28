import { Card, Button } from "antd"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import {DeleteOutlined} from "@ant-design/icons"
import { deleteTeacherById } from "../../../../store/teacherSlice"
import { useDispatch } from "react-redux"

function CardDetail({ id, name, numberId, dateBirth, role, currency, price}){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dateM=moment(dateBirth).format("MM/DD/YYYY")

    const handleDeleteTeacher = () => {
        dispatch(deleteTeacherById(id));
        navigate('/profesores/lista');
    }

    return(
        <div>
            <Card title={ name } extra={<a href={`/${id}/agregar`}>Agregar horas</a>} style={{ width: 500 }}>
                <p>Numero de identificación: {numberId}</p>
                <p>Fecha de nacimiento: {dateM}</p>
                <p>Profesor de {role}</p>
                <p>Se le pagara en {currency}</p>
                <p>Se le pagara por hora: {price}</p>
                <Button icon={<DeleteOutlined />} onClick={handleDeleteTeacher}></Button>
            </Card>
        </div>
    )
}

export default CardDetail