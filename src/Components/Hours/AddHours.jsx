import { Form, Select, Button, InputNumber, DatePicker } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { courses } from "../Courses/ListCourse/listCourses"
import { useEffect } from "react"
import { Link } from "react-router-dom"

import { registerLessons, selectRegisterLessonsState, resetLessonsMethodsMessage } from "../../store/lessonsSlice/lessonsSlice"
import { selectTeacher } from "../../store/teacherSlice/teacherSlice"

function AddHours(){
    const dispatch = useDispatch()
    // const teacher = useSelector(selectTeacher)
    // const { id: owner } = useSelector(selectTeacher)
    // const { status } = useSelector(selectRegisterLessonsState)
    // console.log(courses)
    const onFinish = (values) => {
        const data = {
            ...values,
            
        }
        console.log(data)
        dispatch(registerLessons(data))
    }

    // useEffect(() => {
    //     if(status === "OK") {
    //         setTimeout(() => {
    //             dispatch(resetLessonsMethodsMessage("registerLessonsState"))
    //             // navigate("/profesores/lista")
    //         }, 3500)
    //     }
    // }, [dispatch, status])

    return(
        <Form
            className="container_add_hours"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            layout="horizontal"
            onFinish={onFinish}
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
                <Select>
                    {courses.map(course => <Select.Option value={course.nameCourse} key={course.id}>{course.nameCourse}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item
                label="Fecha"
                name="dateCourse"
                rules={[
                    {
                        required: true,
                        message: "Ingrese la fecha en la que se dicto el curso"
                    }
                ]}
            >
            <DatePicker />
            </Form.Item>
            <Form.Item
                label="Cantidad de horas"
                name="hours"
                rules={[
                    {
                        required: true,
                        message: "Ingrese el numero de horas laboradas en esta fecha"
                    }
                ]}
            >
            <InputNumber />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 14
                }}
            >
                <Button type="primary" htmlType="submit">REGISTRAR</Button>
                <Link to="/profesores/lista">   Regresar a la lista</Link>
            </Form.Item>
        </Form>
    )
}

export default AddHours