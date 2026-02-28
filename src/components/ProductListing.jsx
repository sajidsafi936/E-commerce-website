import React from 'react'
import "./ProductListing.css"
import mob from "../assets/mob.png"
import mobiles from "../assets/mobiles.png"
import canon from "../assets/canon.png"
import laptop from "../assets/laptop.png"
import headphone from "../assets/headphone.png"
import watch from "../assets/watch.png"

const ProductListing = () =>{
  return (
    <>
      <div className="breadcrumb">
        Home &gt;  Clothing  &gt;  Men’s Wear &gt;  Summer Clothing 
      </div>

      <div className='productlisting-whole'>
        <div className='productlisting-sidebars'>
          <hr />
          <select>
            <option>Category</option>
          </select>
          <h4>Mobile accesory</h4>
          <h4>Electronics</h4>
          <h4>Smartphones</h4>
          <h4>Modern tech</h4>
          <h4 id='see-all'>See all</h4>
          <hr />

          <select>
            <option>Brands</option>
          </select>
          <label className='checkbox-item'><input type="checkbox" />Samsung</label>
          <label className='checkbox-item'><input type="checkbox" />Apple</label>
          <label className='checkbox-item'><input type="checkbox" />Huawei</label>
          <label className='checkbox-item'><input type="checkbox" />Pocco</label>
          <label className='checkbox-item'><input type="checkbox" />Lenovo</label>
          <h4 id='see-all'>See all</h4>

          <hr />

          <select>
            <option>Features</option>
          </select>
          <label className='checkbox-item'><input type="checkbox" />Metallic</label>
          <label className='checkbox-item'><input type="checkbox" />Plastic cover</label>
          <label className='checkbox-item'><input type="checkbox" />8GB RAM</label>
          <label className='checkbox-item'><input type="checkbox" />Super power</label>
          <label className='checkbox-item'><input type="checkbox" />Large memory</label>
          <h4 id='see-all'>See all</h4>

          <hr />
          <select id='price-range'>
            <option>Price range</option>
          </select>
          <input type="range" min="0" max="1000" />
          <div className='minmax-box'>
            <div className='min-box'>
              <p>Min</p>
              <input type="text" placeholder='0' />
            </div>
            <div className='min-box'>
              <p>Max</p>
              <input type="text" placeholder='9999999' />
            </div>
          </div>
          <button className='apply-btn'>Apply</button>


          <hr />

          <select>
            <option>Features</option>
          </select>
          <label className='checkbox-item'><input type="radio" />Metallic</label>
          <label className='checkbox-item'><input type="radio" />Plastic cover</label>
          <label className='checkbox-item'><input type="radio" />8GB RAM</label>
          <label className='checkbox-item'><input type="radio" />Super power</label>

          <hr />

          <select>
            <option>Ratings</option>
          </select>
          <div id='rating'>
           <label className='checkbox-item'><input type="checkbox" />⭐⭐⭐⭐⭐</label>
           <label className='checkbox-item'><input type="checkbox" />⭐⭐⭐⭐☆</label>
           <label className='checkbox-item'><input type="checkbox" />⭐⭐⭐☆☆</label>
            <label className='checkbox-item'><input type="checkbox" />⭐⭐☆☆☆</label>
          </div>
        </div>



        <div className='productlisting-area'>
          <div className='prodtlisting-header'>
            <p>12,911 items in <span id='mobile-accessory'>Mobile accessory</span></p>
            <label className='checkbox-item'><input type="checkbox" />Verified only</label>
            <select className='select-featured'>
              <option>Featured</option>
            </select>
          </div>





          <div className='prodtlisting-item'>
            <div>
              <img src={mob} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>



          <div className='prodtlisting-item'>
            <div>
              <img src={canon} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>


          <div className='prodtlisting-item'>
            <div>
              <img src={mobiles} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>



          <div className='prodtlisting-item'>
            <div>
              <img id='product-laptop' src={laptop} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>



          <div className='prodtlisting-item'>
            <div>
              <img src={watch} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>



          <div className='prodtlisting-item'>
            <div>
              <img src={headphone} alt="mobile" />
            </div>
            <div className='title-price'>
              <p>Canon camera EOS 2000, Black 10x zoom</p>
              <h3>$998.00</h3>
              <div className='raring-order'>
                <p>⭐⭐⭐☆☆ 7.5</p>
                <ul>
                  <li>154 orders</li>
                  <li className='free-shopping'>Free Shopping</li>
                </ul>
              </div>
              <p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam incidunt quis debitis fuga vitae temporibus.</p>
              <h4 id='see-all'>View detail</h4>
            </div>

            <div className="product-card">
              <label className="like-container">
             <input type="checkbox" />
            <span className="heart-icon">❤</span>
           </label>
           </div>

          </div>

          <div className='last-slider'>

            <select>
              <option>Show 10</option>
            </select>

            <div className='pages-counting'>
              <p id='p1'>&lt;</p>
              <p id='p2'>1</p>
              <p id='p3'>2</p>
              <p id='p4'>3</p>
              <p id='p5'>&gt;</p>
            </div>

          </div>













        </div>

      </div>



    </>
  )
}

export default ProductListing;
