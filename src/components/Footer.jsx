import "./Footer.css";
import brandLogo from "../assets/logo-colored.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import unitedstate from "../assets/unitedstate.png";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <>
             <div className="footer-top">
                <div className="footer-logo-text">
                     <img id="footer-logo" src={brandLogo}/>
                     <p>Best information about the company is here but now you can search it.</p>
                     <img className="footor-top-icons" src={facebook} alt="facebook" />
                     <img className="footor-top-icons" src={twitter} alt="facebook" />
                     <img className="footor-top-icons" src={linkedin} alt="facebook" />
                     <img className="footor-top-icons" src={instagram} alt="facebook" />
                     <img className="footor-top-icons" src={youtube} alt="facebook" />
                </div>

                <div className="footer-top-about">
                    <p>About</p>
                    <p id="ftp">About Us Find Store Catagories Blogs</p>
                </div>

                <div className="footer-top-about">
                    <p>Partnership</p>
                    <p id="ftp">About Us Find Store Catagories Blogs</p>
                </div>

                <div className="footer-top-about">
                    <p>Information</p>
                    <p id="ftp">About Us Find Store Catagories Blogs</p>
                </div>

                <div className="footer-top-about">
                    <p>For Users</p>
                    <p id="ftp">About Us Find Store Catagories Blogs</p>
                </div>

                <div id="google-app-box" className="footer-top-about">
                    <p>Get App</p>
                    <img className="google-logo" src={googleplay} alt="google" />
                    <img className="google-logo" src={appstore} alt="appstore" />
                </div>

            </div>

            <div className="footer-bottom">
                <div>
                    © {currentYear} Ecommerce.
                </div>
                <div>
                    <select>
                        <option>English</option>
                        <option>Urdu</option>
                        <option>English</option>
                        <option>English</option>
                    </select>
                </div>
            </div>


            
        
        
        
        </>
    );
}
export default Footer;