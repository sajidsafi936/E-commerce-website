import "./HomeDealsSection.css";
import watchImage from "../assets/watch.png";
import LaptopImage from "../assets/laptop.png";
import cameraImage from "../assets/camera.png";
import blueheadImage from "../assets/blueheadphones.png";
import canonImage from "../assets/canon.png";
import Image from "../assets/image.png";
import chair from "../assets/chair.png";
import tarmas from "../assets/tarmas.png";
import mixer from "../assets/mixer.png";
import dishes from "../assets/dishes.png";
import mug from "../assets/mug.png";
import homeappliance from "../assets/homeappliance.png";
import fawda from "../assets/fawda.png";
import minibanner from "../assets/minibanner.png";
import mob from "../assets/mob.png";
import mobiles from "../assets/mobiles.png";






function HomeDeals(){
    return(
        <>
            <div className="homedeals-first">
                <div className="home-offers">
                    <h3 id="hh3">Deals and offers</h3>
                    <h5>Hygiene equipments</h5>
                    <div className="timing-boxes">
                        <div className="timing">
                            <h3>04</h3>
                            <h6>days</h6>
                        </div>
                        <div className="timing">
                            <h3>13</h3>
                            <h6>Hour</h6>
                        </div>
                        <div className="timing">
                            <h3>34</h3>
                            <h6>Min</h6>
                        </div>
                        <div className="timing"> 
                            <h3>56</h3>
                            <h6>Sec</h6>
                        </div>
                    </div>
                </div>
                <div className="offer-items">
                    <img src={watchImage} alt="watch" />
                    <h5>Smart watches</h5>
                    <h5 id="hh5">-25%</h5>
                </div>
                <div className="offer-items">
                    <img  id="lap" src={LaptopImage} alt="laptop" />
                    <h5  id="laph5">Laptops</h5>
                    <h5 id="hh5">-15%</h5>
                </div>
                <div className="offer-items">
                    <img id="cam" src={cameraImage} alt="camera" />
                    <h5>GoPro cameras</h5>
                    <h5 id="hh5">-40%</h5>
                </div>
                <div className="offer-items">
                    <img id="headph" src={blueheadImage} alt="headphones" />
                    <h5>Headphones</h5>
                    <h5 id="hh5">-25%</h5>
                </div>
                <div className="offer-items" id="offer-items-last">
                    <img id="cann" src={canonImage} alt="canon" />
                    <h5>Canon cameras</h5>
                    <h5 id="hh5">-25%</h5>
                </div>
            </div>




    
            <div className="homedeals-second">
                <div className="dealsecond-first" style={{ backgroundImage: `url(${Image})`}} >
                    <h3>Home and outdoor</h3>
                    <button>Source now</button>
                </div>
                <div className="dealmultiple">
                    <div className="dealsecond-one">
                        <div>
                            <p id="ss">Soft chairs</p>
                            <p id="pp">From USD 19</p>
                        </div>
                       <div>
                           <img id="cc" src={chair} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Tarmas</p>
                           <p id="pp">From USD 10</p>
                        </div>
                        <div>
                          <img id="cc" src={tarmas} alt="" />
                        </div>
                    </div>

                </div>

                
                <div className="dealmultiple">
                   <div className="dealsecond-one">
                        <div>
                           <p id="ss">Mixer</p>
                           <p id="pp">From USD 9</p>
                        </div>
                        <div>
                           <img id="cc" src={mixer} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Dishes</p>
                           <p id="pp">From USD 5</p>
                        </div>
                        <div>
                          <img id="cc" src={dishes} alt="" />
                        </div>
                    </div>

                </div>



                <div className="dealmultiple">
                   <div className="dealsecond-one">
                        <div>
                           <p id="ss">Mug</p>
                           <p id="pp">From USD 10</p>
                       </div>
                       <div>
                           <img id="cc" src={mug} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Home appliance</p>
                           <p id="pp">From USD 19</p>
                        </div>
                        <div>
                          <img id="cc" src={homeappliance} alt="" />
                        </div>
                    </div>

                </div>



                <div className="dealmultiple">
                   <div id="bb" className="dealsecond-one">
                        <div>
                           <p id="ss">Gamla</p>
                           <p id="pp">From USD 12</p>
                       </div>
                       <div>
                           <img id="cc" src={fawda} alt="" />
                        </div>
                    </div>
                    <div id="cmc" className="dealsecond-two">
                        <div>
                           <p id="ss">Mobile</p>
                           <p id="pp">From USD 50</p>
                        </div>
                        <div>
                          <img id="cc" src={mobiles} alt="" />
                        </div>
                    </div>

                </div>
            






            </div>




             <div className="homedeals-second">
                <div className="dealsecond-first" style={{ backgroundImage: `url(${minibanner})`}} >
                    <h3>Consumer electronics and gadgets</h3>
                    <button>Source now</button>
                </div>
                <div className="dealmultiple">
                    <div className="dealsecond-one">
                        <div>
                            <p id="ss">Hand watch</p>
                            <p id="pp">From USD 25</p>
                        </div>
                       <div>
                           <img className="cc" id="cc" src={watchImage} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Headphones</p>
                           <p id="pp">From USD 15</p>
                        </div>
                        <div>
                          <img className="cc" id="cc" src={blueheadImage} alt="" />
                        </div>
                    </div>

                </div>

                
                <div className="dealmultiple">
                   <div className="dealsecond-one">
                        <div>
                           <p id="ss">Camera</p>
                           <p id="pp">From USD 29</p>
                        </div>
                        <div>
                           <img className="cc" id="cc" src={cameraImage} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Laptop</p>
                           <p id="pp">From USD 56</p>
                        </div>
                        <div>
                          <img className="ll" id="cc" src={LaptopImage} alt="" />
                        </div>
                    </div>

                </div>



                <div className="dealmultiple">
                   <div className="dealsecond-one">
                        <div>
                           <p id="ss">Tarmas</p>
                           <p id="pp">From USD 12</p>
                       </div>
                       <div>
                           <img id="cc" src={tarmas} alt="" />
                        </div>
                    </div>
                    <div className="dealsecond-two">
                        <div>
                           <p id="ss">Mobiles</p>
                           <p id="pp">From USD 59</p>
                        </div>
                        <div>
                          <img className="cc" id="cc" src={canonImage} alt="" />
                        </div>
                    </div>

                </div>



                <div className="dealmultiple">
                   <div id="bb" className="dealsecond-one">
                        <div>
                           <p id="ss">Mobiles</p>
                           <p id="pp">From USD 49</p>
                       </div>
                       <div>
                           <img id="cc" src={mob} alt="" />
                        </div>
                    </div>
                    <div id="cmc" className="dealsecond-two">
                        <div>
                           <p id="ss">Mobile phone</p>
                           <p id="pp">From USD 59</p>
                        </div>
                        <div>
                          <img id="cc" src={mobiles} alt="" />
                        </div>
                    </div>

                </div>
            






            </div>

        </>

    );
}

export default HomeDeals;