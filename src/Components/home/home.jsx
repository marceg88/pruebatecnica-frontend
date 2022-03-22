import { Row, Col, Card } from "antd"

import "./home.css"

function Home(){
    return(
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={12}>
                <Card title="Noticias" bordered={false}>
                Proximamente...
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Notas" bordered={false}>
                Proximamente...
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default Home