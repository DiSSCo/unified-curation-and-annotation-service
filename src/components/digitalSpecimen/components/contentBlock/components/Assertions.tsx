/* Import Types */
import { DigitalSpecimen } from "app/types/DigitalSpecimen";

/* Import Components */
import { ClassProperties } from "components/elements/Elements";


/* Props Type */
type Props = {
    digitalSpecimen: DigitalSpecimen
};


/**
 * Component that renders 
 * @returns 
 */
const Assertions = (props: Props) => {
    const { digitalSpecimen } = props;

    return (
        <div className="h-100">
            {digitalSpecimen["ods:hasAssertions"]?.map((assertion, index) => (
                <ClassProperties key={assertion["@id"]}
                    index={index}
                    title="assertion"
                    properties={assertion}
                />
            ))}
        </div>
    );
};

export default Assertions;