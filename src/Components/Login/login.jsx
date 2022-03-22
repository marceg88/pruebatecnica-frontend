import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function SignIn() {
    return (
      <div>
        <Form
            className="container-input"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 18,
            }}
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                label="Nombre de usuario"
                name="userName"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese su nombre de usuario"
                    }
                ]}
            >
                <Input placeholder="Ingrese usuario" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese su contraseña"
                    }
                ]}
            >
                <Input.Password
                    placeholder="Contraseña"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">
                    INGRESAR
                </Button>
            </Form.Item>
        </Form>
        
      </div>
    );
  }
  
  export default SignIn;