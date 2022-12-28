import React from 'react';
import '../Styles/App.css';
import '../Styles/ProductPage.css';
import '../Styles/CheckOut.css';
import Footer from '../Components/Footer.js';
import { useNavigate } from 'react-router-dom';
import CheckOutActive from '../Components/CheckOutActive';
import { useState, useEffect } from 'react';
import store from '../store';
import { useSelector } from 'react-redux';

function CheckOut() {
  const navigate = useNavigate();
  const htmlElement = document.getElementsByTagName('html')[0];
  const [checkOutActiveClass, setcheckOutActiveClass] =
    useState("checkOutActive--off checkOutActive__container");
  const [payOptionClasses, setpayOptionClasses] = useState('cash--off');
  const [summaryCardClass, setsummaryCardClass] = useState('summary')

  let arr = useSelector((state) => state.cartData.cartArr);
  const [summaryItemArr, setsummaryItemArr] = useState([...HandleSummaryCart(arr)]);
  const [summaryTotal, setsummaryTotal] = useState([...handleSummaryTotal(arr)]);
  const [checkOutActiveArr, setcheckOutActiveArr] = useState([...HandleCheckoutActiveData(arr)]);

  const [formPayFields, setformPayFields] = useState(
    [
      <div className=' itemContainer container--special2' key={"eMoneyPayFields"}>
        <div className='items'>
          <label htmlFor="eNumber">e-Money Number</label>
          <input type="number" id="eNumber" name="eNumber" required placeholder='238521993' />
        </div>
        <div className='items'>
          <label htmlFor="ePIN">e-Money PIN</label>
          <input type="number" id="ePIN" name="ePIN" required placeholder='6891' />
        </div>
      </div>
    ]
  );


  useEffect(() => {
    if (arr.length == 0) {
      setsummaryCardClass(old => "summary--off summary")
    }
    store.subscribe(() => {
      let arr = store.getState().cartData.cartArr;
      setsummaryItemArr(old => [...HandleSummaryCart(arr)]);
      setcheckOutActiveArr(old => [...HandleCheckoutActiveData(arr)]);
      setsummaryTotal(old => [...handleSummaryTotal(arr)]);
      if (arr.length == 0) {
        setsummaryCardClass(old => "summary--off summary")
      }
    });
  }, [])

  function handleSummaryTotal(currentArr) {
    let total = 0;
    let grandTotal = 0;
    let vat = 0;
    for (let i = 0; i < currentArr.length; i++) {
      total += (currentArr[i][2] * currentArr[i][1]);
      vat = parseInt(total * .20);
      grandTotal += (total + vat + 50);
    }
    return [total, vat, grandTotal];
  }

  function HandleSummaryCart(currentState) {
    let arr = [];

    for (let i = 0; i < currentState.length; i++) {
      arr.push(
        <div className='cartItem' key={"Summary " + currentState[i][0]}>
          <div>
            <img src={require('../Assets/' + currentState[i][3])} alt='HeadPhones' />
            <p>
              {currentState[i][0]} <br />
              <span>${currentState[i][1].toLocaleString('en-US')}</span>
            </p>
          </div>
          <span>X{currentState[i][2]}</span>
        </div>
      )
    }
    return arr
  }



  function HandleCheckoutActiveData(currentState) {
    let arr = [];
    for (let i = 0; i < currentState.length; i++) {
      arr.push(
        <div className='cardInfo__item' key={"CheckouActive " + currentState[i][0]}>
          <div>
            <img src={require('../Assets/' + currentState[i][3])} alt='HeadPhones' />
            <p>
              {currentState[i][0]} <br />
              <span>${currentState[i][1].toLocaleString('en-US')}</span>
            </p>
          </div>
          <span>X{currentState[i][2]}</span>
        </div>
      )
    }
    return arr
  }




  return (
    <div className='AppCheckout App'>

      <CheckOutActive classState={checkOutActiveClass}
        onChangeClass={
          (className) => {
            setcheckOutActiveClass(className);
          }
        }
        checkoutActiveData={checkOutActiveArr}
        checkoutActiveTotal={summaryTotal[2].toLocaleString("en-US")}
      />


      <button className='pageBackBtn' onClick={() => navigate(-1)}>
        Go Back
      </button>


      <form action='##' method='post' id='summaryForm'>
        <section className='checkout'>
          <h2>CHECKOUT</h2>

          <div className='container'>
            <p>BILLING DETAILS</p>

            <div className='itemContainer'>
              <div className='items'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder='Alexei Ward' />
              </div>

              <div className='items'>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder='alexei@mail.com' />
              </div>

              <div className='items'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder='+1 202-555-0136' />
              </div>

            </div>
          </div>




          <div className='container'>
            <p>SHIPPING INFO</p>

            <div className='itemContainer'>

              <div className='items item--special'>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required placeholder='1137 Williams Avenue' />
              </div>

              <div className='items'>
                <label htmlFor="zipCode">ZipCode</label>
                <input type="number" id="zipCode" name="zipCode" required placeholder='10001' />
              </div>

              <div className='items'>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required placeholder='New York' />
              </div>

              <div className='items'>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" required placeholder='United States' />
              </div>

            </div>
          </div>




          <div className='container'>
            <p>PAYMENT DETAILS</p>

            <div className='itemContainer container--special'>
              <label htmlFor="paymentType">Payment Method</label>

              <label htmlFor="eMoney">
                <div className='items--special2'>
                  <input type="radio" id="eMoney" name="paymentType" required value='e-Money'
                    defaultChecked onClick={() => {
                      setpayOptionClasses(old => 'cash--off');
                      setformPayFields(old => [
                        <div className=' itemContainer container--special2' key={"eMoneyPayFields"}>
                          <div className='items'>
                            <label htmlFor="eNumber">e-Money Number</label>
                            <input type="number" id="eNumber" name="eNumber" required placeholder='238521993' />
                          </div>
                          <div className='items'>
                            <label htmlFor="ePIN">e-Money PIN</label>
                            <input type="number" id="ePIN" name="ePIN" required placeholder='6891' />
                          </div>
                        </div>
                      ])
                    }} />
                  e-Money
                </div>
              </label>

              <label htmlFor="cash">
                <div className='items--special2'>
                  <input type="radio" id="cash" name="paymentType" required value='Cash-on-Delivery'
                    onClick={() => {
                      setpayOptionClasses(old => 'cash--on');
                      setformPayFields(old => [])
                    }} />
                  Cash on Delivery
                </div>
              </label>

              {formPayFields}

              <div className={payOptionClasses}>
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




        <section className={summaryCardClass}>
          <h2>SUMMARY</h2>

          <div className='cartContainer'>
            {summaryItemArr}
          </div>

          <pre>
            <div><p>TOTAL</p><span>${summaryTotal[0].toLocaleString("en-US")}</span></div>
            <div><p>SHIPPING</p><span>$50</span></div>
            <div><p>VAT (INCLUDED)</p><span>${summaryTotal[1].toLocaleString("en-US")}</span></div>
            <div className='pre--special'><p>GRAND TOTAL</p><span>${summaryTotal[2].toLocaleString("en-US")}</span></div>
          </pre>

          <button type='submit' onClick={(event) => {
            if (document.getElementById('summaryForm').checkValidity()) {
              event.preventDefault();
              setcheckOutActiveClass(old => 'checkOutActive__container');
              htmlElement.style.overflowY = 'hidden';
            }
          }}>
            CONTINUE & PAY
          </button>
        </section>
      </form>


      <Footer />
    </div>
  )
}

export default CheckOut