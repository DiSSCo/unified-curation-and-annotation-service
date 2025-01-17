/* Import Dependencies */
import { Row, Col } from 'react-bootstrap';

/* Import Config */
import PropertiesTableConfig from 'app/config/table/PropertiesTableConfig';

/* Import Utilities */
import { MakeReadableString } from 'app/Utilities';

/* Import Types */
import { Dict } from 'app/Types';

/* Import Styles */
import styles from 'components/digitalSpecimen/digitalSpecimen.module.scss';

/* Import Components */
import { DataTable } from 'components/elements/customUI/CustomUI';


/* Property key value pair type */
type DataRow = {
    key: string,
    value: string | number | boolean
};

/* Props Typing */
type Props = {
    title: string,
    properties: Dict,
    baseJsonPath: string,
    annotationMode: boolean,
    SetAnnotationTarget: Function
};


/**
 * Component that renders a properties table for displaying all properties of a class in key value pairs
 * @param title The title of the class from which the proprties are displayed
 * @param properties The properties dictionary
 * @param baseJsonPath The base JSON path to build the annotation target from together with the property
 * @param annotationMode Boolean indicating ig the annotation mode is on
 * @param SetAnnotationTarget Function to set the annotation target
 * @returns JSX Component
 */
const PropertiesTable = (props: Props) => {
    const { title, properties, baseJsonPath, annotationMode, SetAnnotationTarget } = props;

    /* Data table configutation */
    const { columns } = PropertiesTableConfig();

    /* Set Table data */
    const tableData: DataRow[] = [];

    for (const property in properties) {
        tableData.push({
            key: property,
            value: properties[property]
        });
    };

    return (
        <Row>
            <Col>
                {/* Title */}
                <Row className="mt-2">
                    <Col>
                        <p className="fs-3 fw-lightBold"> {MakeReadableString(title)} </p>
                    </Col>
                </Row>
                {/* Table Body */}
                <Row className="mt-2">
                    <Col>
                        <div className={`${styles.propertiesTable} h-100 overflow-auto position-relative rounded-c}`}>
                            <DataTable columns={columns}
                                data={tableData}
                                SelectAction={(row: DataRow) => annotationMode && SetAnnotationTarget('term', `${baseJsonPath}['${row.key}']`)}
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default PropertiesTable;