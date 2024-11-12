import React, { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the form data to the server
    setShowSuccessMessage(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section ref={ref} id="contact">
      <div className="title-container">
        <span>Contacto</span>
        <h2>¿Tienes algo que decirnos?</h2>
        <p>Estamos aquí para escucharte y hacer Vinillum cada día mejor</p>
      </div>

      <form id="contactForm" className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="input-group">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="customBtn" type="submit">Enviar</button>
        </div>
      </form>

      {showSuccessMessage && (
        <div id="successMessage" className="success-message visible">
          <div className="success-content">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <h3>¡Mensaje enviado exitosamente!</h3>
            <p>Gracias por contactarte. Te responderemos pronto.</p>
          </div>
        </div>
      )}
    </section>
  );
});

export default Contact;