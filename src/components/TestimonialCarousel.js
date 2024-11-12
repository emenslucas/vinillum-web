import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState([
    {
      image: './assets/profile.png',
      name: 'Facundo Neiman',
      text: 'Gracias a Vinillum descubrí artistas increíbles que nunca hubiera encontrado en las plataformas tradicionales',
    },
    {
      image: './assets/profile.png',
      name: 'Facundo Neiman',
      text: 'Gracias a Vinillum descubrí artistas increíbles que nunca hubiera encontrado en las plataformas tradicionales',
    },
    {
      image: './assets/profile.png',
      name: 'Facundo Neiman',
      text: 'Gracias a Vinillum descubrí artistas increíbles que nunca hubiera encontrado en las plataformas tradicionales',
    },
    // Add more testimonials here
  ]);

  // Incrementar o decrementar el índice cuando se detecta un deslizamiento
  const handleSwipe = (direction) => {
    if (direction === 'Left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (direction === 'Right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-carousel" {...swipeHandlers}>
      <div className="carousel-content">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : index === (currentIndex - 1 + testimonials.length) % testimonials.length ? 'prev' : 'next'}`}
          >
            <div className="testimonial-header">
              <img src={testimonial.image} alt="" />
              <span>{testimonial.name}</span>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
