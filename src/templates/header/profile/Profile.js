import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Profile = () => {
    /* Static name needs to be replaced with real time username */

    return (

        <Row>
            <Col md={{ span: 3, offset: 9 }} className="mt-1">
                <Row className="justify-content-end">
                    <Col className="header_profile col-md-auto">
                        <Link to='/profile'>
                            <Row>
                                <Col className="header_profilePicName textOverflow">
                                    Username
                                </Col>
                                <Col className="col-md-auto">
                                    <img
                                        src="https://crafatar.com/avatars/af781660900a493687708eee23874086?size=64&overlay"
                                        className="img-fluid header_profilePic"
                                        alt="User avatar"
                                    />
                                </Col>
                            </Row>
                        </Link>
                    </Col>

                </Row>
            </Col>
        </Row>

    )
}

export default Profile;