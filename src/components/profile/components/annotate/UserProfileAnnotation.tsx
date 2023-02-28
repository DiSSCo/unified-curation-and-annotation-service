/* Import Dependencies */
import Moment from 'moment';
import { Row, Col } from 'react-bootstrap';

/* Import Types */
import { Annotation, Dict } from 'global/Types';


/* Props Typing */
interface Props {
    annotation: Annotation
};


const UserProfileAnnotation = (props: Props) => {
    const { annotation } = props;

    const annotationTypeMapping: Dict = {
        commenting: 'Comment',
        adding: 'Addition',
        correcting: 'Correction',
        quality_flagging: 'Quality Flag',
        linking: 'Relationship/Link'
    }

    const isoDate = new Date(annotation.created);
    const date = Moment(isoDate).format('MM-DD-YYYY');

    return (
        <Col md={{ span: 6 }}
            className="profile_annotation px-4 my-3"
        >
            <Row>
                <Col className="profile_annotationMotivation col-md-auto c-primary">
                    {annotationTypeMapping[annotation.motivation]}
                </Col>
                <Col className="profile_annotationUpper br-tl br-tr">
                    {date}
                </Col>
            </Row>
            <Row>
                <Col className="profile_annotationBody">
                    <Row className="py-2">
                        <Col>
                            <p className="profile_annotationBodySubTitle m-0 c-primary-dark ">
                                Target
                            </p>

                            {annotation['target']['id']}
                        </Col>
                    </Row>
                    <Row className="pt-1 pb-3">
                        <Col>
                            <p className="profile_annotationBodySubTitle m-0 c-primary-dark ">
                                Value 
                            </p>

                            {annotation['body']['value']}
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Col >
    )
}

export default UserProfileAnnotation;