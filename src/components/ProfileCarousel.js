import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const ProfileCarousel = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Incrementar o decrementar el índice cuando se detecta un deslizamiento
  const handleSwipe = (direction) => {
    if (direction === 'Left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    } else if (direction === 'Right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
    }
  };

  // Configuración de swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Esto permite simular el deslizamiento con el mouse (útil para pruebas en escritorio)
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [profiles.length]);

  return (
    <div className="carousel" {...swipeHandlers}>
      <div className="carousel-content">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`carousel-item about-carousel-item ${index === currentIndex ? 'active' : index === (currentIndex - 1 + profiles.length) % profiles.length ? 'prev' : 'next'}`}
          >
            <img src={profile.image} alt={`Profile ${index + 1}`} />
            <h4>{profile.name}</h4>
            <p>{profile.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
