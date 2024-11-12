import React, { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formVisible, setFormVisible] = useState(true);
  const [formOpacity, setFormOpacity] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const form = new FormData();
      form.append('access_key', '599e81e8-b90f-48c9-a603-b03f1016d677');
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();

      if (data.success) {
        // Iniciar secuencia de transición
        setFormOpacity(0);
        setTimeout(() => {
          setFormVisible(false);
          setShowSuccessMessage(true);
        }, 500);

        setFormData({
          nombre: '',
          email: '',
          mensaje: ''
        });
      } else {
        setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        console.error('Error response:', data);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estilos para la transición del formulario
  const formStyle = {
    opacity: formOpacity,
    transition: 'opacity 0.5s ease',
    display: formVisible ? 'block' : 'none'
  };

  // Estilos para el mensaje de éxito
  const successStyle = {
    opacity: showSuccessMessage ? 1 : 0,
    transition: 'opacity 0.5s ease',
    visibility: showSuccessMessage ? 'visible' : 'hidden'
  };

  return (
    <section ref={ref} id="contact">
      <div className="title-container">
        <span>Contacto</span>
        <h2>¿Tienes algo que decirnos?</h2>
        <p>Estamos aquí para escucharte y hacer Vinillum cada día mejor</p>
      </div>
      <form 
        id="contactForm" 
        className="form-wrapper" 
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <div className="form-container">
          <div className="input-group">
            <input
              type="hidden"
              name="access_key"
              value="599e81e8-b90f-48c9-a603-b03f1016d677"
            />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              value={formData.nombre}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="6"
            value={formData.mensaje}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
          <button 
            className="customBtn" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
      
      <div 
        id="successMessage" 
        className="success-message"
        style={successStyle}
      >
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
    </section>
  );
});

export default Contact;