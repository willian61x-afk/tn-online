import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenido a TN Online</h1>
          <p>La mejor plataforma de compras online</p>
          <Link to="/productos" className="btn-primary">
            Explorar Productos
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-emoji">🛍️</div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Envío Rápido</h3>
          <p>Recibe tus pedidos en 24-48 horas</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💳</div>
          <h3>Pagos Seguros</h3>
          <p>Múltiples formas de pago disponibles</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⭐</div>
          <h3>Calidad Garantizada</h3>
          <p>Productos de la mejor calidad</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📞</div>
          <h3>Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte</p>
        </div>
      </section>

      <section className="cta">
        <h2>¿Aún no tienes cuenta?</h2>
        <p>Regístrate ahora y disfruta de ofertas exclusivas</p>
        <Link to="/registro" className="btn-secondary">
          Crear Cuenta
        </Link>
      </section>
    </div>
  );
}

export default Home;
