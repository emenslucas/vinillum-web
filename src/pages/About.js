import React, { forwardRef } from 'react';
import ProfileCarousel from '../components/ProfileCarousel';
import ProfileCard from '../components/ProfileCard';

const About = forwardRef((props, ref) => {
  const profiles = [
    {
      image: './assets/profile1.png',
      name: 'Facundo Neiman',
      position: 'CEO',
    },
    {
      image: './assets/profile2.png',
      name: 'Lucas Emens',
      position: 'CEO',
    },
    {
      image: './assets/profile3.png',
      name: 'Facundo Preiss',
      position: 'CEO',
    },
  ];

  return (
    <section ref={ref} id="aboutus">
      <div className="title-container">
        <span>Sobre nosotros</span>
        <h2>Construido por amantes de la música</h2>
        <p>
          Una plataforma donde las recomendaciones son reales, personalizadas y
          vienen de personas que comparten tu pasión.
        </p>
      </div>
      <div className="about-container">
        <ProfileCarousel profiles={profiles} />
       
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              image={profile.image}
              name={profile.name}
              position={profile.position}
            />
          ))}
    
      </div>
    </section>
  );
});

export default About;