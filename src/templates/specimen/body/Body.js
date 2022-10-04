import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* Import components */
import SpecimenInfo from './specimenInfo/SpecimenInfo';
import AnnotateSection from './annotate/AnnotateSection';
import MidsMeter from './midsMeter/MidsMeter';
import SpecimenMedia from './specimenMedia/SpecimenMedia';
import AnnotationsOverview from './annotationsOverview/AnnotationsOverview';


const Body = (props) => {
    const specimen = props.specimen;

    const [midsDetailsVisibility, setMidsDetailsVisibility] = useState('hidden');

    function ToggleMidsDetails() {
        if (midsDetailsVisibility) {
            setMidsDetailsVisibility('');
        } else {
            setMidsDetailsVisibility('hidden');
        }
    }

    const [scrollToMids, setScrollToMids] = useState();

    function UpdateScrollToMids(midsHandle) {
        if (midsDetailsVisibility) {
            ToggleMidsDetails();
        }

        setTimeout(function () {
            setScrollToMids(midsHandle);
        }, 400)
    }

    return (
        <Container fluid className="mt-5 specimen_content">
            <Row className="h-100">
                <Col md={{ span: 10, offset: 1 }} className="h-100">
                    <Row className="h-100">
                        <Col md={{ span: 8 }} className="h-100 specimen_contentScroll">
                            <Row>
                                <Col md={{ span: 12 }}>
                                    <SpecimenInfo specimen={specimen} LoadSpecimenVersion={(handle, version) => props.LoadSpecimenVersion(handle, version)} />
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <AnnotateSection
                                        specimen={specimen}

                                        UpdateScrollToMids={(midsHandle) => UpdateScrollToMids(midsHandle)}
                                        ToggleMidsDetails={() => ToggleMidsDetails()}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Row className="mt-4">
                                <Col md={{ span: 12 }}>
                                    <MidsMeter
                                        specimen={specimen} mode='annotate'
                                        midsDetailsVisibility={midsDetailsVisibility}
                                        scrollToMids={scrollToMids}

                                        UpdateScrollToMids={(midsHandle) => UpdateScrollToMids(midsHandle)}
                                        ToggleMidsDetails={() => ToggleMidsDetails()}
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-4 specimen_annotationsOverview">
                                <Col className="h-100">
                                    <AnnotationsOverview specimenHandle={specimen['Meta']['id']['value']} />
                                </Col>
                            </Row>

                            {specimen['media'] &&
                                <Row>
                                    <Col md={{ span: 12 }}>
                                        {<SpecimenMedia specimenMedia={specimen['media']} />}
                                    </Col>
                                </Row>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;