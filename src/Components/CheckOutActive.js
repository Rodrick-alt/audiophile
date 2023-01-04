import React from 'react';
import '../Styles/CheckOutActive.css';
import { useNavigate } from 'react-router-dom';
import { cartArrRemoveAll } from '../cartSlice';
import { useDispatch } from 'react-redux';


function CheckOutActive(props) {
  const htmlElement = document.getElementsByTagName('html')[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();


  function checkoutClass() {
    props.onChangeClass("checkOutActive--off checkOutActive__container")
    htmlElement.style.overflowY = 'auto';
  }


  return (
    <div className={props.classState}>
      <div className='orderCard'>
        <img loading='lazy' src={require("../Assets/checkout/icon-order-confirmation.svg").default} alt='' />
        <h2>THANK YOU <br /> FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className='cardInfo'>
          <div className='cardInfo__container'>
            {props.checkoutActiveData}
          </div>

          <div className='cardTotal'>
            <p>GRAND TOTAL <br />
              <span>${props.checkoutActiveTotal}</span>
            </p>
          </div>

        </div>

        <button onClick={((event) => {
          checkoutClass();
          dispatch(cartArrRemoveAll());
          navigate('/home');
        })}>
          BACK TO HOME
        </button>

      </div>

      <div className='checkOutActiveBG' onClick={(event) => {
        event.stopPropagation();
        checkoutClass();
        dispatch(cartArrRemoveAll());
        navigate('/home');
        htmlElement.style.overflowY = 'auto';
      }}></div>
    </div>
  )
}



export default CheckOutActive