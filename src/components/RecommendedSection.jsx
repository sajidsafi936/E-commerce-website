import "./RecommendedSection.css";
import bitmap from "../assets/Bitmap.png";
import coat from "../assets/coat.png";
import doublepress from "../assets/doublepress.png";
import wallet from "../assets/wallet.png";
import bag from "../assets/bag.png";
import short from "../assets/short.png";
import headphone from "../assets/headphone.png";
import mug from "../assets/mug.png";
import tarmas from "../assets/tarmas.png";

function Recommended(){
    return(
        <>
            <h2 className="recommended-text">Recommended items</h2>
            <div className="recommended-boxes">
                <div className="recommended-item">
                    <img src={bitmap} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img src={coat} />
                    <h4>$12.40</h4>
                    <p>Coats with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img src={doublepress} />
                    <h4>$99.99</h4>
                    <p>Doublepress waskat with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img src={wallet} />
                    <h4>$34.10</h4>
                    <p>Wallet with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img src={bag} />
                    <h4>$49.50</h4>
                    <p>Bag with multiple colour, for men and women.</p>
                </div>

            </div>

            <div className="recommended-boxes">
                <div className="recommended-item">
                    <img id="ridshort" src={short} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img id="rid" src={headphone} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img src={bag} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img id="rid" src={mug} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>

                <div className="recommended-item">
                    <img id="rid" src={tarmas} />
                    <h4>$10.30</h4>
                    <p>T-shirts with multiple colour, for men.</p>
                </div>
            </div>
        
        
        
        </>
    );
}

export default Recommended;