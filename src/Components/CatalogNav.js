import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CatalogNav.css';

function CatalogNav() {
  return (
    <section className='catalogNav'>
      <Link to="/headphones">
        <img loading='lazy' width='121.49px' height='146px' className='catalogNav__img' src={require('../Assets/cart/image-headphone-NoBG.png')} alt='HeadPhones' />
        <p className='catalogNav__p--special'>HEADPHONES</p>
        <p>SHOP <img width='8px' height='12px' src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
      </Link>

      <Link to="/speakers">
        <img loading='lazy' width='121.49px' height='146px' className='catalogNav__img' src={require('../Assets/cart/image-speaker-NoBG.png')} alt='Speaker' />
        <p className='catalogNav__p--special'>SPEAKERS</p>
        <p>SHOP <img width='8px' height='12px' src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
      </Link>

      <Link to="/earphones">
        <img loading='lazy' width='121.49px' height='146px' className='catalogNav__img--special catalogNav__img' src={require('../Assets/cart/image-earphone-NoBG.png')} alt='EarPhones' />
        <p className='catalogNav__p--special'>EARPHONES</p>
        <p>SHOP <img width='8px' height='12px' src={require('../Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
      </Link>
    </section>
  )
}

export default CatalogNav