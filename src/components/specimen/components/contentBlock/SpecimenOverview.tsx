/* Import Dependencies */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Row, Col, Card } from 'react-bootstrap';

/* Import Store */
import { useAppSelector } from 'app/hooks';
import { getSpecimen } from "redux/specimen/SpecimenSlice";

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faLocationDot, faBoxArchive } from '@fortawesome/free-solid-svg-icons';

/* Import Styles */
import styles from 'components/specimen/specimen.module.scss';

/* Import Sources */
import markerIconPng from "leaflet/dist/images/marker-icon.png"


/* Props Typing */
interface Props {
    ToggleModal: Function
};


const SpecimenOverview = (props: Props) => {
    const { ToggleModal } = props;

    /* Base variables */
    const specimen = useAppSelector(getSpecimen);

    /* Check for Organisation logo */
    const logo = (ror: string) => {
        try {
            return require(`../../../../webroot/img/organisationLogo/${ror}.png`);
        } catch (err) {
            return null;
        }
    };

    return (
        <Row className="h-100 overflow-scroll">
            <Col>
                <Row className="h-50">
                    {/* Location */}
                    <Col md={{ span: 12 }} className="pb-2">
                        <Card className="position-relative h-100">
                            <Card.Body>
                                <Row className="h-100">
                                    <Col md={{ span: 4 }}>
                                        <Card.Title>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span className="ms-1"> Location </span>
                                        </Card.Title>

                                        <Row className="mt-3">
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <table className={styles.propertyTable}>
                                                            <tbody>
                                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                                    onClick={() => ToggleModal('dwc:continent')}
                                                                >
                                                                    <td className={`${styles.propertyTitle} pe-2`}> Continent: </td>
                                                                    <td>
                                                                        {specimen.data['dwc:continent'] ?
                                                                            specimen.data['dwc:continent']
                                                                            : 'Not provided'
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                                    onClick={() => ToggleModal('dwc:country')}
                                                                >
                                                                    <td className={`${styles.propertyTitle} pe-2`}> Country: </td>
                                                                    <td>
                                                                        {specimen.data['dwc:country'] ?
                                                                            specimen.data['dwc:country']
                                                                            : 'Not provided'
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                                    onClick={() => ToggleModal('dwc:locality')}
                                                                >
                                                                    <td className={`${styles.propertyTitle} pe-2`}> Locality: </td>
                                                                    <td>
                                                                        {specimen.data['dwc:locality'] ?
                                                                            specimen.data['dwc:locality']
                                                                            : 'Not provided'
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={{ span: 8 }} className="h-100">
                                        {(specimen.data['dwc:decimalLatitude'] && specimen.data['dwc:decimalLongitude']) ?
                                            <MapContainer center={[specimen.data['dwc:decimalLatitude'], specimen.data['dwc:decimalLongitude']]}
                                                zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}
                                            >
                                                <TileLayer
                                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />

                                                <Marker position={[specimen.data['dwc:decimalLatitude'], specimen.data['dwc:decimalLongitude']]}
                                                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                                                >
                                                    <Popup>
                                                        <p className="fw-bold m-0"> Coordinates </p>
                                                        <p className="mt-1 mb-0"> Latitude: {specimen.data['dwc:decimalLatitude']} </p>
                                                        <p className="mt-1"> Longitude: {specimen.data['dwc:decimalLongitude']} </p>
                                                    </Popup>
                                                </Marker>
                                            </MapContainer>
                                            : <div className={`${styles.mapPlaceholder} w-100 h-100 d-flex align-items-center
                                                justify-content-center fst-italic`}
                                            >
                                                Map can not be generated due to lack of coordinates
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="h-50">
                    {/* Taxa */}
                    <Col md={{ span: 6 }} className="pt-2">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faLandmark} />
                                    <span className="ms-1"> Organisation </span>
                                </Card.Title>

                                <Row className="mt-3">
                                    <Col>
                                        <table className={styles.propertyTable}>
                                            <tbody>
                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                    onClick={() => ToggleModal('ods:organisationId')}
                                                >
                                                    <td className={`${styles.propertyTitle} pe-2`}> ROR: </td>
                                                    <td> {specimen.organisationId} </td>
                                                </tr>
                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                    onClick={() => ToggleModal('ods:organisationName')}
                                                >
                                                    <td className={`${styles.propertyTitle} pe-2`}> Name: </td>
                                                    <td> {specimen.data['ods:organisationName']} </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="position-absolute d-flex justify-content-end bottom-0 z-0">
                                            {specimen.data['ods:organisationId'] &&
                                                <img src={logo(specimen.data['ods:organisationId'].replace('https://ror.org/', ''))}
                                                    className={styles.organisationLogo}
                                                />
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Other details */}
                    <Col md={{ span: 6 }} className="pt-2">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faBoxArchive} />
                                    <span className="ms-1"> Collection </span>
                                </Card.Title>

                                <Row className="mt-3">
                                    <Col>
                                        <table className={styles.propertyTable}>
                                            <tbody>
                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                    onClick={() => ToggleModal('ods:collectingNumber')}
                                                >
                                                    <td className={`${styles.propertyTitle} pe-2`}> Collecting Number: </td>
                                                    <td>
                                                        {specimen.data['ods:collectingNumber'] ?
                                                            specimen.data['ods:collectingNumber']
                                                            : 'Not provided'
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                    onClick={() => ToggleModal('ods:collector')}
                                                >

                                                    <td className={`${styles.propertyTitle} pe-2`}> Collector: </td>
                                                    <td>
                                                        {specimen.data['ods:collector'] ?
                                                            specimen.data['ods:collector']
                                                            : 'Not provided'
                                                        }
                                                    </td>

                                                </tr>
                                                <tr className={`${styles.propertyTableRow} w-100 px-2 d-block`}
                                                    onClick={() => ToggleModal('ods:dateCollected')}
                                                >
                                                    <td className={`${styles.propertyTitle} pe-2`}> Date Collected: </td>
                                                    <td>
                                                        {specimen.data['ods:dateCollected'] ?
                                                            specimen.data['ods:dateCollected']
                                                            : 'Not provided'
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col >
        </Row >
    );
}

export default SpecimenOverview;