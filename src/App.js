import './Styles/App.css';
import Footer from './Components/Footer.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <section className='Hero'>
        <span>NEW PRODUCT</span>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <button>SEE PRODUCT</button>
      </section>

      <section className='Products'>
        <Link to="/headphones">
          <img className='Products-img' src={require('./Assets/cart/image-xx99-mark-one-headphones-NoBG.png')} alt='HeadPhones' />
          <p className='special'>HEADPHONES</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/speakers">
          <img className='Products-img' src={require('./Assets/cart/image-zx9-speaker-NoBG.png')} alt='HeadPhones' />
          <p className='special'>SPEAKERS</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/earphones">
          <img className='Products-img' src={require('./Assets/cart/image-yx1-earphones-NoBG.png')} alt='HeadPhones' />
          <p className='special'>EARPHONES</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>
      </section>


      <section className='Products-2'>
        <div className='speaker'>
          <div>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally
              built to deliver truly remarkable sound.
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>

        <div className='speaker-2'>
          <h2>ZX7 SPEAKER</h2>
          <button>SEE PRODUCT</button>
        </div>

        <div className='earphone'>
          <img src={require('./Assets/home/desktop/image-earphones-yx1.jpg')} alt='HeadPhones' />
          <div>
            <h2>YX1 EARPHONES</h2>
            <button>SEE PRODUCT</button>
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
        <img src={require('./Assets/shared/desktop/image-best-gear.jpg')} alt='HeadPhones' />


      </section>

      <Footer />
    </div>
  );
}

export default App;
