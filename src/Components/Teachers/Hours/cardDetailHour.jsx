import { Card, Button } from "antd"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {DeleteOutlined} from "@ant-design/icons";
import { deleteLessonsById } from "../../../store/lessonsSlice";
import  moment  from "moment";

function CardDetailHour({id, nameCourse, dateCourse, hours, total, owner}){
    const navigate = useNavigate()
    const dateM=moment(dateCourse).format("MM/DD/YYYY")
    return(
        <Card title={`Nombre del curso: ${nameCourse}`}  style={{ width: 500 }}>
               <ul>
                    <li>Fecha en que dicto el curso: {dateM}</li>
                    <li>Número de horas: {hours}</li>
                    <li>Valor a pagar: {total}</li>
                </ul>
            </Card>
    )
}

export default CardDetailHour