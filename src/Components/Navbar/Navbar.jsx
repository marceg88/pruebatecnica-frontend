import { Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu } from "antd"

import "./Navbar.css"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Navbar(){

    return(
        <Layout>
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/">INICIO</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/profesores">PROFESORES</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/cursos">CURSOS</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/nomina">NOMINA</Link></Menu.Item>
            </Menu>
            </Header>
    </Layout>
    )
}

export default Navbar