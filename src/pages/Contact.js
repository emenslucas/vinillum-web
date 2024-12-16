import React, { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formVisible, setFormVisible] = useState(true);
  const [formOpacity, setFormOpacity] = useState(1);

  const validateEmail = (email) => {
    const allowedDomains = ['gmail.com', 'yahoo.com.ar', 'hotmail.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      return 'Formato de correo electrónico inválido';
    }
    
    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      return `Solo se permiten dominios: ${allowedDomains.join(', ')}`;
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset email error when user starts typing
    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailValidationError = validateEmail(formData.email);
    if (emailValidationError) {
      // Clear email input and set error
      setFormData(prev => ({
        ...prev,
        email: ''
      }));
      setEmailError(emailValidationError);
      return;
    }

    setIsSubmitting(true);
    setEmailError('');
  
    try {
      const response = await fetch('https://vinillum-backend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setFormOpacity(0);
        setTimeout(() => {
          setFormVisible(false);
          setShowSuccessMessage(true);
        }, 500);
  
        setFormData({
          nombre: '',
          email: '',
          mensaje: '',
        });
      } else {
        console.error('Error response:', data);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };  

  const formStyle = {
    opacity: formOpacity,
    transition: 'opacity 0.5s ease',
    display: formVisible ? 'block' : 'none'
  };

  const successStyle = {
    opacity: showSuccessMessage ? 1 : 0,
    transition: 'opacity 0.5s ease',
    display: showSuccessMessage ? 'block' : 'none'
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
              placeholder={emailError || "Email"}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              style={{
                color: emailError ? 'inherit' : 'inherit'
              }}
              className={emailError ? 'invalid-email' : ''}
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