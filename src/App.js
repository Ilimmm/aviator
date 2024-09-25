import React, { useState } from 'react';
import './App.css';
import aviatorImage from './images/aviator.png'; // Импорт изображения
import hydraLogo from './images/hydralogo.png'; // Импорт логотипа

function App() {
  const [signal, setSignal] = useState('GET SIGNAL');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Установка фиксированного коэффициента 2.74
    setTimeout(() => {
      const fixedCoefficient = '2.74x';
      setSignal(fixedCoefficient);
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
