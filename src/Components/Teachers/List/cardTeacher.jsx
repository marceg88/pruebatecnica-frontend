import { Card } from "antd"

function CardTeacher( teacher ){
    const { id, name, numberId, dateBirth } = teacher
    return(
        <Card 
            title={name} 
            extra={<a href={`/${id}/detalles`}>Detalles</a>} 
            style={{ width: 800, marginLeft: 300 }}
        >
            <p>{numberId}</p>
            <p>{dateBirth}</p>
            <p>Card content</p>
        </Card>
    )
}

export default CardTeacher