import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Basket.css';

const Basket = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Product Name', quantity: 1 },
    { id: 2, name: 'Product Name', quantity: 1 },
    { id: 3, name: 'Product Name', quantity: 1 },
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="basket-container">
      <h2>{t('basket.title')}</h2>
      <div className="basket-items">
        {items.map((item) => (
          <div key={item.id} className="basket-item">
            <p>{item.name} - {t('quantity')}: {item.quantity}</p>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              {t('remove')}
            </button>
          </div>
        ))}
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        {t('basket.checkout')}
      </button>
    </div>
  );
};

export default Basket;
