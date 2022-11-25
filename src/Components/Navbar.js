import React from 'react';
import { useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuClass, setMenuClass] = useState('menuOff menuNav');
  const [BGBoxClass, setBGBoxClass] = useState('menuOff BGBox');

  function menuBtn() {
    if (menuClass === 'menuNav') {
      setBGBoxClass(old => 'menuOff BGBox');
      setMenuClass(old => 'menuOff menuNav');
    } else {
      setBGBoxClass(old => 'BGBox');
      setMenuClass(old => 'menuNav');
    }
  }

  function Menu() {
    return (
      <nav className={menuClass}>
        <ul>
          <li>
            <Link to="/headphones" onClick={() => menuBtn()}>
              <img src={require('../Assets/cart/image-xx99-mark-one-headphones-NoBG.png')} alt='HeadPhones' />
              <p className='special'>HEADPHONES</p>
              <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
            </Link>
          </li>
          <li>
            <Link to="/speakers" onClick={() => menuBtn()}>
              <img src={require('../Assets/cart/image-zx9-speaker-NoBG.png')} alt='HeadPhones' />
              <p className='special'>SPEAKERS</p>
              <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
            </Link>
          </li>
          <li>
            <Link to="/earphones" onClick={() => menuBtn()}>
              <img src={require('../Assets/cart/image-yx1-earphones-NoBG.png')} alt='HeadPhones' />
              <p className='special'>EARPHONES</p>
              <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }


  return (
    <div className='navContainer'>
      <nav>
        <ul className='menu-logo'>
          <li>
            <button className='menuBtn'
              onClick={(() => menuBtn())}>
              <img src={require('../Assets/shared/tablet/icon-hamburger.svg').default} alt='menu' />
            </button>
          </li>
          <li>
            <Link to="/home" onClick={() => {
              setBGBoxClass(old => 'menuOff BGBox');
              setMenuClass(old => 'menuOff menuNav');
            }}>
              <img className='logo' src={require('../Assets/shared/desktop/logo.svg').default} alt='logo' />
            </Link>
          </li>
        </ul>

        <ul className='navLinks'>
          <li>
            <Link to="/home">HOME</Link>
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

        <button className='cartBtn'>
          <img src={require('../Assets/shared/desktop/icon-cart.svg').default} alt='cart' />
        </button>
      </nav>

      <Menu />

      <div className={BGBoxClass}
        onClick={() => menuBtn()}>
        LightBox
      </div>
    </div>
  )
}

export default Navbar