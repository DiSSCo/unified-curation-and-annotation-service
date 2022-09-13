import React from "react";
import { Row, Col } from 'react-bootstrap';

/* Fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
    function HandleKeyPress(event) {
        if (event.key === 'Enter') {
            props.onSearch();
        }
    }

    return (
        <Row>
            <Col md={{ span: 12 }} className="search_searchBar py-3 px-4">
                <Row>
                    <Col md={{ span: 12 }} className="search_searchBar">
                        <h2 className="search_searchBarTitle">
                            Search for specimens:
                        </h2>

                        <input type="text"
                            id="search_searchBar"
                            className="search_searchBarInput"
                            onChange={props.updateSearchQuery} value={props.searchQuery}
                            onKeyPress={HandleKeyPress}
                            placeholder="Thalassodromeus"
                        />
                        <button type="submit" className="search_searchBarSubmit" onClick={props.onSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );

}

export default SearchBar;