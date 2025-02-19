import React, { forwardRef } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Testimonials = forwardRef((props, ref) => {
  const testimonials = [
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
    {
      image: './assets/adrian_gomez.jpg',
      name: 'Adrián Gómez',
      text: 'Gracias a Vinillum descubrí artistas increíbles que nunca hubiera encontrado en las plataformas tradicionales',
    },
    {
      image: './assets/lucia_navarro.jpg',
      name: 'Lucía Navarro',
      text: 'Como melómana, Vinillum es una herramienta indispensable. La posibilidad de calificar canciones, álbumes y artistas, junto con la opción de crear listas personalizadas, hace que mi experiencia musical sea mucho más enriquecedora. ¡La comunidad es activa y siempre hay algo nuevo que descubrir!',
    },
    // Add more testimonials here
  ];

  return (
    <section ref={ref} id="testimonials">
      <div className="title-container">
        <span>Testimonios</span>
        <h2>Una comunidad que crece</h2>
        <p>
          Miles de usuarios ya están descubriendo nueva música y conectando con
          otros melómanos
        </p>
      </div>
      <div className="testimonials-container">
        <TestimonialCarousel />
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </section>
  );
});

export default Testimonials;