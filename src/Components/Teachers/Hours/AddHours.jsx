import { Form, Select, Button, InputNumber, DatePicker } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { courses } from "../../Courses/ListCourse/listCourses"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import moment from "moment"
import { registerLessons, selectRegisterLessonsState, resetLessonsMethodsMessage, selectLessons, findLessonsByCourse, findLessonsByOwner } from "../../../store/lessonsSlice"
import { findTeacher, selectTeacher } from "../../../store/teacherSlice"
import "./addHours.css"

function AddHours(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teacher = useSelector(selectTeacher)
    const lessons = useSelector(selectLessons)
    const { id } = useParams()
    const owner = id
    const { price } = teacher
    const {message, status} = useSelector(selectRegisterLessonsState)

    console.log(teacher)
    const onFinish = (values) => {
        const mounth = moment(values.dateCourse).format("MM")
        const total = price*values.hours
        const data = {
            ...values,
            mounth: mounth,
            owner,
            total
        }
        console.log("data",data)
        dispatch(registerLessons(data))
        navigate(`/lecciones/lista/${id}`)
    }
    useEffect(() => {
        dispatch(findTeacher(owner))
    }, [])
    useEffect(() => {
        if(status === "OK") {
            setTimeout(() => {
                dispatch(resetLessonsMethodsMessage("registerLessonsState"))
                
            }, 3500)
        }
    }, [dispatch, status, navigate])
    
    return(
        <div className="container_add_hours">
            <Form
            layout="vertical"
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
            <p>{message}</p>
            <Form.Item>
                <Button type="primary" htmlType="submit">REGISTRAR</Button>
                <Button type="primary" onClick={() => navigate(`/lecciones/lista/${owner}`)}>REGRESAR</Button>
            </Form.Item>
        </Form>
        </div>
        
    )
}

export default AddHours