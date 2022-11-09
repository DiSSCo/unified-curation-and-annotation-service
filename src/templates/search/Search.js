/* Import Components */
import Header from "../header/Header";
import Body from "./body/Body";
import Footer from "../footer/Footer";
import './search.scss';


const Search = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <Body />

            <Footer page={'notHome'} />
        </div>
    );
}

export default Search;