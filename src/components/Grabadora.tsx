
import React from 'react';
import './Grabadora.css';

type GrabadoraProps = {
  notasGrabadas: string[];
  enGrabar: boolean;
  onGrabar: () => void;
  onReproducir: () => void;
};

const Grabadora: React.FC<GrabadoraProps> = ({ notasGrabadas, enGrabar, onGrabar, onReproducir }) => (
  <div className="grabadora">
    <button onClick={onGrabar}>{enGrabar ? 'Parar Grabación' : 'Grabar'}</button>
    <button onClick={onReproducir} disabled={!notasGrabadas.length}>Reproducir</button>
    <div className="notas-grabadas">
      {notasGrabadas.map((nota, idx) => (
        <span key={idx}>{nota} </span>
      ))}
    </div>
  </div>
);

export default Grabadora;
