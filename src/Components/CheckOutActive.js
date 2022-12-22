import React from 'react';
import '../Styles/CheckOutActive.css';
import { useState } from 'react';

function CheckOutActive() {
  const [orderCardClass, setorderCardClass] = useState('checkOutActive__container');
  const htmlElement = document.getElementsByTagName('html')[0];

  function checkoutClass() {
    if (orderCardClass == 'checkOutActive--off checkOutActive__container') {
      setorderCardClass(() => 'checkOutActive__container');
      htmlElement.style.overflowY = 'hidden';
    } else {
      setorderCardClass(() => 'checkOutActive--off checkOutActive__container');
      htmlElement.style.overflowY = 'auto';
    }
  }


  return (
    <div className={orderCardClass}
      onClick={(event) => {
        if (orderCardClass == 'checkOutActive__container') {
          event.stopPropagation();
          checkoutClass();
        }
      }}>
      <div className='orderCard'>
        <img loading='lazy' src={require("../Assets/checkout/icon-order-confirmation.svg").default} alt='' />
        <h2>THANK YOU <br /> FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className='cardInfo'>
          <div className='cardInfo__container'>
            <div className='cardInfo__item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>$2,999</span>
                </p>
              </div>
              <span>X1</span>
            </div>
            <div className='cardInfo__item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>$2,999</span>
                </p>
              </div>
              <span>X1</span>
            </div>
            <div className='cardInfo__item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>THIREDDD</span>
                </p>
              </div>
              <span>X1</span>
            </div>

          </div>

          <div className='cardTotal'>
            <p>GRAND TOTAL <br />
              <span>$5,446</span>
            </p>
          </div>

        </div>

        <button onClick={(() => checkoutClass())}>BACK TO HOME</button>
      </div>
    </div>
  )
}

export default CheckOutActive