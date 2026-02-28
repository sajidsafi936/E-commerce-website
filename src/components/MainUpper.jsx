import "./MainUpper.css"
import userimage from "../assets/user.png";
import banner from "../assets/banner.png";
import { useNavigate } from "react-router-dom";

function MainUpper(){
       const navigate = useNavigate(); // get navigate function

    // Function to handle click on Electronics
    const handleAutomobileClick = () => {
        navigate("/productListingPage"); // redirects to product listing page
        
    };

    const handleClothesandwareClick = () => {
        navigate("/ClothesPage"); // redirects to product listing page
        
    };

    return(
        <>
        <div className="main-upper-box">
            <div className="main-upper-first">
                 {/* Make Automobiles clickable */}
                <p onClick={handleAutomobileClick} style={{cursor: "pointer"}}>Electronics</p>
                <p  onClick={handleClothesandwareClick} style={{cursor: "pointer"}}>Clothes and wear</p>
                <p>Home interiors</p>
                <p>Computer and tech</p>
                <p>Tool, equipments</p>
                <p>Sports and outdoor</p>
                <p>Animals and pets</p>
                <p>Machinery tools</p>
                <p>More catogry</p>
            </div>
            <div className="main-upper-second" style={{ backgroundImage: `url(${banner})`}}>
                <h2>Latest trending</h2>
                <h1>Electronic items</h1>
                <button>Learn more</button>
            </div>
            <div className="main-upper-third">
                <div className="one">
                    <div id="one">
                     <img src={userimage} alt="profile" />
                     <h4>Hi, user let's get started</h4>
                    </div>
                    <button id="join-btn">Join now</button>
                    <button id="login-btn">Log in</button>
                </div>
                <div className="two">
                    <h4>Get US $10 off with a new supplier</h4>
                </div>
                <div className="three">
                    <h4>Send quotes with supplier prefrences</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainUpper;