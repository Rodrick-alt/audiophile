import React from 'react';
import '../Styles/CategoryPage.css';
import '../Styles/App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../Components/Footer.js';
import CatalogNav from '../Components/CatalogNav';

function HeadPhones() {

  return (
    <div className='App'>
      <section className='hero-special hero'>
        <h1>HEADPHONES</h1>
      </section>

      <section className='pageProduct'>
        <img width='500px' height='518.516px' src={require("../Assets/product-xx99-mark-two-headphones/desktop/image-product.jpg")} alt='HeadPhones' />
        <div>
          <span>NEW PRODUCT</span>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>The new XX99 Mark II headphones is the pinnacle of
            pristine audio. It redefines your premium headphone
            experience by reproducing the balanced depth and
            precision of studio-quality sound.
          </p>
          <Link to="/XX99MARKII">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </section>

      <section className='pageProduct pageProduct--special'>
        <div>
          <h2>XX99 MARK I HEADPHONES</h2>
          <p>As the gold standard for headphones,
            the classic XX99 Mark I offers detailed and accurate
            audio reproduction for audiophiles, mixing engineers,
            and music aficionados alike in studios and on the go.
          </p>
          <Link to="/XX99MARKI">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
        <img loading='lazy' width='500px' height='518.516px' src={require("../Assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")} alt='HeadPhones' />
      </section>

      <section className='pageProduct'>
        <img loading='lazy' width='500px' height='518.516px' src={require("../Assets/product-xx59-headphones/desktop/image-product.jpg")} alt='HeadPhones' />
        <div>
          <h2>XX59 HEADPHONES</h2>
          <p>Enjoy your audio almost anywhere and customize it
            to your specific tastes with the XX59 headphones.
            The stylish yet durable versatile wireless headset is
            a brilliant companion at home or on the move.
          </p>
          <Link to="/XX59">
            <button>SEE PRODUCT</button>
          </Link>
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
        <img loading='lazy' width='540px' height='588px' src={require("../Assets/shared/desktop/image-best-gear.jpg")} alt='' />

      </section>

      <Footer />
    </div>
  )
}

export default HeadPhones