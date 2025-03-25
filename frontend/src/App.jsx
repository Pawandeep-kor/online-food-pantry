import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoginProvider } from './components/TokenProvider.jsx';
import { CartProvider } from './components/CartProvider.jsx';
import {Home }from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import {ProductDetails }from './pages/ProductDetails.jsx';
import TestLogin from './pages/TestLogin.jsx';
import Login from './pages/login.jsx';  
import Signup from './pages/Signup.jsx';
import './App.css';
import './i18n.js';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header>
      <Link to="/" className='link'>{t('home')}</Link>
      <Link to="/about" className='link'>{t('about')}</Link>
      <Link to="/testLogin" className='link'>Test Login Page</Link>
      <button onClick={toggleLanguage} className='translate-btn'>
        {i18n.language === 'en' ? 'French' : 'English'}
      </button>
    </header>
  );
}

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          {/* Should add a function that includes the search bar and cart icon like our whimsical design */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testLogin" element={<TestLogin />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;