import React from 'react'
import "./MyCart.css"
import bitmap from '../assets/bitmap.png'
import lock from '../assets/lock.png'
import comment from '../assets/comment-second.png'
import delivery from '../assets/delivery.png'
import watch from '../assets/watch.png'
import mobiles from '../assets/mobiles.png'
import mob from '../assets/mob.png'
import laptop from '../assets/laptop.png'



const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/250x180",
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/250x180",
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/250x180",
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/250x180",
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
  ];

const MyCart = () => {
  return (
    <>
    <div className="cart-container">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="cart-items">
            <div>

        </div>

        <div className='my-cart-item'>
            <img src={bitmap} alt="" />
            <div className='title-description'>
                <p>T-shirts with multiple colors, for men and lady</p>
                <p>Size:medium, Color:blue, Material:plastic Seller:Artel Market</p>
                <div className='remove-save-btn'>
                    <button id='btn-remove'>Remove</button>
                    <button id='btn-save'>Save for later</button>
                </div>
            </div>
            <div className='price-quantity'>
                <p>$78.99</p>
                <select>
                    <option>Qty: 9</option>
                </select>
            </div>
        </div>
        <hr />


        <div className='my-cart-item'>
            <img src={bitmap} alt="" />
            <div className='title-description'>
                <p>T-shirts with multiple colors, for men and lady</p>
                <p>Size:medium, Color:blue, Material:plastic Seller:Artel Market</p>
                <div className='remove-save-btn'>
                    <button id='btn-remove'>Remove</button>
                    <button id='btn-save'>Save for later</button>
                </div>
            </div>
            <div className='price-quantity'>
                <p>$78.99</p>
                <select>
                    <option>Qty: 9</option>
                </select>
            </div>
        </div>
        <hr />


        <div className='my-cart-item'>
            <img src={bitmap} alt="" />
            <div className='title-description'>
                <p>T-shirts with multiple colors, for men and lady</p>
                <p>Size:medium, Color:blue, Material:plastic Seller:Artel Market</p>
                <div className='remove-save-btn'>
                    <button id='btn-remove'>Remove</button>
                    <button id='btn-save'>Save for later</button>
                </div>
            </div>
            <div className='price-quantity'>
                <p>$78.99</p>
                <select>
                    <option>Qty: 9</option>
                </select>
            </div>
        </div>
        <hr />

        

        <div className="cart-footer">
          <button className="back-btn">← Back to shop</button>
          <button className="remove-all">Remove all</button>
        </div>
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="summary">
        <div className="coupon">
          <p>Have a coupon?</p>
          <div className="coupon-input">
            <input placeholder="Add coupon" />
            <button>Apply</button>
          </div>
        </div>

        <div className="summary-details">
          <div className="row">
            <span>Subtotal:</span>
            <span>$1403.97</span>
          </div>
          <div className="row discount">
            <span>Discount:</span>
            <span>- $60.00</span>
          </div>
          <div className="row tax">
            <span>Tax:</span>
            <span>+ $14.00</span>
          </div>

          <hr />

          <div className="row total">
            <span>Total:</span>
            <span>$1357.97</span>
          </div>

          <button className="checkout">Checkout</button>

          <div className="payments">
            <span>AMEX</span>
            <span>MC</span>
            <span>PayPal</span>
            <span>VISA</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>

    </div>

            <div className='secure-comment-devilery'>
              <img src={lock} alt="securePayment" />
              <div>
                <p>Secure payment</p>
                <p id='security-comment'>Have you ever finally just</p>
              </div>

              <img src={comment} alt="securePayment" />
              <div>
                <p>Costomer support</p>
                <p id='security-comment'>Have you ever finally just</p>
              </div>


              <img src={delivery} alt="securePayment" />
              <div>
                <p>Free delivery</p>
                <p id='security-comment'>Have you ever finally just</p>
              </div>

            </div>

            <div className='saveforlater-box'>
              <p id='sss'>Save for later</p>
            <div className='saveforlater'>
              <div className='save-items'>
              <div className='save-item-box'>
                <img id='mobile-img' src={mobiles} alt="mobile" />
              </div>
              <p id='saveitem-price'>$99.50</p>
              <p className='saveitem-title'>GoPro HERO6 4K Action</p>
              <p className='saveitem-camera'>Camera -Black</p>
              <button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="#007bff" 
                  viewBox="0 0 24 24"
                 >
                  <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C7.16 17.37 8.48 19 10 19h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03L23 6H6"/>
                  <circle cx="10.5" cy="20.5" r="1.5"/>
                  <circle cx="18.5" cy="20.5" r="1.5"/>
                </svg>
                  <span id='addtocart'>Move to Cart</span></button>
                  </div>




                  <div className='save-items'>
              <div className='save-item-box'>
                <img id='mobile-img' src={mob} alt="mobile" />
              </div>
              <p id='saveitem-price'>$99.50</p>
              <p className='saveitem-title'>GoPro HERO6 4K Action</p>
              <p className='saveitem-camera'>Camera -Black</p>
              <button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="#007bff" 
                  viewBox="0 0 24 24"
                 >
                  <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C7.16 17.37 8.48 19 10 19h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03L23 6H6"/>
                  <circle cx="10.5" cy="20.5" r="1.5"/>
                  <circle cx="18.5" cy="20.5" r="1.5"/>
                </svg>
                  <span id='addtocart'>Move to Cart</span></button>
                  </div>



                <div className='save-items'>
              <div className='save-item-box'>
                <img src={watch} alt="" />
              </div>
              <p id='saveitem-price'>$99.50</p>
              <p className='saveitem-title'>GoPro HERO6 4K Action</p>
              <p className='saveitem-camera'>Camera -Black</p>
              <button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="#007bff" 
                  viewBox="0 0 24 24"
                 >
                  <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C7.16 17.37 8.48 19 10 19h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03L23 6H6"/>
                  <circle cx="10.5" cy="20.5" r="1.5"/>
                  <circle cx="18.5" cy="20.5" r="1.5"/>
                </svg>
                  <span id='addtocart'>Move to Cart</span></button>
                  </div>






                  <div className='save-items'>
              <div className='save-item-box'>
                <img id='laptop-img' src={laptop} alt="laptop" />
              </div>
              <p id='saveitem-price'>$99.50</p>
              <p className='saveitem-title'>GoPro HERO6 4K Action</p>
              <p className='saveitem-camera'>Camera -Black</p>
              <button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="#007bff" 
                  viewBox="0 0 24 24"
                 >
                  <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C7.16 17.37 8.48 19 10 19h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03L23 6H6"/>
                  <circle cx="10.5" cy="20.5" r="1.5"/>
                  <circle cx="18.5" cy="20.5" r="1.5"/>
                </svg>
                  <span id='addtocart'>Move to Cart</span></button>
                  </div>



            </div>
            </div>

            {/* Discount Banner */}
      <div id='dis' className="discount-banner">
        <div className="banner-text">
          <h2>Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>

        <button className="shop-btn">Shop now</button>
      </div>

                
    </>
  )
}




        
      
    
  

export default MyCart
