import React, { forwardRef } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Testimonials = forwardRef((props, ref) => {
  const testimonials = [
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