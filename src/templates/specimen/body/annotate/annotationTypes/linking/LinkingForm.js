import { Row, Col } from 'react-bootstrap';


const LinkingForm = (props) => {
    const modalProperty = props.modalProperty;
    const formData = props.formData['linking'];

    const HandleSubmit = event => {
        event.preventDefault();

        props.SubmitForm('linking');
    }

    return (
        <Row className="mt-3">
            <Col>
                <Row>
                    <Col md={{ span: 9 }}>
                        <div className="annotate_annotationTypeContext px-2 py-2">
                            This annotation type is used when a false relationship or link is
                            detected and needs to be replaced with a valid one.
                        </div>
                    </Col>
                </Row>

                <form className="mt-4" onSubmit={HandleSubmit}>
                    <Row>
                        <Col>
                            <p className="annotate_annotationTypeFieldTitle"> Chosen attribute: </p>
                            <input className="annotate_annotationTypeField"
                                disabled
                                name="attributeValue"
                                value={modalProperty['displayName']}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p className="annotate_annotationTypeFieldTitle"> New link: </p>
                            <input className="annotate_annotationTypeField"
                                name="value"
                                defaultValue={formData && formData['value']}
                                autoComplete="false"
                                onChange={(value) => props.UpdateFormData('linking', 'value', value)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p className="annotate_annotationTypeFieldTitle"> Based on: </p>
                            <input className="annotate_annotationTypeField"
                                name="based_on"
                                defaultValue={formData && formData['based_on']}
                                autoComplete="false"
                                onChange={(basedOn) => props.UpdateFormData('linking', 'based_on', basedOn)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p className="annotate_annotationTypeFieldTitle"> Remarks: </p>
                            <textarea className="annotate_annotationTypeTextArea"
                                rows="4"
                                name="remarks"
                                defaultValue={formData && formData['description']}
                                onChange={(remarks) => props.UpdateFormData('linking', 'description', remarks)}
                            />
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <button type="submit"
                                value="Save annotation"
                                className="annotate_annotationTypeSubmit"
                            >
                                Save annotation
                            </button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    );
}

export default LinkingForm;