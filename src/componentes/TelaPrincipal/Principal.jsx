import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import MenuLateral from '../MenuLateral/MenuLateral';

const MainScreen = () => {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    'https://www.10wallpaper.com/wallpaper/3840x2400/2111/Blue_Sky_Sunflower_2021_Flowers_4K_Closeup_3840x2400.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 2) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    minHeight: '100vh',
  };

  const carouselContainerStyle = {
    position: 'relative',
    flex: 1,
    height: '100vh',
    width: '173vh',
    overflow: 'hidden',
    marginRight: '-260px'
  };

  const depthEffectStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
    zIndex: -1,
  };

  const carouselImageStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  };

  const companyDescriptionStyle = {
    textAlign: 'center',
    position: 'absolute',
    top: '40%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    zIndex: 1,
    width: '100%',
    animation: 'welcomePulse 3s ease-in-out infinite',
  };

  const keyframes = `
    @keyframes welcomePulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.1);
        filter: hue-rotate(90deg);
      }
    }
  `;

  return (
    <div style={mainContainerStyle}>
      <Navbar />
      <MenuLateral />
      <style>{keyframes}</style>
      <div style={carouselContainerStyle}>
        <div style={depthEffectStyle}></div>
        <img
          src={carouselImages[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={carouselImageStyle}
        />
      </div>
      <div style={companyDescriptionStyle} className="company-description">
        <h1>Olá, que bom ter você por aqui!</h1>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default MainScreen;
