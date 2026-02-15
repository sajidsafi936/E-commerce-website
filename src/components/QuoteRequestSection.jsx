import "./QuoteRequestSection.css";
import minibanner2 from "../assets/banner2.png"


function QuoteRequest(){
    return(
        <>
            <div className="quoterequest-first" style={{backgroundImage:`url(${minibanner2})`}}>
            
                <div className="quote-text">
                    <h2>An easy way to send requests to all suppliers</h2>
                    <p>This is an easy way to send request and make your suppliers in contact with you</p>

                </div>

                <div className="quote-box">
                    <h3>
                        Send quote to suppliers
                    </h3>
                    <input type="text" placeholder="what item you need?" />
                    <textarea placeholder="Type more details"></textarea>

                    <div className="quote-select">
                        <select>
                            <option>Quantity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>

                        <select id="op">
                            <option>Pcs</option>
                            <option>Kg</option>
                            <option>Box</option>
                        </select>
                    </div>

                    <button>Send inquiry</button>

                </div>

             </div>
        
        
        </>
    );
}

export default QuoteRequest;