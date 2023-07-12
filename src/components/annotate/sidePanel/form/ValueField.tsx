/* Import Dependencies */
import { Field } from 'formik';

/* Import Types */
import { Dict } from 'global/Types';


/* Props Typing */
interface Props {
    motivationObject: Dict
};


const ValueField = (props: Props) => {
    const { motivationObject } = props;

    return (
        <Field type="text" name="annotationValue"
            className="formField w-100"
        />
    );
}

export default ValueField;