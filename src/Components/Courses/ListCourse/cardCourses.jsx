import { Card } from "antd"

function CardCourse( cour ){
    const { nameCourse } = cour
    return(
        <Card 
            title={nameCourse} 
            extra={<a href="#">Editar</a>} 
            style={{ width: 800, marginLeft: 300 }}
        >
            <p>Este curso es ...</p>
        </Card>
    )
}

export default CardCourse