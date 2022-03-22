import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "../Components/Login/login"
import RegistrarProfesor from "../Components/Teachers/Register/registerTeacher"
import ListaProfesores from "../Components/Teachers/List/listTeacher"
import Navbar from "../Components/Navbar/Navbar"
import RegisterCourses from "../Components/Courses/registerCourses/registerCourses"
import ListaCursos from "../Components/Courses/ListCourse/listCourses"
import AddHours from "../Components/Hours/AddHours"
import Detalle from "../Components/Teachers/List/detailTeacher"
import Home from "../Components/home/home"

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
                    <Route path="/cursos" element={<RegisterCourses />} />
                    <Route path="/cursos/lista" element={<ListaCursos />} />
                    <Route path="/:id/agregar" element={<AddHours />} />
                    <Route path="/:id/detalles" element={<Detalle />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default AppRoutes