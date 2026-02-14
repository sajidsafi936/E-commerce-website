import "./Navbar.css";

function Navbar(){
    return(
        <div>
            <div className="navbar-box">
                <div>
                    <span>☰ </span>
                <a href="#">All Category</a>
                </div>
                  <a href="#">Hot offers</a>
                  <a href="#">Gift boxes</a>
                  <a href="#">Projects</a>
                   <a href="#">Menu item</a>
                <select className="select">
                    <option>Help</option>
                    <option>Help</option>
                    <option>Help</option>

                </select>

                <select className="select" id="second-select">
                    <option>English, USD</option>
                    <option>Help</option>
                    <option>Help</option>

                </select>

                <select className="select">
                    <option>Ship To</option>
                    <option>Help</option>
                    <option>Help</option>

                </select>
            </div>
            <hr className="second-line" />
        </div>
    );
}

export default Navbar;