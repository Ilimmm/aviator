import React, { useState } from 'react';
import './App.css';
import aviatorImage from './images/aviator.png'; // Импорт изображения
import hydraLogo from './images/hydralogo.png'; // Импорт логотипа

function App() {
  const [signal, setSignal] = useState('GET SIGNAL');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Генерация случайного числа от 1.00 до 9.99
    setTimeout(() => {
      const randomCoefficient = (Math.random() * (9.99 - 1.00) + 1.00).toFixed(2);
      setSignal(`${randomCoefficient}x`);
      setLoading(false);
    }, 1000); // Анимация загрузки длится 1 секунду
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <img src={hydraLogo} alt="Hydra Logo" className="navbar-logo" />
        <h1>HYDRA SIGNALS</h1>
      </header>
      <img src={aviatorImage} alt="Aviator" className="aviator-image" />
      <div className="container">
        <button className={`aviator-button ${loading ? 'loading' : ''}`} onClick={handleClick}>
          {loading ? <div className="spinner"></div> : signal}
        </button>
        <a href="https://t.me/yourchannel" className="more-info-button">
          MORE INFO
        </a>
      </div>
    </div>
  );
}

export default App;
