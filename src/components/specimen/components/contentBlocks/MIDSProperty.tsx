/* Import Dependencies */
import { Row, Col } from 'react-bootstrap';

/* Import Styles */
import styles from 'components/specimen/specimen.module.scss';


/* Props Typing */
interface Props {
    property: string
};


const MIDSProperty = (props: Props) => {
    const { property } = props;

    return (
        <Row className="pb-3">
            <Col>
                <div className={`${styles.midsProperty} rounded-c p-2`}>
                    {property}
                </div>
            </Col>
        </Row>
    );
}

export default MIDSProperty;