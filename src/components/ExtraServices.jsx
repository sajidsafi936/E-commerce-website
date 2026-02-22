import "./ExtraServices.css";
import industryHub from "../assets/industry hub.png";
import search from "../assets/search.png";

function ExtraServices(){
    return(
        <>
        <h2 className="ES-heading">Our extra services</h2>
        <div className="ES">
        <div className="ES-box">
            <img className="industryhub-img" src={industryHub } alt="picture" />
            <p>Sources from industry hub</p>
            <img className="search-img" src={search} alt="search" />
        </div>


        <div className="ES-box">
            <img className="industryhub-img" src={industryHub } alt="picture" />
            <p>Sources from industry hub</p>
        </div>


        <div className="ES-box">
            <img className="industryhub-img" src={industryHub } alt="picture" />
            <p>Sources from industry hub</p>
        </div>

        <div className="ES-box">
            <img className="industryhub-img" src={industryHub } alt="picture" />
            <p>Sources from industry hub</p>
        </div>


        </div>
        
        </>
    );
}

export default ExtraServices;