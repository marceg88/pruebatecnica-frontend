import { Card } from "antd"

function CardDetail({ id, name, numberId, dateBirth, role, currency, price}){
    

    return(
        <div>
            <Card title={ name } extra={<a href={`/${id}/agregar`}>Agregar horas</a>} style={{ width: 800, marginLeft: 300, marginTop:30 }}>
                <p>Numero de identificación: {numberId}</p>
                <p>Fecha de nacimiento: {dateBirth}</p>
                <p>Profesor de {role}</p>
                <p>Se le pagara en {currency}</p>
                <p>Se le pagara por hora: {price}</p>
            </Card>
        </div>
    )
}

export default CardDetail