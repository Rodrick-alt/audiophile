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
          <img src={require('./Assets/cart/image-xx99-mark-one-headphones-NoBG.png')} alt='HeadPhones' />
          <p className='special'>HEADPHONES</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/speakers">
          <img src={require('./Assets/cart/image-zx9-speaker-NoBG.png')} alt='HeadPhones' />
          <p className='special'>SPEAKERS</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>

        <Link to="/earphones">
          <img src={require('./Assets/cart/image-yx1-earphones-NoBG.png')} alt='HeadPhones' />
          <p className='special'>EARPHONES</p>
          <p>SHOP <img src={require('./Assets/shared/desktop/icon-arrow-right.svg').default} alt='' /></p>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default App;
