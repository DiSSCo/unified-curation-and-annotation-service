/* Import Dependencies */
import { useEffect, useState } from 'react';
import Moment from 'moment';
import { Row, Col } from 'react-bootstrap';

/* Import Types */
import { Dict } from 'app/Types';

/* Import Utilities */
import MachineJobRecordTableConfig from 'app/config/tables/MachineJobRecordTableConfig';

/* Import Components */
import DataTable from 'components/general/tables/DataTable';
import Paginator from 'components/general/paginator/Paginator';


/* Props Typing */
interface Props {
    targetId: string,
    GetMachineJobRecords: (targetId: string, pageSize: number, pageNumber: number, state?: string) => Promise<{ machineJobRecords: Dict[], links: Dict }>
};


const AutomatedAnnotationsOverview = (props: Props) => {
    const { targetId, GetMachineJobRecords } = props;

    /* Declare type of a table row */
    interface DataRow {
        index: number,
        id: string,
        targetId: string,
        scheduled: string,
        completed: string,
        state: string
    };

    /* Base variables */
    const [tableData, setTableData] = useState<DataRow[]>([]);
    const [paginatorLinks, setPaginatorLinks] = useState<Dict>({});
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [filterState, setFilterState] = useState<string>('');
    const pageSize = 10;

    /* OnLoad: Fetch Machine Job Records */
    useEffect(() => {
        GetMachineJobRecords(targetId, pageSize, pageNumber, filterState).then(({ machineJobRecords, links }) => {
            /* Construct table data */
            const tableData: DataRow[] = [];

            machineJobRecords.forEach((machineJobRecord, index) => {
                tableData.push({
                    index: index,
                    id: machineJobRecord.id,
                    targetId: machineJobRecord.attributes.targetId,
                    scheduled: Moment(machineJobRecord.attributes.timeStarted).format('MMMM DD - YYYY'),
                    completed: machineJobRecord.attributes.timeCompleted ? Moment(machineJobRecord.attributes.timeCompleted).format('MMMM DD - YYYY') : '--',
                    state: machineJobRecord.attributes.state
                });
            });

            setTableData(tableData);
            setPaginatorLinks(links);
        }).catch(error => {
            console.warn(error);
        });
    }, [filterState]);

    /* Table Config */
    const { columns } = MachineJobRecordTableConfig();

    return (
        <div className="h-100 d-flex flex-column">
            {/* Filters for Machine Job Records */}
            <Row>
                <Col md={{ span: 3 }}>
                    <p className="fs-5 fw-lightBold"> State </p>

                    <select className="filterDropdown"
                        onChange={(event) => setFilterState(event.target.value)}
                    >
                        <option value=""> All </option>
                        <option value="SCHEDULED"> Scheduled </option>
                        <option value="RUNNING"> Running </option>
                        <option value="FAILED"> Failed </option>
                        <option value="COMPLETED"> Completed </option>
                    </select>
                </Col>
            </Row>
            {/* Data Table of Machine Job Records */}
            <Row className="flex-grow-1 pb-2 mt-2">
                <Col className="h-100">
                    <div className="h-100 overflow-scroll b-secondary rounded-c">
                        <DataTable columns={columns}
                            data={tableData}
                        />
                    </div>
                </Col>
            </Row>
            {/* Paginator for Machine Job Records Table */}
            <Row className={`justify-content-center`}>
                <Col className="col-md-auto">
                    <Paginator pageNumber={pageNumber}
                        links={paginatorLinks}

                        SetPageNumber={(pageNumber: number) => setPageNumber(pageNumber)}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default AutomatedAnnotationsOverview;