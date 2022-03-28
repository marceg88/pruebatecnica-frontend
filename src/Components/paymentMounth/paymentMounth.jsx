import { Form, Select, Button } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { findTeacher, getByMounth, getTeacher, resetTeacherMethodsMessage, selectgetByMounth, selectTeacher } from "../../store/teacherSlice"

import CardByTeacher from "./cardByTeacher"

function Nomina(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teachers = useSelector(selectTeacher)
    const { status } = useSelector(selectgetByMounth)
    console.log(teachers)

    const onFinish = (values) => {
        console.log(values.mounth)
        dispatch(getByMounth(values.mounth))
        dispatch(resetTeacherMethodsMessage("getByMounthState"))
    }
    useEffect(() => {
        if(status === "OK") {
            setTimeout(() => {
                dispatch(resetTeacherMethodsMessage("getByMounthState"))
            }, 3500)
        }
    }, [dispatch, status])
    
    return(
        <div>
            <Form
            onFinish={onFinish}
            >
                <Form.Item
                    label="Seleccione el mes"
                    name="mounth"
                    
                >
                    <Select>
                        <Select.Option value="01">Enero</Select.Option>
                        <Select.Option value="02">Febrero</Select.Option>
                        <Select.Option value="03">Marzo</Select.Option>
                        <Select.Option value="04">Abril</Select.Option>
                        <Select.Option value="05">Mayo</Select.Option>
                        <Select.Option value="06">Junio</Select.Option>
                        <Select.Option value="07">Julio</Select.Option>
                        <Select.Option value="08">Agosto</Select.Option>
                        <Select.Option value="09">Septiembre</Select.Option>
                        <Select.Option value="10">Octubre</Select.Option>
                        <Select.Option value="11">Noviembre</Select.Option>
                        <Select.Option value="12">Diciembre</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">ir</Button>
                </Form.Item>
            </Form>
            <table>
                <thead>
                    <th>Profesores</th>
                    <th>horas por mes</th>
                    <th>valor por hora</th>
                    <th>total a pagar</th>
                </thead>
                <tbody>
                    {teachers?.map(teacher =><tr key={teacher.id}>
                        <th>{teacher.name}</th>
                        <th>{teacher.maxAllHours}</th>
                        <th>{teacher.price}</th>
                        <th>{teacher.maxAllHours*teacher.price}</th>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        {/* <th colSpan={3}>Total</th> */}
                        {/* {teachers?.reduce(teacher => <th>{}</th>)} */}
                    </tr>
                </tfoot>
            </table>  
            
        </div>
    )
}

export default Nomina