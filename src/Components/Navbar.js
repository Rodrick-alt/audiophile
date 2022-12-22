import React from 'react';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import '../Styles/Navbar.css';
import CartActive from './CartActive';

function Navbar(buttonState = 'cartActive--off cartActive') {
  // Menu Button
  const [menuClass, setMenuClass] = useState('navMenu--Off navMenu');
  const [navContainerClass, setnavContainerClass] = useState('navContainer--Off navContainer');
  const htmlElement = document.getElementsByTagName('html')[0];

  function menuBtn() {
    if (menuClass === 'navMenu--Off navMenu') {
      setMenuClass(old => 'navMenu');
      setnavContainerClass(old => 'navContainer');
      htmlElement.style.overflowY = 'hidden';
    } else {
      setMenuClass(old => 'navMenu--Off navMenu');
      setnavContainerClass(old => 'navContainer--Off navContainer');
      htmlElement.style.overflowY = 'auto';
    }
  }

  // // Cart Button 
  // const [cartActiveClass, setcartActiveClass] = useState(buttonState);

  // function cartBtn() {
  //   if (cartActiveClass === 'cartActive--off cartActive') {
  //     setcartActiveClass(old => {
  //       return 'cartActive'
  //     });
  //     htmlElement.style.overflowY = 'hidden';
  //   } else {
  //     setcartActiveClass(old => {
  //       return 'cartActive--off cartActive'
  //     });
  //     htmlElement.style.overflowY = 'auto';
  //   }
  // }

  function Menu() {
    return (
      <section className={menuClass}>
        <Link to="/headphones" onClick={() => menuBtn()}>
          <img loading='lazy' width='121.49px' height='146px' className='navMenu__img' src={require('../Assets/cart/image-headphone-NoBG.png')} alt='HeadPhones' />
          <p className='navMenu__p--special'>HEADPHONES</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/speakers" onClick={() => menuBtn()}>
          <img loading='lazy' width='121.49px' height='146px' className='navMenu__img' src={require('../Assets/cart/image-speaker-NoBG.png')} alt='Speaker' />
          <p className='navMenu__p--special'>SPEAKERS</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/earphones" onClick={() => menuBtn()}>
          <img loading='lazy' width='121.49px' height='146px' className='navMenu__img navMenu__img--special' src={require('../Assets/cart/image-earphone-NoBG.png')} alt='EarPhones' />
          <p className='navMenu__p--special'>EARPHONES</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>
      </section>
    )
  }


  return (
    <div className={navContainerClass}
      onClick={(event) => {
        if (menuClass === 'navMenu') {
          event.stopPropagation();
          menuBtn();
        }
      }}>
      <nav>
        <ul className='nav__logoContainer'>
          <li>
            <button onClick={(() => menuBtn())}>
              <img src={require('../Assets/shared/tablet/icon-hamburger.svg').default} alt='menu' />
            </button>
          </li>
          <li>
            <Link to="/home" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
            }}>
              <img src={require('../Assets/shared/desktop/logo.svg').default} alt='logo' />
            </Link>
          </li>
        </ul>

        <ul className='nav__links'>
          <li>
            <Link to="/checkout">HOME</Link>
          </li>
          <li>
            <Link to="/headphones">HEADPHONE</Link>
          </li>
          <li>
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>

        <button className='nav__cartBtn'
          onClick={() => {
            // cartBtn();
          }}>
          <img src={require('../Assets/shared/desktop/icon-cart.svg').default} alt='cart' />
        </button>
      </nav>

      <Menu />


    </div>
  )
}

export default Navbar