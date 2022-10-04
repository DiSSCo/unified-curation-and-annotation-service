import { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

/* Import API */
import GetSpecimenVersions from 'api/specimen/GetSpecimenVersions';

/* Fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog, faChevronDown, faMagnifyingGlass, faLandmark } from '@fortawesome/free-solid-svg-icons'


const SpecimenInfo = (props) => {
    const specimen = props.specimen;
    const [versionTabs, setVersionTabs] = useState([]);

    useEffect(() => {
        GetSpecimenVersions(specimen['Meta']['id']['value'], Process);

        function Process(versions) {
            setVersionTabs(versions);
        }
    }, []);

    if (!specimen['Organisation']['institutionID']['value']) {
        if (specimen['Organisation']['providername']['value']) {
            specimen['Organisation']['institutionCode']['value'] = specimen['Organisation']['providername']['value'];
        }
    }

    const [versionTabsActive, setVersionTabsActive] = useState('');
    const versionTabRef = useRef(null);

    function UseVersionTabs(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (versionTabsActive && event.target.className !== 'specimen_versionOption') {
                        ToggleVersionTabs();
                    }
                }
            }

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, versionTabsActive])
    }

    UseVersionTabs(versionTabRef);

    const ToggleVersionTabs = () => {
        if (!versionTabsActive) {
            GetSpecimenVersions(specimen['Meta']['id']['value'], Process);

            function Process(versions) {
                setVersionTabs(versions);

                setVersionTabsActive('active');
            }
        } else {
            setVersionTabsActive('');
        }
    }

    return (
        <>
            <Row>
                <Col md={{ span: 11 }} className="specimen_fixedTitleBlock">
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <Row>
                                <Col md={{ span: 8 }} className="specimen_fixedTitleBlockMargin">
                                    <Row>
                                        <Col md={{ span: 10 }} className="specimen_titleBlock">
                                            <Row>
                                                <Col md={{ span: 1 }} className="specimen_basisOfRecordSymbolBlock">
                                                    <i className="icon">
                                                        <FontAwesomeIcon icon={faFrog} />
                                                    </i>
                                                </Col>
                                                <Col className="col-md-auto specimen_titleBlockSub">
                                                    <h2 className="specimen_title"> {specimen['Specimen']['specimenName']['value']} </h2>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            <Row className="position-relative">
                                                <Col md={{ span: 12 }} className={"specimen_versionBlock " + versionTabsActive}>
                                                    {(versionTabs.length > 1) ?
                                                        <Row>
                                                            <button
                                                                className="specimen_versionOption chosen"
                                                                type="button"
                                                                onClick={() => ToggleVersionTabs()}
                                                                ref={versionTabRef}
                                                            >
                                                                {`Version ${specimen['Meta']['version']['value']}`}
                                                                <FontAwesomeIcon
                                                                    icon={faChevronDown}
                                                                    className={`specimen_versionOptionIcon ${versionTabsActive} mx-4`}
                                                                />
                                                            </button>
                                                        </Row>
                                                        : <Row>
                                                            <button md={{ span: 12 }} className="specimen_versionOption chosen">
                                                                {`Version ${specimen['Meta']['version']['value']}`}
                                                            </button>
                                                        </Row>
                                                    }

                                                    <div className={`specimen_versionOptions ${versionTabsActive}`}>
                                                        {(versionTabs.length > 1) && versionTabs.map((key, _i) => {
                                                            if (key !== specimen['Meta']['version']['value']) {
                                                                return (
                                                                    <Row key={key}>
                                                                        <div
                                                                            version={key}
                                                                            className="specimen_versionOption"
                                                                            onClick={() => props.LoadSpecimenVersion(specimen['Meta']['id']['value'], key)}
                                                                        >
                                                                            {`Version ${key}`}
                                                                        </div>
                                                                    </Row>

                                                                );
                                                            }
                                                        })}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col >
            </Row>
            <Row>
                <Col md={{ span: 11 }} className="specimen_contentBlock">
                    <Row className="specimen_mainDetailsBlock">
                        <Col md={{ span: 6 }}>
                            <Row className="h-100">
                                <Col md={{ span: 12 }} className="specimen_detailSpecimen px-3 pt-2 position-relative">
                                    <Row>
                                        <Col md={{ span: 12 }} className="specimen_detailSub">
                                            <Row>
                                                <Col>
                                                    <p className="specimen_detailTitle"> Specimen information </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Specimen type: {specimen['Specimen']['type']['value']}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Country: {specimen['Location']['country']['value']}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Locality: {specimen['Location']['locality'] ?
                                                            ` ${specimen['Location']['locality']['value']}`
                                                            : ' Unknown'}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="specimen_detailSpecimenBackdrop" />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <Row className="h-100">
                                <Col md={{ span: 12 }} className="specimen_detailOrganisation px-3 pt-2 position-relative">
                                    <Row>
                                        <Col md={{ span: 12 }} className="specimen_detailSub">
                                            <Row>
                                                <Col md={{ span: 12 }}>
                                                    <p className="specimen_detailTitle"> Publishing organisation information </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Publisher: {specimen['Organisation']['institutionID']['value']}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Country: {specimen['Organisation']['datasourcecountry']['value']}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <FontAwesomeIcon icon={faLandmark} className="specimen_detailSpecimenBackdrop" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="specimen_detailLinksBlock">
                        <Col md={{ span: 11 }} className="specimen_detailLinks mb-4 mt-4 pt-2">
                            <Row>
                                <Col>
                                    <p className="specimen_detailLink">
                                        <span className="specimen_detailLinkProperty"> Source URL: </span>
                                        {' ' + specimen['Meta']['datasourceurl']['value']}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="specimen_detailLink">
                                        <span className="specimen_detailLinkProperty"> Provider URL: </span>
                                        {' ' + specimen['Organisation']['sourceSystemId']['value']}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    );
}

export default SpecimenInfo;