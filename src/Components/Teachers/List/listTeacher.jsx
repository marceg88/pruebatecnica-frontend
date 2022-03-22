import { useDispatch, useSelector } from "react-redux"
import { selectTeacher, findTeacher, selectGetLessonsByTeacherIdState } from "../../../store/teacherSlice/teacherSlice"
import CardTeacher from "./cardTeacher"
import { useEffect } from "react"

import teachers from "../../../utils/data/teachers"

function ListaProfesores(){
    // const dispatch = useDispatch()
    // const teacher = useSelector(selectTeacher)
    // // const { status } = useSelector(selectGetLessonsByTeacherIdState)
    // // const { id: teacherId } = teacher._id
    // console.log(teacher)

    // useEffect(() => {
    //     dispatch(findTeacher(teacherId));
    // }, [dispatch, teacherId]);

    // useEffect(() => {
    //     if (status === 'Failed') {
    //         setTimeout(() => {
    //             dispatch(resetTeacherMethodsMessage('getLessonsByTeacherIdState)'));
    //         }, 3000);
    //     }
    // }, [dispatch, status]);
    
    return(
        <div className="container_list_teacher">
            {/* <CardTeacher key={teacher._id} name={teacher.name} numberId={teacher.numberId} dateBirth={teacher.dateBirth} /> */}
            {teachers?.map(teacher => <CardTeacher key={teacher.id}{...teacher} />)}
        </div>
    )
}

export default ListaProfesores