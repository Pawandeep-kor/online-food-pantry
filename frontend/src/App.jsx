import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LoginProvider } from "./components/TokenProvider.jsx";
import { CartProvider } from "./components/CartProvider.jsx";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { ProductDetails } from "./pages/ProductDetails.jsx";
import TestLogin from "./pages/TestLogin.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Basket from "./pages/Basket.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";

import "./App.css";
import "./i18n.js";

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header>
      <Link to="/" className="link">{t("home")}</Link>
      <Link to="/about" className="link">{t("about")}</Link>
      <Link to="/basket" className="link">{t("basket.title")}</Link>
      <Link to="/order-confirmation" className="link">{t("orderConfirmation")}</Link>
      <Link to="/testLogin" className="link">{t("testLogin")}</Link>
      <Link to="/signup" className="link">{t("signup")}</Link>
      <Link to="/login" className="link">{t("login")}</Link>
      <button onClick={toggleLanguage} className="translate-btn">
        {i18n.language === "en" ? "FR" : "EN"}
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
          <div style={{ padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/testLogin" element={<TestLogin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/details/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
