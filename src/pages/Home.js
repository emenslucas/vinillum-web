import React, { forwardRef } from 'react';
import DownloadButtons from '../components/DownloadButtons';
import PhoneImage from '../components/PhoneImage';

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home">
      <div className="container">
        <div id="content-container">
          <div id="text-container">
            <h1>La música es mejor cuando se comparte</h1>
            <p>
              Transforma la manera de compartir y descubrir música a través de
              una comunidad apasionada, reseñas personalizadas y experiencias
              interactivas.
            </p>
          </div>
          <DownloadButtons />
        </div>
        <PhoneImage />
      </div>
    </section>
  );
});

export default Home;