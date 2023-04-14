/* Import Dependencies */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { isEmpty } from 'lodash';
import { Row, Col } from 'react-bootstrap';

/* Import Types */
import { Organisation, Dict } from 'global/Types';

/* Import Styles */
import styles from 'components/home/home.module.scss';

/* Import API */
import GetOrganisations from 'api/organisation/GetOrganisations';


const CollectionFacilitySearch = () => {
    /* Hooks */
    const navigate = useNavigate();

    /* Base variables */
    const [organisations, setOrganisations] = useState<Organisation[]>([]);

    /* Fetch Organisations */
    useEffect(() => {
        GetOrganisations().then((organisations) => {
            if (!isEmpty(organisations)) {
                setOrganisations(organisations);
            }
        });
    }, []);

    /* Function for handling Collection Facility search */
    const HandleSearch = (formData: Dict) => {
        if (formData.idType === 'local') {
            /* Navigate to Search page with Organisation as filter */
            navigate({
                pathname: '/search',
                search: `?organisationId=${formData.organisationId}`
            });
        }
    }

    return (
        <Row>
            <Col>
                <Formik
                    initialValues={{
                        idType: 'local',
                        organisationId: ''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 100));

                        HandleSearch(values);
                    }}
                >
                    <Form>
                        {/* Search by field (idType) */}
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <p className="fw-bold mb-1"> Search by </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Field name="idType" as="select"
                                            className={`${styles.searchBar} w-100`}
                                        >
                                            <option value="local" label="Local Name" />
                                        </Field>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* Search by Organisation (needs to add facility as well) */}
                        <Row className="mt-3">
                            <Col>
                                <Row>
                                    <Col>
                                        <p className="fw-bold mb-1"> Organisation hosting the collection facility </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Field name="organisationId" as="select"
                                            className={`${styles.searchBar} w-100`}
                                        >
                                            <option value="" label="Choose an Organisation" disabled />

                                            {organisations.map((organisation) => {
                                                return (
                                                    <option key={organisation.ror}
                                                        value={organisation.ror}
                                                        label={organisation.name}
                                                    />
                                                );
                                            })}
                                        </Field>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="pt-3">
                            <Col className="d-flex justify-content-end">
                                <button type="submit" className={`${styles.searchButton} px-3 py-1`}>
                                    Search
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Col>
        </Row>
    );
}

export default CollectionFacilitySearch;