import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "../Components/Login/login"
import RegistrarProfesor from "../Components/Teachers/Register/registerTeacher"
import ListaProfesores from "../Components/Teachers/List/listTeacher"
import Navbar from "../Components/Navbar/Navbar"
import RegisterCourses from "../Components/Courses/registerCourses/registerCourses"
import ListaCursos from "../Components/Courses/ListCourse/listCourses"
import AddHours from "../Components/Teachers/Hours/AddHours"
import Detalle from "../Components/Teachers/List/Detail/detailTeacher"
import Home from "../Components/home/home"
import Courses from "../Components/Courses/courses"
import CardDetailHour from "../Components/Teachers/Hours/cardDetailHour"
import ListLessons from "../Components/Teachers/Hours/listLessons"
import Nomina from "../Components/paymentMounth/paymentMounth"

function AppRoutes() {
    return(
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />    
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/profesores" element={<RegistrarProfesor />} />
                    <Route path="/profesores/lista" element={<ListaProfesores />} />
                    <Route path="/profesores/lista/:teacherId" element={<Detalle />} />
                    <Route path="/lecciones/lista/:teacherId" element={<ListLessons />} />
                    <Route path="/cursos" element={<Courses />} />
                    <Route path="/:id/agregar" element={<AddHours />} />
                    <Route path="/nomina" element={<Nomina />}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default AppRoutes