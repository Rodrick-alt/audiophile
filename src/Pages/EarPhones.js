import React from 'react';
import '../Styles/CategoryPage.css';
import '../Styles/App.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer.js';
import CatalogNav from '../Components/CatalogNav';

function EarPhones() {

  return (
    <div className='App'>

      <div className='hr-div'>
        <hr />
      </div>

      <section className='hero-special hero'>
        <h1>EARPHONES</h1>
      </section>

      <section className='pageProduct'>
        <img width='500px' height='518.516px' src={require("../Assets/product-yx1-earphones/desktop/image-category-page-preview.jpg")} alt='EarPhones' />
        <div>
          <span>NEW PRODUCT</span>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p>Tailor your listening experience with bespoke dynamic
            drivers from the new YX1 Wireless Earphones. Enjoy incredible
            high-fidelity sound even in noisy environments with its active
            noise cancellation feature.
          </p>
          <Link to="/YX1">
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

export default EarPhones