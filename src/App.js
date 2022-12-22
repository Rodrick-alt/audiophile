import './Styles/App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer.js';
import CatalogNav from './Components/CatalogNav';

function App() {
  const [imgFolder, setImagFolder] = useState('desktop');

  useEffect(() => {
    if (window.innerWidth <= '600') {
      setImagFolder('mobile');
    } else if (window.innerWidth > '600' && window.innerWidth <= '912') {
      setImagFolder('tablet')
    }
  }, []);


  return (
    <div className="App">
      <section className='hero'>
        <span>NEW PRODUCT</span>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <Link to="/product">
          <button>SEE PRODUCT</button>
        </Link>
      </section>

      <CatalogNav />

      <section className='products'>
        <div className='products__speaker'>
          <div>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally
              built to deliver truly remarkable sound.
            </p>
            <Link to="/product">
              <button>SEE PRODUCT</button>
            </Link>
          </div>
        </div>

        <div className='products__speaker--2'>
          <h2>ZX7 SPEAKER</h2>
          <Link to="/product">
            <button>SEE PRODUCT</button>
          </Link>
        </div>

        <div className='products__earphone'>
          <img loading='lazy' width='540px' height='320px' src={require("./Assets/home/" + imgFolder + "/image-earphones-yx1.jpg")} alt='EarPhones' />
          <div>
            <h2>YX1 EARPHONES</h2>
            <Link to="/product">
              <button>SEE PRODUCT</button>
            </Link>
          </div>
        </div>

      </section>

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
        <img loading='lazy' width='540px' height='588px' src={require("./Assets/shared/" + imgFolder + "/image-best-gear.jpg")} alt='' />

      </section>

      <Footer />
    </div>
  );
}

export default App;
