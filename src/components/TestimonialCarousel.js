import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState([
    {
      image: "./assets/javier_morales.jpg",
      name: "Javier Morales",
      text: "Vinillum es una revolución para los amantes de la música. No solo me permite descubrir nuevas canciones y artistas, sino que también me conecta con una comunidad que comparte mis mismos gustos. ¡La trivia musical es adictiva y me encanta poder calificar y comentar álbumes y canciones!",
    },
    {
      image: "./assets/mateo_fernandez.jpg",
      name: "Mateo Fernández",
      text: "Me encanta cómo Vinillum fomenta la interacción genuina entre usuarios. Puedo seguir a personas cuyas recomendaciones musicales son increíbles, y las reseñas que hacen son muy útiles para descubrir música nueva. ¡La integración con Spotify es un acierto total!",
    },
    {
      image: "./assets/valeria_castillo.jpg",
      name: "Valeria Castillo",
      text: "Finalmente una app que combina lo mejor de una red social con la pasión por la música. Vinillum me ha ayudado a ampliar mi repertorio musical y a conocer gente con intereses similares. ¡La interfaz es súper intuitiva y el modo oscuro es un detalle que amo!",
    },
  ]);

  // Incrementar o decrementar el índice cuando se detecta un deslizamiento
  const handleSwipe = (direction) => {
    if (direction === "Left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (direction === "Right") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  // Configuración de swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
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
            className={`carousel-item ${
              index === currentIndex
                ? "active"
                : index ===
                  (currentIndex - 1 + testimonials.length) % testimonials.length
                ? "prev"
                : "next"
            }`}
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
