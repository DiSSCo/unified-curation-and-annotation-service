/* Import Dependencies */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';

/* Import Store */
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { getSearchResults, setSearchResults, getSearchSpecimen, setSearchAggregations } from 'redux/search/SearchSlice';

/* Import Types */
import { Specimen, SearchFilter, Dict } from 'global/Types';

/* Import Styles */
import styles from './search.module.scss';

/* Import Components */
import Header from 'components/general/header/Header';
import SearchMenu from './components/searchMenu/SearchMenu';
import ResultsTable from './components/searchResults/ResultsTable';
import Paginator from 'components/general/paginator/Paginator';
import IDCard from './components/IDCard/IDCard';
import Footer from 'components/general/footer/Footer';

/* Import API */
import SearchSpecimens from 'api/specimen/SearchSpecimens';
import GetRecentSpecimens from 'api/specimen/GetRecentSpecimens';
import GetSpecimenAggregations from 'api/specimen/GetSpecimenAggregations';


const Search = () => {
    /* Hooks */
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    /* Base variables */
    const searchResults = useAppSelector(getSearchResults);
    const searchSpecimen = useAppSelector(getSearchSpecimen);
    const pageSize = 25;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [paginatorLinks, setPaginatorLinks] = useState<Dict>({});

    /* OnLoad/OnChange of search params: check filters, then action a search */
    useEffect(() => {
        const searchFilters: SearchFilter[] = [];

        /* ForEach filter, push to Search Filters state */
        for (const searchParam of searchParams.entries()) {
            searchFilters.push({
                [searchParam[0]]: searchParam[1]
            });
        }

        /* If any filter is selected */
        if (!isEmpty(searchFilters)) {
            /* Action Search */
            SearchSpecimens(searchFilters, pageSize, pageNumber).then(({ specimens, links }) => {
                HandleSearch(specimens, links);
            });
        } else {
            /* Grab Recent Specimens */
            GetRecentSpecimens(pageSize, pageNumber).then(({ specimens, links }) => {
                HandleSearch(specimens, links);
            });
        }

        /* Function for handling Search results, page number and filters after new call */
        const HandleSearch = (specimens: Specimen[], links: Dict) => {
            /* Set Search Results / Specimens */
            dispatch(setSearchResults(specimens));

            /* Set Paginator links */
            setPaginatorLinks(links);
        }

        /* Refresh Aggregations */
        GetSpecimenAggregations(searchFilters).then((aggregations) => {
            dispatch(setSearchAggregations(aggregations));
        });
    }, [searchParams, pageNumber]);

    /* ClassName for Search Menu Block */
    const classSearchMenu = classNames({
        'transition': true,
        'w-0': !isEmpty(searchSpecimen),
    });

    /* ClassName for Search Results Block */
    const classSearchResults = classNames({
        'transition bg-white position-absolute z-1': true,
        'offset-md-3': isEmpty(searchSpecimen),
        'w-50': !isEmpty(searchSpecimen)
    });

    /* ClassName for ID Card Block */
    const classIDCard = classNames({
        'transition bg-white position-absolute z-0': true,
        'w-50': !isEmpty(searchSpecimen)
    });

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <Container fluid className={`${styles.searchContent} mt-5`}>
                <Row className="h-100">
                    {/* Button for toggling filters */}
                    <Col md={{ span: 10, offset: 1 }} className="h-100">
                        <Row className="position-relative h-100">
                            <Col md={{ span: 3 }} className={`${classSearchMenu} h-100`}>
                                {/* Search Menu */}
                                <SearchMenu />
                            </Col>
                            <Col md={{ span: 9 }} className={`${classSearchResults} h-100`}>
                                <Row className={`${styles.searchResults} `}>
                                    {/* Search Results */}

                                    <Col md={{ span: 12 }} className="h-100 pb-2">
                                        <ResultsTable pageNumber={pageNumber} />
                                    </Col>
                                </Row>

                                <Row className={`${styles.paginator} justify-content-center position-relative`}>
                                    <Col className={`${styles.resultCount} col-md-auto py-2 position-absolute start-0 ps-4`}>
                                        {(searchResults.length === 1) ?
                                            <p className="fst-italic"> 1 specimen found </p>
                                            : <p className="fst-italic"> {searchResults.length} specimens found </p>
                                        }
                                    </Col>

                                    {(searchResults.length > 0) &&
                                        <Col className="col-md-auto">
                                            <Paginator pageNumber={pageNumber}
                                                links={paginatorLinks}

                                                SetPageNumber={(pageNumber: number) => setPageNumber(pageNumber)}
                                            />
                                        </Col>
                                    }
                                </Row>
                            </Col>
                            <Col md={{ span: 6, offset: 6 }} className={`${classIDCard} h-100 pb-2`}>
                                {/* ID Card */}
                                {!isEmpty(searchSpecimen) &&
                                    <IDCard />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default Search;