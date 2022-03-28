import { Form, Button, Input } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import "./registerCourses.css"
import { resetCourseMethodsMessage, registerCourse, selectRegisterCourseState } from "../../../store/courseSlice"

function RegisterCourses(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { message, status } = useSelector(resetCourseMethodsMessage)

    const onFinish = (values) => {
        console.log(values)
        dispatch(registerCourse(values))
    }

    useEffect(() => {
        if(status === "OK") {
            setTimeout(() => {
                dispatch(resetCourseMethodsMessage("registerCourseState"))
                navigate("/cursos/lista")
            }, 3500)
        }
    }, [dispatch, status, navigate])

    return(
        <div className="form_course">
            <Form
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item 
                    label="Nombre curso"
                    name="nameCourse"
                    rules={[
                        {
                            required: true,
                            message: "Ingrese el nombre del curso"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            
                <Form.Item>
                    <Button type="primary" htmlType="submit">REGISTRAR</Button>
                </Form.Item>
            </Form>
        </div>
        
    )
}

export default RegisterCourses