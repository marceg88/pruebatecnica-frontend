import { Input, InputNumber, Form, Button, DatePicker, Select } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import "./registerTeacher.css"

import { resetTeacherMethodsMessage, selectRegisterTeacherState, registerTeacher } from "../../../store/teacherSlice/teacherSlice"

function RegistrarProfesor() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { message, status } = useSelector(selectRegisterTeacherState)

    const onFinish = (values) => {
        console.log(values)
        dispatch(registerTeacher(values))
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
        <Form
            className="container_form"
            labelCol={{
                span: 4,
                offset: 6
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            onFinish={onFinish}
        >
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
            
            <InputNumber />
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
            <InputNumber />
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
        <p className='error-message mb-2'>{message}</p>
        <Form.Item
            wrapperCol={{
                offset: 18
            }}
        >
            <Button type="primary" htmlType="submit">REGISTRAR</Button>
            <Link to="/profesores/lista">    o ir a lista de profesores</Link>
        </Form.Item>
    </Form>
    )
}

export default RegistrarProfesor
