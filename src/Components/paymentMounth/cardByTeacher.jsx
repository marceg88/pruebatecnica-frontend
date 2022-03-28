import { Card } from "antd"

function CardByTeacher({id, name, maxAllHours, price}){
    const total = maxAllHours*price
    return(
        <div>
            <table>
                <thead>
                    <th>Profesores</th>
                    <th>horas por mes</th>
                    <th>valor por hora</th>
                    <th>total a pagar</th>
                </thead>
                <tbody>
                    <tr key={id}>
                        <th>{name}</th>
                        <th>{maxAllHours}</th>
                        <th>{price}</th>
                        <th>{total}</th>
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}

export default CardByTeacher