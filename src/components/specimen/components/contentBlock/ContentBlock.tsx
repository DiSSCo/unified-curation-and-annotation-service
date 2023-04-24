/* Import Dependencies */
import { isEmpty } from 'lodash';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

/* Import Store */
import { useAppSelector } from 'app/hooks';
import { getSpecimen, getSpecimenDigitalMedia } from 'redux/specimen/SpecimenSlice';

/* Import Styles */
import styles from 'components/specimen/specimen.module.scss';

/* Import Components */
import VersionSelect from './VersionSelect';
import SpecimenOverview from './SpecimenOverview';
import OriginalData from './OriginalData';
import AnnotationsOverview from './AnnotationsOverview';
import DigitalMedia from './DigitalMedia';


/* Props Typing */
interface Props {
    ToggleModal: Function
};


const ContentBlock = (props: Props) => {
    const { ToggleModal } = props;

    /* Base variables */
    const specimen = useAppSelector(getSpecimen);
    const digitalMedia = useAppSelector(getSpecimenDigitalMedia);

    return (
        <Row className="h-100">
            <Col className="h-100">
                <Row className="d-flex justify-content-end">
                    <Col className="col-md-auto">
                        <a href={`https://sandbox.dissco.tech/api/v1/specimens/${specimen.id}`} target="_blank">
                            <button type="button"
                                className="primaryButton h-100"
                            >
                                View JSON
                            </button>
                        </a>
                    </Col>
                    <Col className="col-md-auto">
                        <VersionSelect />
                    </Col>
                </Row>
                <Row className={`${styles.contentBlock}`}>
                    <Col className="h-100">
                        <Tabs defaultActiveKey="digitalSpecimen" className={`${styles.tabs}`}>
                            <Tab eventKey="digitalSpecimen" title="Digital Specimen" className="h-100 pt-4">
                                <SpecimenOverview ToggleModal={(property: string) => ToggleModal(property)} />
                            </Tab>
                            <Tab eventKey="originalData" title="Original Data">
                                <OriginalData />
                            </Tab>
                            <Tab eventKey="annotations" title="Annotations">
                                <AnnotationsOverview />
                            </Tab>
                            {!isEmpty(digitalMedia) &&
                                <Tab eventKey="digitalMedia" title="Digital Media">
                                    <DigitalMedia />
                                </Tab>
                            }
                        </Tabs>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ContentBlock;