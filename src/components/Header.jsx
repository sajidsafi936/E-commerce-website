import React from "react";
import brandLogo from "../assets/logo-colored.png";
import profile from "../assets/profile.png";
import messages from "../assets/comment.png";
import cart from "../assets/shopping.png";
import orders from "../assets/delivery-status.png";
import "./Header.css";


function Header(){
    return(
        <div>
        <div className="header-css">
            <img id="logo" src={brandLogo}/>
            <div className="header-wraper">
                <input type="text" placeholder="search" />
                <select>
                    <option>All category</option>
                    <option>some</option>
                    <option>none</option>
                </select>
                <button className="search-btn">Search</button>
            </div>
            <div className="icons-box">
                <div className="icons">
                    <img className="header-icons" src={profile} alt="" />
                    <h4>Profile</h4>
                </div>
                <div className="icons">
                    <img className="header-icons" src={messages} alt="" />
                    <h4>Messages</h4>
                </div>
                <div className="icons">
                    <img className="header-icons" src={orders} alt="" />
                    <h4>Orders</h4>
                </div>
                <div className="icons">
                    <img className="header-icons" src={cart} alt="" />
                    <h4>Cart</h4>
                </div>

    
            </div>
        </div>
         <hr className="first-line" />
        </div>
    )
    
}

export default Header;