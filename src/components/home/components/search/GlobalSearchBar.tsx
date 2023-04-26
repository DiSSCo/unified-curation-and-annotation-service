/* Import Dependencies */
import { useNavigate, createSearchParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

/* Import Styles */
import styles from 'components/home/home.module.scss';


/* Props Typing */
interface Props {
    ToggleAdvancedFilter: Function
};


const GlobalSearchBar = (props: Props) => {
    const { ToggleAdvancedFilter } = props;

    /* Hooks */
    const navigate = useNavigate();

    /* Function for handling Specimen search methods */
    const HandleSearch = (searchQuery: string) => {
        navigate({
            pathname: '/search',
            search: `?${createSearchParams({ q: searchQuery })}`
        });
    }

    return (
        <Row>
            <Col>
                <p className="fw-bold"> Search specimens </p>

                <Formik
                    initialValues={{
                        searchQuery: ''
                    }}
                    onSubmit={async (form) => {
                        await new Promise((resolve) => setTimeout(resolve, 100));

                        const searchQuery = form['searchQuery'];

                        HandleSearch(searchQuery);
                    }}
                >
                    <Form>
                        <Row className="mt-2">
                            <Col>
                                <Field name="searchQuery" type="text"
                                    placeholder="Iguanodon"
                                    className={`${styles.searchBar} w-100`}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={{ span: 7 }} className="d-flex align-items-center">
                                <p className={styles.advancedSearchToggle}
                                    onClick={() => ToggleAdvancedFilter()}
                                >
                                    Advanced Search
                                </p>
                            </Col>
                            <Col md={{ span: 5 }} className="d-flex justify-content-end">
                                <button type="submit" className="primaryButton">
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

export default GlobalSearchBar;