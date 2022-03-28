// const API = process.env.FACTURE_API
const API = "http://localhost:4000"

const header = {
    'Content-Type': 'application/json'
}

export const ReactAPI = {

    async getTeacher(){
        const response = await fetch(`${API}/profesores/lista`, {
            method: "GET",
            headers: header,
        })

        const teacher = await response.json()
        return teacher
    },
    async findTeacher(teacherId){
        const response = await fetch(`${API}/profesores/lista/${teacherId}`, {
            method: "GET",
            headers: header,
        })

        const teacher = await response.json()
        return teacher
    },
    async findLessonsByOwner(teacherId) {
        const response = await fetch(`${API}/profesores/${teacherId}/lessons`, {
            method: 'GET',
            headers: header
        }); 
        const lessons = await response.json();
        return lessons;
    },
    async registerTeacher(data){
        const response = await fetch(`${API}/profesores/registro`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })

        const teacher = await response.json()
        return teacher
    },
    
    
    async findTeacherByInstitution(){
        const response = await fetch(`${API}/profesores/todos`, {
            method: "GET",
            headers: header,
        })

        const json = await response.json()
        return json
    },
    async registerCourse(data){
        const response = await fetch(`${API}/cursos/registro`, {
            method: "POST",
            headers: header,
            body: JSON.stringify({
                ...data
            })
        })

        const json = await response.json()
        return json
    },
    async registerLessons(data){
        const response = await fetch(`${API}/lessons/registro`, {
            method: "POST",
            headers: header,
            body: JSON.stringify({
                ...data
            })
        })

        const json = await response.json()
        return json
    },
    async findLessonsByCourse(nameCourse){
        const response = await fetch(`${API}/lessons/${nameCourse}`, {
            method: "GET",
            headers: header,
        })

        const json = await response.json()
        return json
    },
    async getByMounth(mounth){
        const response = await fetch(`${API}/payment/listames/${mounth}`, {
            method: "GET",
            headers: header,
        })

        const json = await response.json()
        return json
    },
    async deleteTeacher(teacherId) {
        const response = await fetch(`${API}/profesores/${teacherId}`, {
            method: 'DELETE',
            headers: header,
        });
        const teacherDeleted = await response.json();
        return teacherDeleted;
    },
    async deleteLesson(lessonId) {
        const response = await fetch(`${API}/lessons/${lessonId}`, {
            method: 'DELETE',
            headers: header,
        });
        const lessonDeleted = await response.json();
        return lessonDeleted;
    },
}