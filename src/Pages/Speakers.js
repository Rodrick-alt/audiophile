import React from 'react';
import '../Styles/CategoryPage.css';
import '../Styles/App.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer.js';
import CatalogNav from '../Components/CatalogNav';


function Speakers() {

  return (
    <div className='App'>

      <div className='hr-div'>
        <hr />
      </div>

      <section className='hero-special hero'>
        <h1>SPEAKERS</h1>
      </section>

      <section className='pageProduct'>
        <img width='500px' height='518.516px' src={require("../Assets/product-zx9-speaker/desktop/image-category-page-preview.jpg")} alt='Speakers' />
        <div>
          <span>NEW PRODUCT</span>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9
            active speaker. It’s a bookshelf speaker system
            that offers truly wireless connectivity -- creating
            new possibilities for more pleasing and practical
            audio setups.
          </p>
          <Link to="/ZX9">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </section>

      <section className='pageProduct pageProduct--special'>
        <div>
          <h2>ZX7 SPEAKER</h2>
          <p>Stream high quality sound wirelessly with minimal loss.
            The ZX7 bookshelf speaker uses high-end audiophile
            components that represents the top of the line powered
            speakers for home or studio use.
          </p>
          <Link to="/ZX7">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
        <img loading='lazy' width='500px' height='518.516px' src={require("../Assets/product-zx7-speaker/desktop/image-category-page-preview.jpg")} alt='Speakers' />
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

export default Speakers