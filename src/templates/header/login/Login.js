import { Row, Col } from 'react-bootstrap';
import UserService from 'keycloak/Keycloak';

/* Import Components*/
import LoginButton from './LoginButton';


const Login = () => {
    function Login() {
        UserService.doLogin();
    }

    return (
        <Row>
            <Col md={{span: 12}}>
                <LoginButton login={Login} />
            </Col>
        </Row>
    );
}

export default Login;