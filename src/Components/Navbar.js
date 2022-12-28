import React, { useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/Navbar.css';
import '../Styles/CartActive.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartArrRemoveAll } from '../cartSlice';
import store from '../store';
import { cartArrAdd } from '../cartSlice';


function Navbar() {
  // Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItemArr, setcartItemArr] = useState();
  const [cartTotal, setcartTotal] = useState(0);
  const [cartNumber, setcartNumber] = useState(0);

  // Cart Button
  const [cartEmptyClass, setcartEmtyClass] = useState('cartActive--empty');

  useEffect(() => {
    store.subscribe(() => {
      let arr = store.getState().cartData.cartArr;
      setcartItemArr(old => [...HandleCartArr(arr)]);
      setcartTotal(old => handleTotal(arr));
      setcartNumber(old => arr.length);
      if (arr.length !== 0) {
        setcartEmtyClass('full');
      } else {
        setcartEmtyClass('cartActive--empty');
      }
    });
  }, [])

  // Menu Button
  const [menuClass, setMenuClass] = useState('navMenu--Off navMenu');
  const [navContainerClass, setnavContainerClass] = useState('navContainer--Off navContainer');
  const htmlElement = document.getElementsByTagName('html')[0];
  function menuBtn() {
    if (menuClass === 'navMenu--Off navMenu') {
      setMenuClass(old => 'navMenu');
      setnavContainerClass(old => 'navContainer');
      setcartActiveClass(old => 'cartActive--off cartActive');
      htmlElement.style.overflowY = 'hidden';
    } else {
      setMenuClass(old => 'navMenu--Off navMenu');
      setnavContainerClass(old => 'navContainer--Off navContainer');
      htmlElement.style.overflowY = 'auto';
    }
  }
  function Menu() {
    return (
      <section className={menuClass}>
        <Link to="/headphones" onClick={() => menuBtn()}>
          <img width='121.49px' height='146px' className='navMenu__img' src={require('../Assets/cart/image-headphone-NoBG.png')} alt='HeadPhones' />
          <p className='navMenu__p--special'>HEADPHONES</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/speakers" onClick={() => menuBtn()}>
          <img width='121.49px' height='146px' className='navMenu__img' src={require('../Assets/cart/image-speaker-NoBG.png')} alt='Speaker' />
          <p className='navMenu__p--special'>SPEAKERS</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/earphones" onClick={() => menuBtn()}>
          <img width='121.49px' height='146px' className='navMenu__img navMenu__img--special' src={require('../Assets/cart/image-earphone-NoBG.png')} alt='EarPhones' />
          <p className='navMenu__p--special'>EARPHONES</p>
          <p>SHOP <img src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>
      </section>
    )
  }





  function handleTotal(currentArr) {
    let total = 0;
    for (let i = 0; i < currentArr.length; i++) {
      total += (currentArr[i][2] * currentArr[i][1]);
    }
    return total;
  }
  function handleAmountIncrememt(current) {
    if (current >= 5) {
      return 5
    } else {
      return current += 1
    }
  }
  function handleAmountdecrement(current) {
    if (current <= 1) {
      return 1
    } else {
      return current -= 1
    }
  }


  function HandleCartArr(currentState) {
    let arr = [];
    for (let i = 0; i < currentState.length; i++) {
      arr.push(
        <div className='itemContainer__item' key={currentState[i][0]}>
          <div>
            <img src={require("../Assets/" + currentState[i][3])} alt='' />
            <p>
              {currentState[i][0]}<br />
              <span>${currentState[i][1].toLocaleString('en-US')}</span>
            </p>
          </div>
          <div className='item__btn'>
            <button onClick={() => {
              dispatch(cartArrAdd(([
                currentState[i][0],
                currentState[i][1],
                handleAmountdecrement(currentState[i][2]),
                currentState[i][3]
              ])))
            }}>-</button>
            <p>{currentState[i][2]}</p>
            <button onClick={() => {
              dispatch(cartArrAdd(([
                currentState[i][0],
                currentState[i][1],
                handleAmountIncrememt(currentState[i][2]),
                currentState[i][3]
              ])))
            }}>+</button>
          </div>
        </div>
      )
    }
    return (
      [...arr]
    )
  }




  // Cart Button
  const [cartActiveClass, setcartActiveClass] = useState('cartActive--off cartActive');
  function handleCartbtn() {
    if (cartActiveClass === 'cartActive--off cartActive') {
      setcartActiveClass(old => 'cartActive');
      setMenuClass(old => 'navMenu--Off navMenu');
      setnavContainerClass(old => 'navContainer--Off navContainer');
      htmlElement.style.overflowY = 'hidden';
    } else {
      setcartActiveClass(old => 'cartActive--off cartActive');
      setnavContainerClass(old => 'navContainer--Off navContainer');
      htmlElement.style.overflowY = 'auto';
    }
  }
  function CartActive() {
    return (
      <div className={cartActiveClass}>

        <div className='cartActive__card'>
          <h2>CART ({cartNumber})
            <button className={cartEmptyClass}
              onClick={() => {
                setcartEmtyClass(old => 'cartActive--empty');
                dispatch(cartArrRemoveAll());
              }}
            >Remove all</button></h2>

          <div className='card__itemContainer'>
            {cartItemArr}
          </div>

          <h3 className={cartEmptyClass}>TOTAL <span>${cartTotal.toLocaleString('en-US')}</span></h3>
          <button className={cartEmptyClass}
            onClick={
              () => {
                handleCartbtn()
                navigate('/checkout')
              }
            }>
            CHECKOUT
          </button>
        </div>

        <div className='cartBG' onClick={(event) => {
          event.stopPropagation();
          if (cartActiveClass === 'cartActive') {
            setcartActiveClass(old => 'cartActive--off cartActive');
            setnavContainerClass(old => 'navContainer--Off navContainer');
            htmlElement.style.overflowY = 'auto';
          }
        }}>
          none Js
        </div>
      </div >
    )
  }






  return (
    <div className={navContainerClass}
      onClick={(event) => {
        if (menuClass === 'navMenu') {
          event.stopPropagation();
          setMenuClass(old => 'navMenu--Off navMenu');
          setnavContainerClass(old => 'navContainer--Off navContainer');
          htmlElement.style.overflowY = 'auto';
        }
      }}>
      <nav>
        <ul className='nav__logoContainer'>
          <li>
            <button onClick={(() => menuBtn())}>
              <img width='16px' height='15px' src={require('../Assets/shared/tablet/icon-hamburger.svg').default} alt='menu' />
            </button>
          </li>
          <li>
            <Link to="/home" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
              setcartActiveClass(old => 'cartActive--off cartActive');
              setnavContainerClass(old => 'navContainer--Off navContainer');
              htmlElement.style.overflowY = 'auto';
            }}>
              <img width='143px' height='25px' src={require('../Assets/shared/desktop/logo.svg').default} alt='logo' />
            </Link>
          </li>
        </ul>

        <ul className='nav__links'>
          <li>
            <Link to="/home" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
              setcartActiveClass(old => 'cartActive--off cartActive');
              setnavContainerClass(old => 'navContainer--Off navContainer');
              htmlElement.style.overflowY = 'auto';
            }}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/headphones" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
              setcartActiveClass(old => 'cartActive--off cartActive');
              setnavContainerClass(old => 'navContainer--Off navContainer');
              htmlElement.style.overflowY = 'auto';
            }}>
              HEADPHONE
            </Link>
          </li>
          <li>
            <Link to="/speakers" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
              setcartActiveClass(old => 'cartActive--off cartActive');
              setnavContainerClass(old => 'navContainer--Off navContainer');
              htmlElement.style.overflowY = 'auto';
            }}>
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link to="/earphones" onClick={() => {
              setMenuClass(old => 'navMenu--Off navMenu');
              setcartActiveClass(old => 'cartActive--off cartActive');
              setnavContainerClass(old => 'navContainer--Off navContainer');
              htmlElement.style.overflowY = 'auto';
            }}>
              EARPHONES
            </Link>
          </li>
        </ul>

        <button id='cartButton' className='nav__cartBtn'
          onClick={() => {
            handleCartbtn()
          }}>
          <span className={cartEmptyClass} >{cartNumber}</span>
          <img width='23px' height='20px' src={require('../Assets/shared/desktop/icon-cart.svg').default} alt='cart' />
        </button>
      </nav>

      <Menu />
      <CartActive />

    </div>
  )
}

export default Navbar