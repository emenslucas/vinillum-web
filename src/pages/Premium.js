import React, { forwardRef } from 'react';
import PlanCard from '../components/PlanCard';

const Premium = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="premium">
      <div className="title-container">
        <span>Planes</span>
        <h2>Premium</h2>
        <p>Lleva tu experiencia musical al siguiente nivel</p>
      </div>
      <div className="cards-container">
        <PlanCard
          type="Estándar"
          price="USD $0.00"
          duration="Por siempre"
          features={[
            '+Acceso a trivias semanales',
            '+Reseñas ilimitadas',
            '+Insignias limitadas',
            '-Trivias personalizadas',
            '-Logitud de reseñas ilimitadas',
          ]}
          isPaid={false}
          isActive={[true,true,true,true,false,false]}
        />
        <PlanCard
          type="Melómano"
          price="USD $5.99"
          duration="Por mes"
          features={[
            '+Perfil verificado',
            '+Acceso a nuevas funciones',
            '+Libre de publicidad',
            '+Estadísticas de tu actividad',
            '+Trivias personalizadas y sin límite',
            '+Longitud de reseñas ilimitadas',
          ]}
          isPaid
          isActive={[true,true,true,true,true,true]}
        />
      </div>
    </section>
  );
});

export default Premium;