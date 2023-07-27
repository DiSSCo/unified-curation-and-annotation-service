/* Import Dependencies */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';

/* Import Store */
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
    getSpecimen, setSpecimen, setSpecimenVersions,
    setSpecimenDigitalMedia, getSpecimenAnnotations, setSpecimenAnnotations
} from 'redux/specimen/SpecimenSlice';
import {
    getSidePanelToggle, setSidePanelToggle, setAnnotateTarget
} from 'redux/annotate/AnnotateSlice';
import { getScreenSize, setErrorMessage } from 'redux/general/GeneralSlice';

/* Import Types */
import { Annotation } from 'global/Types';

/* Import Styles */
import styles from './specimen.module.scss';

/* Import Components */
import Header from 'components/general/header/Header';
import TitleBar from './components/TitleBar';
import IDCard from './components/IDCard/IDCard';
import ContentBlock from './components/ContentBlock';
import AutomatedAnnotationsModal from '../general/automatedAnnotations/automatedAnnotations/AutomatedAnnotationsModal';
import SidePanel from 'components/annotate/sidePanel/SidePanel';
import Footer from 'components/general/footer/Footer';

/* Import API */
import GetSpecimen from 'api/specimen/GetSpecimen';
import GetSpecimenFull from 'api/specimen/GetSpecimenFull';
import GetSpecimenVersions from 'api/specimen/GetSpecimenVersions';


const Specimen = () => {
    /* Configure Store */
    const dispatch = useAppDispatch();

    /* Hooks */
    const params = useParams();
    const navigate = useNavigate();

    /* Base variables */
    const screenSize = useAppSelector(getScreenSize);
    const specimen = useAppSelector(getSpecimen);
    const specimenAnnotations = useAppSelector(getSpecimenAnnotations);
    const sidePanelToggle = useAppSelector(getSidePanelToggle);
    const [automatedAnnotationsToggle, setAutomatedAnnotationToggle] = useState(false);

    /* Onload / Version change: Check for Specimen, otherwise grab full (specific version) from database */
    useEffect(() => {
        const specimenId = `${params.prefix}/${params.suffix}`;

        /* Fetch Full Specimen if not present or not equal to params ID; if version has changed, refetch Specimen with version */
        if (isEmpty(specimen) || specimen.id.replace('https://hdl.handle.net/', '') !== specimenId) {
            /* Check for version in url */
            let version: string = '';

            if (params.version) {
                version = `/${params.version}`;
            }

            /* Get full Specimen */
            GetSpecimenFull(`${params.prefix}/${params.suffix}${version}`).then((fullSpecimen) => {
                if (fullSpecimen) {
                    /* Set Specimen */
                    dispatch(setSpecimen(fullSpecimen.specimen));

                    /* Set Specimen Digital Media */
                    dispatch(setSpecimenDigitalMedia(fullSpecimen.digitalMedia));

                    /* Set Specimen Annotations */
                    dispatch(setSpecimenAnnotations(fullSpecimen.annotations));

                    /* Get Specimen Versions */
                    GetSpecimenVersions(fullSpecimen.specimen.id.replace('https://hdl.handle.net/', '')).then((versions) => {
                        dispatch(setSpecimenVersions(versions));
                    }).catch(error => {
                        console.warn(error);
                    });
                }
            }).catch(error => {
                console.warn(error);
            });
        } else if (params.version && specimen.version.toString() !== params.version) {
            /* Get Specimen with version */
            const originalVersion = specimen.version;

            GetSpecimen(`${params['prefix']}/${params['suffix']}`, params.version).then((specimen) => {
                if (!isEmpty(specimen)) {
                    /* Set Specimen */
                    dispatch(setSpecimen(specimen));
                } else {
                    /* If version fetch failed, reset to original version */
                    navigate(`/ds/${params.prefix}/${params.suffix}/${originalVersion}`)

                    /* Show Error Message */
                    dispatch(setErrorMessage(`The selected version: ${params.version}, of Specimen could not be retrieved.`));
                }
            }).catch(error => {
                console.warn(error);
            });
        }
    }, [specimen, params]);

    /* Function for updating the Specimen Annotations source */
    const UpdateAnnotationsSource = (annotation: Annotation, remove: boolean = false) => {
        const copySpecimenAnnotations = { ...specimenAnnotations };

        /* Check if array for target property exists */
        if (annotation.target.indvProp in specimenAnnotations) {
            /* Push or patch to existing array */
            const copySpecimenTargetAnnotations = [...specimenAnnotations[annotation.target.indvProp]];
            const index = copySpecimenTargetAnnotations.findIndex(
                (annotationRecord) => annotationRecord.id === annotation.id
            );

            if (index >= 0) {
                if (remove) {
                    copySpecimenTargetAnnotations.splice(index, 1);
                } else {
                    copySpecimenTargetAnnotations[index] = annotation;
                }
            } else {
                copySpecimenTargetAnnotations.push(annotation);
            }

            copySpecimenAnnotations[annotation.target.indvProp] = copySpecimenTargetAnnotations;
        } else {
            /* Create into new array */
            copySpecimenAnnotations[annotation.target.indvProp] = [annotation];
        }

        dispatch(setSpecimenAnnotations(copySpecimenAnnotations));
    }

    /* Function to open Side Panel with all Annotations of Specimen */
    const ShowWithAllAnnotations = () => {
        /* Add up all property annotations into one annotations array */
        let allAnnotations: Annotation[] = [];

        Object.values(specimenAnnotations).forEach((annotationsArray) => {
            allAnnotations = allAnnotations.concat(annotationsArray);
        });

        dispatch(setAnnotateTarget({
            property: '',
            target: specimen,
            targetType: 'digital_specimen',
            annotations: allAnnotations
        }));

        dispatch(setSidePanelToggle(true));
    }

    /* ClassName for Specimen Content */
    const classSpecimenContent = classNames({
        'col-md-10 offset-md-1': !sidePanelToggle,
        'col-md-12 px-5': sidePanelToggle
    });

    const classIdCard = classNames({
        'h-100': screenSize === 'lg'
    });

    /* ClassName for Side Panel */
    const classSidePanel = classNames({
        'p-0': true,
        'w-0': !sidePanelToggle,
        [`${styles.sidePanel}`]: sidePanelToggle
    });

    return (
        <div className="d-flex flex-column min-vh-100 overflow-hidden">
            <Row>
                <Col>
                    <Header />

                    {(specimen.id && specimen.id.replace('https://hdl.handle.net/', '') === `${params['prefix']}/${params['suffix']}`) &&
                        <Container fluid className={`${styles.content} pt-5`}>
                            <Row className="h-100">
                                <Col className={`${classSpecimenContent} h-100 transition`}>
                                    <div className="h-100 d-flex flex-column">
                                        <Row className={styles.titleBar}>
                                            <Col>
                                                <TitleBar ShowWithAllAnnotations={() => ShowWithAllAnnotations()}
                                                    ToggleAutomatedAnnotations={() => setAutomatedAnnotationToggle(!automatedAnnotationsToggle)}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="py-4 flex-grow-1 overflow-scroll overflow-lg-hidden">
                                            <Col lg={{ span: 3 }} className={classIdCard}>
                                                <IDCard />
                                            </Col>
                                            <Col lg={{ span: 9 }} className="ps-4 h-100 mt-4 m-lg-0">
                                                <ContentBlock />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                            {/* Automated Annotations Modal */}
                            <AutomatedAnnotationsModal automatedAnnotationsToggle={automatedAnnotationsToggle}
                                HideAutomatedAnnotationsModal={() => setAutomatedAnnotationToggle(false)}
                            />
                        </Container>
                    }

                    <Footer />
                </Col>

                {/* Annotations Side Panel */}
                <div className={`${classSidePanel} transition`}>
                    <SidePanel ShowWithAllAnnotations={() => ShowWithAllAnnotations()}
                        UpdateAnnotationsSource={(annotation: Annotation, remove?: boolean) => UpdateAnnotationsSource(annotation, remove)}
                    />
                </div>
            </Row>
        </div>
    );
}

export default Specimen;