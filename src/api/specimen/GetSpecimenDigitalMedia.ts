/* Import Dependencies */
import axios from 'axios';

/* Import Model */
import DigitalMediaModel from 'api/model/DigitalMediaModel';

/* Import Types */
import { DigitalMedia, JSONResultArray } from 'global/Types';


const GetSpecimenDigitalMedia = async (handle: string) => {
    if (handle) {
        let specimenDigitalMedia = [] as DigitalMedia[];

        const endPoint = `specimens/${handle}/digitalmedia`;

        try {
            const result = await axios({
                method: "get",
                url: endPoint,
                responseType: 'json'
            });

            /* Set Specimen Digital Media with Model */
            const data: JSONResultArray = result.data;

            data.data.forEach((dataRow) => {
                const digitalMedia = DigitalMediaModel(dataRow);

                specimenDigitalMedia.push(digitalMedia);
            });
        } catch (error) {
            console.warn(error);
        }

        return specimenDigitalMedia;
    }
}

export default GetSpecimenDigitalMedia;