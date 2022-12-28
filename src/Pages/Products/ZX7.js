import React from 'react';
import '../../Styles/CategoryPage.css';
import '../../Styles/App.css';
import '../../Styles/ProductPage.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../../Components/Footer.js';
import CatalogNav from '../../Components/CatalogNav';
import { useDispatch } from 'react-redux';
import { cartArrAdd } from '../../cartSlice';


function ZX7(props) {
  // Redux
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [imgFolder, setImagFolder] = useState('desktop');
  const [amountNum, setamountNum] = useState(1);


  // Change Image Folder based on Device Screen Width
  useEffect(() => {
    if (window.innerWidth <= '600') {
      setImagFolder('mobile');
    } else if (window.innerWidth > '600' && window.innerWidth <= '912') {
      setImagFolder('tablet')
    }
  }, []);



  return (
    <div className='AppProduct App'>

      <button className='pageBackBtn' onClick={() => navigate(-1)}>
        Go Back
      </button>

      <section className='productDetails pageProduct'>
        <img width='500px' height='518.516px' src={require("../../Assets/product-zx7-speaker/" + imgFolder + "/image-product.jpg")} alt='HeadPhones' />
        <div>
          <span>NEW PRODUCT</span>
          <h1>ZX7 SPEAKER</h1>
          <p>Upgrade your sound system with the all new
            ZX9 active speaker. It’s a bookshelf speaker
            system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing
            and practical audio setups.
          </p>
          <strong className='price'>$3,500</strong>

          <div className='cartBtn'>

            <div>
              <button onClick={() => {
                setamountNum(old => {
                  let i = old;
                  i -= 1;
                  if (i <= 1) {
                    return 1
                  } else {
                    return i
                  }
                })
              }}>-</button>
              <p>{amountNum}</p>
              <button onClick={() => {
                setamountNum(old => {
                  let i = old;
                  i += 1;
                  if (i >= 5) {
                    return 5
                  } else {
                    return i
                  }
                })
              }}>+</button>
            </div>

            <button
              onClick={() => {
                dispatch(cartArrAdd(([
                  "ZX7",
                  3500,
                  amountNum,
                  "product-zx7-speaker/desktop/image-product.jpg"
                ])));
              }}
            >
              ADD TO CART
            </button>
          </div>

        </div>
      </section>

      <section className='features'>
        <div className='.features__div'>
          <h2>FEATURES</h2>
          <p>
            Featuring a genuine leather head strap and premium earcups,
            these headphones deliver superior comfort for those who like to
            enjoy endless listening. It includes intuitive controls designed
            for any situation. Whether you’re taking a business call or just
            in your own personal space, the auto on/off and pause features
            ensure that you’ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer
            allow you to experience your audio world on your terms. It lets
            you enjoy your audio in peace, but quickly interact with your
            surroundings when you need to. Combined with Bluetooth 5. 0
            compliant connectivity and 17 hour battery life,
            the XX99 Mark II headphones gives you superior sound,
            cutting-edge technology, and a modern design aesthetic.
          </p>
        </div>

        <div className='features__div--special'>
          <h2>IN THE BOX</h2>
          <pre>
            <div><span>1x</span><p> Headphone Unit</p></div>
            <div><span>2x</span><p> Replacement Earcups</p></div>
            <div><span>1x</span><p> User Manual</p></div>
            <div><span>1x</span><p> 3.5mm 5m Audio Cable</p></div>
            <div><span>1x</span><p> Travel Bag</p></div>
          </pre>
        </div>

      </section>

      <section className='gallery'>
        <div className='div--special'>
          <img loading='lazy' width='457.688px' heigh='287.969px' src={require("../../Assets/product-xx99-mark-two-headphones/" + imgFolder + "/image-gallery-1.jpg")} alt='HeadPhones' />
          <img loading='lazy' width='457.688px' heigh='287.969px' src={require("../../Assets/product-xx99-mark-two-headphones/" + imgFolder + "/image-gallery-2.jpg")} alt='HeadPhones' />
        </div>
        <div>

          <img loading='lazy' width='643.312px' heigh='599.734px' src={require("../../Assets/product-xx99-mark-two-headphones/" + imgFolder + "/image-gallery-3.jpg")} alt='HeadPhones' />
        </div>

      </section>

      <section className='suggestions'>
        <h2>YOU MAY ALSO LIKE</h2>

        <div className='div--container'>
          <div>
            <img loading='lazy' width='350px' height='318px' src={require("../../Assets/shared/" + imgFolder + "/image-xx99-mark-one-headphones.jpg")} alt='HeadPhones' />
            <h2>XX99 MARK I</h2>
            <button>SEE PRODUCT</button>
          </div>
          <div>
            <img loading='lazy' width='350px' height='318px' src={require("../../Assets/shared/" + imgFolder + "/image-xx59-headphones.jpg")} alt='HeadPhones' />
            <h2>XX59</h2>
            <button>SEE PRODUCT</button>
          </div>
          <div>
            <img loading='lazy' width='350px' height='318px' src={require("../../Assets/shared/" + imgFolder + "/image-zx9-speaker.jpg")} alt='HeadPhones' />
            <h2>ZX9 SPEAKER</h2>
            <button>SEE PRODUCT</button>
          </div>
        </div>
      </section>

      <CatalogNav />

      <section className='testimony'>
        <div>
          <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
          <p>Located at the heart of New York City,
            Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories. We have a large
            showroom and luxury demonstration rooms available for you to
            browse and experience a wide range of our products.
            Stop by our store to meet some of the fantastic people
            who make Audiophile the best place to buy your portable
            audio equipment.
          </p>
        </div>
        <img loading='lazy' width='540px' height='588px' src={require("../../Assets/shared/" + imgFolder + "/image-best-gear.jpg")} alt='' />

      </section>

      <Footer />
    </div>
  )
}

export default ZX7