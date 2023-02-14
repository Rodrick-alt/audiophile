import './Styles/App.css';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer.js';
import CatalogNav from './Components/CatalogNav';


function App() {

  return (
    <div className="App">

      <div className='hr-div'>
        <hr />
      </div>

      <section className='hero'>
        <span>NEW PRODUCT</span>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <Link to="/XX99MARKII">
          <button>SEE PRODUCT</button>
        </Link>
      </section>

      <CatalogNav />

      <section className='products'>
        <div className='products__speaker'>
          <img width='540px' height='320px' src={require("./Assets/home/desktop/image-speaker-zx9.png")} alt='Speaker' />
          <div>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally
              built to deliver truly remarkable sound.
            </p>
            <Link to="/ZX9">
              <button>SEE PRODUCT</button>
            </Link>
          </div>
        </div>

        <div className='products__speaker--2'>
          <h2>ZX7 SPEAKER</h2>
          <Link to="/ZX7">
            <button>SEE PRODUCT</button>
          </Link>
        </div>

        <div className='products__earphone'>
          <img loading='lazy' width='540px' height='320px' src={require("./Assets/home/desktop/image-earphones-yx1.jpg")} alt='EarPhones' />
          <div>
            <h2>YX1 EARPHONES</h2>
            <Link to="/YX1">
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
        <img loading='lazy' width='540px' height='588px' src={require("./Assets/shared/desktop/image-best-gear.jpg")} alt='' />

      </section>

      <Footer />
    </div>
  );
}

export default App;
