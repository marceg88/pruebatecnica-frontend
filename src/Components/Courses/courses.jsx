import ListaCursos from "./ListCourse/listCourses"
import RegisterCourses from "./registerCourses/registerCourses"

import "./courses.css"

function Courses(){
    return(
        <div className="view_courses">
            <div className="register_courses">
                <RegisterCourses />
            </div>
            <div className="list_courses">
                <ListaCursos />
            </div>
        </div>
    )
}

export default Courses