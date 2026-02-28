import "./ExtraServices.css";
import industryHub from "../assets/industry hub.png";
import product from "../assets/product img.png";
import productins from "../assets/product inspection.png";
import aeroplane from "../assets/aeroplane.png";
import search from "../assets/search.png";
import giftbox from "../assets/giftbox.png";
import send from "../assets/send.png";
import shield from "../assets/shield.png";

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
            <img className="industryhub-img" src={product} alt="picture" />
            <p>Sources from industry hub</p>
            <img className="search-img" src={giftbox} alt="search" />
        </div>


        <div className="ES-box">
            <img className="industryhub-img" src={aeroplane} alt="picture" />
            <p>Sources from industry hub</p>
            <img className="search-img" src={send} alt="search" />
        </div>

        <div className="ES-box">
            <img className="industryhub-img" src={productins} alt="picture" />
            <p>Sources from industry hub</p>
            <img className="search-img" src={shield} alt="search" />
        </div>


        </div>
        
        </>
    );
}

export default ExtraServices;