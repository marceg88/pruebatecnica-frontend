import { Input, InputNumber, Form, Button, DatePicker, Select } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import moment from "moment"
import "./registerTeacher.css"


import { resetTeacherMethodsMessage, selectRegisterTeacherState, registerTeacher } from "../../../store/teacherSlice"

function RegistrarProfesor() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { message, status } = useSelector(selectRegisterTeacherState)

    const onFinish = (values) => {
        const mounth = moment(values.dateCourse).format("MM")
        const dateBirth = moment(values.dateBirth).format("DD-MM-YYYY")
        const data = {
            ...values,
            dateBirth,
            mounth
        }

        console.log(data)
        dispatch(registerTeacher(data))
        
    }

    useEffect(() => {
        if(status === "OK") {
            setTimeout(() => {
                dispatch(resetTeacherMethodsMessage("registerTeacherState"))
                navigate("/profesores/lista")
            }, 3500)
        }
    }, [dispatch, status, navigate])

   

    return(
        <div className="container_margin"> 
            <Form
                className="container_form"
                layout="vertical"
                onFinish={onFinish}
            >
           
            <div className="container_columns">
            <div className="container_coulmn1">
            <Form.Item 
                    label="Nombre profesor"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Ingrese el nombre del profesor"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Número de identificación"
                    name="numberId"
                    
                    rules={[
                        {
                            required: true,
                            message: "El número de identificación es requerido"
                        }
                    ]}
                >
                    
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Fecha de Nacimiento"
                    name="dateBirth"
                    rules={[
                        {
                            required: true,
                            message: "Ingrese fecha de nacimiento del profesor"
                        }
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item 
                    label="¿Maestro de Planta o Invitado?"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: "Debe escoger el tipo de contrato"
                        }
                    ]}
                >
                    <Select>
                        <Select.Option value="planta">Planta</Select.Option>
                        <Select.Option value="invitado">Invitado</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="Ingrese tipo de moneda"
                    name="currency"
                    rules={[
                        {
                            required: true,
                            message: "El tipo de moneda es requerido"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Valor hora"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Ingrese el valor por hora"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="container_column2">
            
            <Form.Item>
                <div className="list_teachers">
                 <div className="button_registra">
                    <Button type="primary" htmlType="submit">REGISTRAR</Button>
                 </div>
                 <div className="button_teachers">
                    <Button type="primary" onClick={() => navigate("/profesores/lista")}>IR A LA LISTA</Button>
                 </div> 
                 <div>
                  <p className='error-message'>{message}</p>
                </div>           
                </div>
            </Form.Item>
            </div>
            </div>
            
            
        </Form>
        </div>
    )
}

export default RegistrarProfesor
