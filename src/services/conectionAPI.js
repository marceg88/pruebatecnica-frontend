// const API = process.env.FACTURE_API
const API = "http://localhost:4000"

const header = {
    'Content-Type': 'application/json'
}

export const ReactAPI = {

    async registerTeacher(data){
        const response = await fetch(`${API}/profesores/registro`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })

        const teacher = await response.json()
        return teacher
    },
    async findTeacher(teacherId){
        const response = await fetch(`${API}/profesores/${teacherId}`, {
            method: "GET",
            headers: header,
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
    async getLessonsByTeacherId(teacherId) {
        const response = await fetch(`${MLFURI}/customers/${teacherId}/lessons`, {
            method: 'GET',
            headers: headerGet
        });
        const lessons = await response.json();
        return lessons;
    },
}