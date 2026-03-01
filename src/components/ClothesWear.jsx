import React from 'react'
import './ClothesWear.css'
import shirt from "../assets/shirt.png"
import shirt1 from "../assets/shirt1.png"
import shirt2 from "../assets/shirt2.png"
import shirt3 from "../assets/shirt3.png"
import shirt4 from "../assets/shirt4.png"
import shirt5 from "../assets/shirt5.png"
import doublepress from "../assets/doublepress.png"
import bitmap from "../assets/Bitmap.png"
import coat from "../assets/coat.png"
import bag from "../assets/bag.png"
import wallet from "../assets/wallet.png"
import watch from "../assets/watch.png"
import headphone from "../assets/headphone.png"
import camera from "../assets/camera.png"
import tarmas from "../assets/tarmas.png"
import homeappliance from "../assets/homeappliance.png"





const ClothesWear = () => {
  return (
    <div>
        <div className="breadcrumb">
         Home &gt;  Clothing  &gt;  Men’s Wear &gt;  Summer Clothing 
         </div>
        <div className='clothes-box'>
            <div className='whole-shirts-box'>
                <div className='shirt-box'>
                    <img src={shirt} alt="" />
                </div>
                <div className='mini-shirts'>
                    <div className='mini-box'>
                        <img src={shirt} alt="" />
                    </div>
                    <div className='mini-box'>
                        <img id='shirt3' src={shirt1} alt="" />
                    </div>
                    <div className='mini-box'>
                        <img id='shirt3' src={shirt2} alt="" />
                    </div>
                    <div className='mini-box'>
                        <img id='shirt3' src={shirt3} alt="" />
                    </div>
                    <div className='mini-box'>
                        <img id='shirt3' src={shirt4} alt="" />
                    </div>
                    <div className='mini-box'>
                        <img id='shirt3' src={shirt5} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-container">
      
                 {/* LEFT SECTION */}
                <div className="product-left">

                    <p className="stock">✔ In stock</p>

                    <p className="title">
                    Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                    </p>

                    <div className="rating-row">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-score">9.3</span>
                        <span className="reviews">32 reviews</span>
                        <span className="sold">154 sold</span>
                    </div>

                    <div className="price-box">
                        <div className="price-option">
                            <p className="price red">$98.00</p>
                            <p>50-100 pcs</p>
                        </div>

                        <div className="price-option">
                            <p className="price">$90.00</p>
                            <p>100-700 pcs</p>
                        </div>

                        <div className="price-option">
                            <p className="price">$78.00</p>
                            <p>700+ pcs</p>
                        </div>
                    </div>

                    <div className="info-table">
                        <div className="row">
                            <span>Price:</span>
                            <span>Negotiable</span>
                        </div>

                        <div className="row">
                            <span>Type:</span>
                            <span>Classic shoes</span>
                        </div>

                        <div className="row">
                            <span>Material:</span>
                            <span id='pm'>Plastic material</span>
                        </div>

                        <div className="row">
                            <span>Design:</span>
                            <span id='mn'>Modern nice</span>
                        </div>

                        <div className="row">
                            <span>Customization:</span>
                            <span id='cld'>Customized logo and design custom packages</span>
                        </div>

                        <div className="row">
                            <span>Protection:</span>
                            <span id='rp'>Refund Policy</span>
                        </div>

                        <div className="row">
                            <span>Warranty:</span>
                            <span id='y'>2 years full warranty</span>
                        </div>
                    </div>
                </div>

                    {/* RIGHT SECTION */}
                <div className="product-right">
                    <div className="supplier-card">
                        <div className="supplier-header">
                            <div className="logo">R</div>
                                <div>
                                        <p className="supplier-label">Supplier</p>
                                        <p>Guanjoi Trading LLC</p>
                                </div>
                            </div>

                                <hr />
                            <div className='profile-details'>
                                    <p>Germany, Berlin</p>
                                    <p>Verified Seller</p>
                                    <p>Worldwide shipping</p>
                            </div>
                                

                                <button className="btn primary">Send inquiry</button>
                                <button className="btn secondary">Seller’s profile</button>
                            </div>

                            <div className="save">
                           <span id='heart'> ♡ </span>Save for later
                        </div>
                    </div>

                </div>




            <div></div>



        </div>



        <div className="tabs-container">

      {/* LEFT SIDE */}
      <div className="tabs-left">

        {/* Tabs Header */}
        <div className="tabs-header">
          <button className="tab active">Description</button>
          <button className="tab">Reviews</button>
          <button className="tab">Shipping</button>
          <button className="tab">About seller</button>
        </div>

        {/* Description Content */}
        <div className="description-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Info Table */}
        <div className="info-tabless">
          <div className="row">
            <div className="label">Model</div>
            <div className="value">#8786867</div>
          </div>

          <div className="row">
            <div className="label">Style</div>
            <div className="value">Classic style</div>
          </div>

          <div className="row">
            <div className="label">Certificate</div>
            <div className="value">ISO-898921212</div>
          </div>

          <div className="row">
            <div className="label">Size</div>
            <div className="value">34mm x 450mm x 19mm</div>
          </div>

          <div className="row">
            <div className="label">Memory</div>
            <div className="value">36GB RAM</div>
          </div>
        </div>

        {/* Features */}
        <ul className="features">
          <li>✔ Some great feature name here</li>
          <li>✔ Lorem ipsum dolor sit amet, consectetur</li>
          <li>✔ Duis aute irure dolor in reprehenderit</li>
          <li>✔ Duis aute irure dolor in reprehenderit</li>
        </ul>

      </div>


      {/* RIGHT SIDE */}
      <div className="tabs-right">

        <h3>You may like</h3>

        <div className="suggestion">
          <div className="image-box">
            <img id='suggestion-img' src={doublepress} alt="" />
          </div>
          <div>
            <p>Men Blazers Sets Elegant Formal</p>
            <span>$7.00 - $99.50</span>
          </div>
        </div>

        <div className="suggestion">
          <div className="image-box">
            <img id='suggestion-img' src={bitmap} alt="" />
          </div>
          <div>
            <p>Men Shirt Sleeve Polo Contrast</p>
            <span>$7.00 - $99.50</span>
          </div>
        </div>

        <div className="suggestion">
          <div className="image-box">
            <img id='suggestion-img' src={coat} alt="" />
          </div>
          <div>
            <p>Apple Watch Series Space Gray</p>
            <span>$7.00 - $99.50</span>
          </div>
        </div>

        <div className="suggestion">
          <div className="image-box">
            <img id='suggestion-img' src={bitmap} alt="" />
          </div>
          <div>
            <p>Basketball Crew Socks Long Stuff</p>
            <span>$7.00 - $99.50</span>
          </div>
        </div>

        <div className="suggestion">
          <div className="image-box">
            <img id='suggestion-img' src={bag} alt="" />
          </div>
          <div>
            <p>New Summer Men's Castrol T-Shirts</p>
            <span>$7.00 - $99.50</span>
          </div>
        </div>

      </div>
    </div>




     <div className="related-wrapper">
      
      {/* Related Products Section */}
      <div className="related-section">
        <h2>Related products</h2>

        <div className="related-grid">
          
            <div className="product-cards">
              <div className="image-placeholder">
                <img src={wallet} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>

            <div className="product-cards">
              <div className="image-placeholder">
                <img src={watch} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>

            <div className="product-cards">
              <div className="image-placeholder">
                <img src={headphone} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>


            <div className="product-cards">
              <div className="image-placeholder">
                <img src={camera} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>

            <div className="product-cards">
              <div className="image-placeholder">
                <img src={tarmas} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>


            <div className="product-cards">
              <div className="image-placeholder">
                <img src={homeappliance} alt="" />
              </div>
              <p className="product-name">Xiaomi Redmi 8 Original</p>
              <span className="product-price">$32.00-$40.00</span>
            </div>
          
        </div>
      </div>

      {/* Discount Banner */}
      <div className="discount-banner">
        <div className="banner-text">
          <h2>Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>

        <button className="shop-btn">Shop now</button>
      </div>

    </div>






    </div>
  )
}

export default ClothesWear;
