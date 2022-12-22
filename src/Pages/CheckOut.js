import React from 'react';
import '../Styles/App.css';
import '../Styles/ProductPage.css';
import '../Styles/CheckOut.css';
import Footer from '../Components/Footer.js';
import { Link, useNavigate } from 'react-router-dom';
import CheckOutActive from '../Components/CheckOutActive';
import { useState } from 'react';

function CheckOut() {
  const navigate = useNavigate();

  return (
    <div className='App-checkout App'>

      <CheckOutActive />

      <button className='page-back-btn' onClick={() => navigate(-1)}>
        Go Back
      </button>

      <form action='##' method='post'>

        <section className='Checkout'>
          <h2>CHECKOUT</h2>

          <div className='container'>
            <p>BILLING DETAILS</p>

            <div className='item-container'>

              <div className='items'>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder='Alexei Ward' />
              </div>

              <div className='items'>
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder='alexei@mail.com' />
              </div>

              <div className='items'>
                <label for="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder='+1 202-555-0136' />
              </div>

            </div>
          </div>


          <div className='container'>
            <p>SHIPPING INFO</p>

            <div className='item-container'>

              <div className='items item-special'>
                <label for="address">Address</label>
                <input type="text" id="address" name="address" required placeholder='1137 Williams Avenue' />
              </div>

              <div className='items'>
                <label for="zipCode">ZipCode</label>
                <input type="number" id="zipCode" name="zipCode" required placeholder='10001' />
              </div>

              <div className='items'>
                <label for="city">City</label>
                <input type="text" id="city" name="city" required placeholder='New York' />
              </div>

              <div className='items'>
                <label for="country">Country</label>
                <input type="text" id="country" name="country" required placeholder='United States' />
              </div>

            </div>
          </div>



          <div className='container'>
            <p>PAYMENT DETAILS</p>

            <div className='item-container container-special'>
              <label for="paymentType">Payment Method</label>

              <label for="eMoney">
                <div className='items-special'>
                  <input type="radio" id="eMoney" name="paymentType" value='e-Money' />
                  e-Money
                </div>
              </label>

              <label for="cash">
                <div className='items-special'>
                  <input type="radio" id="cash" name="paymentType" value='Cash-on-Delivery' />
                  Cash on Delivery
                </div>
              </label>


              <div className='item-container container-special2'>
                <div className='items'>
                  <label for="eNumber">e-Money Number</label>
                  <input type="number" id="eNumber" name="eNumber" required placeholder='238521993' />
                </div>
                <div className='items'>
                  <label for="ePIN">e-Money PIN</label>
                  <input type="number" id="ePIN" name="ePIN" required placeholder='6891' />
                </div>
              </div>


              <div className='cash-on'>
                <img src={require('../Assets/checkout/icon-cash-on-delivery.svg').default} alt='' />

                <p>
                  The ‘Cash on Delivery’ option enables you to pay in
                  cash when our delivery courier arrives at your
                  residence. Just make sure your address is correct so
                  that your order will not be cancelled.
                </p>
              </div>

            </div>
          </div>
        </section>




        <section className='Summary'>
          <h2>SUMMARY</h2>

          <div className='cart-container'>
            <div className='cart-item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>$2,999</span>
                </p>
              </div>
              <span>X1</span>
            </div>

            <div className='cart-item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>$2,999</span>
                </p>
              </div>
              <span>X1</span>
            </div>

            <div className='cart-item'>
              <div>
                <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
                <p>
                  XX99 MK II <br />
                  <span>$2,999</span>
                </p>
              </div>
              <span>X1</span>
            </div>
          </div>


          <pre>
            <div><p>TOTAL</p><span>$5,396</span></div>
            <div><p>SHIPPING</p><span>$50</span></div>
            <div><p>VAT (INCLUDED)</p><span>$1,079</span></div>
            <div className='pre-special'><p>GRAND TOTAL</p><span>$5,446</span></div>
          </pre>

          <button type='submit'>CONTINUE & PAY</button>
        </section>
      </form>


      <Footer />
    </div>
  )
}

export default CheckOut