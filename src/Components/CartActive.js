import React from 'react';
import '../Styles/CartActive.css';
import { useState } from 'react';
// import Navbar from './Navbar';

function CartActive({ buttonState = "cartActive--off cartActive" }) {
  // const [cartActiveClass, setcartActiveClass] = useState('cartActive--off cartActive');

  // function cartBtn() {
  //   if (cartActiveClass === 'cartActive--off cartActive') {
  //     setcartActiveClass(old => 'cartActive');
  //   } else {
  //     setcartActiveClass(old => 'cartActive--off cartActive');
  //   }
  // }

  return (
    <div className="cartActive"
      onClick={(event) => {
        if (buttonState === 'cartActive') {
          event.stopPropagation();
          // <Navbar buttonState='cartActive--off' />
        }
      }}>

      <div className='cartActive__card'>
        <h2>CART (3) <button>Remove all</button></h2>

        <div className='card__itemContainer'>
          <div className='itemContainer__item'>
            <div>
              <img src={require('../Assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')} alt='HeadPhones' />
              <p>
                XX99 MK II <br />
                <span>$2,999</span>
              </p>
            </div>
            <div className='item__btn'>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>

        </div>

        <h3>TOTAL <span>$5,396</span></h3>
        <button>CHECKOUT</button>
      </div>

    </div>
  )
}

export default CartActive