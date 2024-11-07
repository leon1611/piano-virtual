
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => (
  <div className="home">
    <h1>Bienvenido al Piano Virtual</h1>
    <Link to="/piano">
      <button className="inicio-btn">Iniciar Juego</button>
    </Link>
  </div>
);

export default Home;
