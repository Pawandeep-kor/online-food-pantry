import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { t, i18n } = useTranslation();
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'pickup' || option === 'delivery') {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  };

  const handleLogout = () => {
    // 👉 Clear session/token (optional)
    localStorage.removeItem('token'); // if you store token
    // Redirect to login
    navigate('/login');
  };

  console.log("Current Language:", i18n.language); // 'en' or 'fr'

  return (
    <div className="order-confirmation-container">
      <header>
        <div className="header-left">
          <button className="back-button" onClick={() => navigate('/basket')}>⬅️</button>
          <h1>{t('orderConfirmation')}</h1>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            {t('logout')}
          </button>
        </div>
      </header>

      <div className="options">
        <button className="checkout-button">{t('basket.checkout')}</button>
        <button className="pickup-button" onClick={() => handleOptionClick('pickup')}>
          {t('order.pickup')}
        </button>
        <button className="delivery-button" onClick={() => handleOptionClick('delivery')}>
          {t('order.delivery')}
        </button>
      </div>

      {showCalendar && (
        <div className="calendar">
          <p>{t('order.selectDate')}:</p>
          <input type="date" />
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
