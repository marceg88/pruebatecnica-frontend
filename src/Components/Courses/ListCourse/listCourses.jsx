import { useSelector } from "react-redux";
import { selectCourse } from "../../../store/courseSlice";


import CardCourse from "./cardCourses";
export const courses = [
    {
        id: 1,
        nameCourse: "ISS123"
    },
    {
        id: 2,
        nameCourse: "ISS124"
    },
    {
        id: 3,
        nameCourse: "ISS125"
    },
    {
        id: 4,
        nameCourse: "ISS126"
    },
    {
        id: 5,
        nameCourse: "ISS127"
    }
]
function ListaCursos(){
    // const nameCourse = useSelector(selectCourse)
    // console.log(nameCourse)
    
    return(
        <div className="container_list_teacher">
            {courses?.map((cour) => <CardCourse key={cour.id}{...cour} />)}
        </div>
    )
}

export default ListaCursos
