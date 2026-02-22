import "./SupplierRegion.css";
import arabicflag from "../assets/arabic.png";
import russiaflag from "../assets/russia.png";
import franceflag from "../assets/france.png";
import itlayflag from "../assets/italy.png";
import denmarkflag from "../assets/denmark.png";
import usaflag from "../assets/unitedstate.png";
import ausflag from "../assets/australia.png";
import chinaflag from "../assets/china.png";
import britishflag from "../assets/british.png";

function Supplier(){
    return(
        <>
        <h2>Supplier by region</h2>
        <div className="supplier-container">
            <div className="supplier-box">
                 <div className="supplier-individual">
                   <img src={arabicflag} alt="arabic flage" />
                   <div className="">
                       <p>Arabic Emirates</p>
                        <p className="contry-website">shopname.ae</p>
                    </div>

                </div>


                <div className="supplier-individual">
                 <img src={denmarkflag} alt="arabic flage" />
                    <div className="">
                      <p>Denmark</p>
                    <p className="contry-website">denmark.com</p>
                    </div>

                </div>
            
            </div>



            <div className="supplier-box">
                 <div className="supplier-individual">
                   <img src={ausflag} alt="arabic flage" />
                   <div className="">
                       <p>Australia</p>
                        <p className="contry-website">shopname.aus</p>
                    </div>

                </div>


                <div className="supplier-individual">
                 <img src={franceflag} alt="arabic flage" />
                    <div className="">
                      <p>France</p>
                    <p className="contry-website">shopname.fr</p>
                    </div>

                </div>
            
            </div>



            <div className="supplier-box">
                 <div className="supplier-individual">
                   <img src={usaflag} alt="arabic flage" />
                   <div className="">
                       <p>Unites state</p>
                        <p className="contry-website">shopname.usa</p>
                    </div>

                </div>


                <div className="supplier-individual">
                 <img src={arabicflag} alt="arabic flage" />
                    <div className="">
                      <p>Arabic Emirates</p>
                    <p className="contry-website">shopname.ae</p>
                    </div>

                </div>
            
            </div>




            <div className="supplier-box">
                 <div className="supplier-individual">
                   <img src={russiaflag} alt="arabic flage" />
                   <div className="">
                       <p>Russia</p>
                        <p className="contry-website">shopname.ru</p>
                    </div>

                </div>


                <div className="supplier-individual">
                 <img src={chinaflag} alt="arabic flage" />
                    <div className="">
                      <p>China</p>
                    <p className="contry-website">shopname.ch</p>
                    </div>

                </div>
            
            </div>






            <div className="supplier-box">
                 <div className="supplier-individual">
                   <img src={itlayflag} alt="arabic flage" />
                   <div className="">
                       <p>Itlay</p>
                        <p className="contry-website">shopname.itl</p>
                    </div>

                </div>


                <div className="supplier-individual">
                 <img src={britishflag} alt="arabic flage" />
                    <div className="">
                      <p>Great Britain</p>
                    <p className="contry-website">shopname.br</p>
                    </div>

                </div>
            
            </div>






        </div>        
        
        </>
    );
}

export default Supplier;