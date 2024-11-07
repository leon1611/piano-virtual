import React from 'react';
import Tecla from './Tecla';
import './Teclado.css';

type TecladoProps = {
  notas: string[];
  notaActiva: string | null;
  onTocarNota: (nota: string) => void;
};

const Teclado: React.FC<TecladoProps> = ({ notas, notaActiva, onTocarNota }) => (
  <div className="teclado-container">
    <div className="image-section">
      <img src="https://s1.best-wallpaper.net/wallpaper/m/1708/Blue-hair-anime-girl-play-piano_m.webp" alt="Imagen del piano" />
    </div>
    <div className="piano-section">
      <div className="teclado-box">
        <div className="teclado">
          {notas.map((nota) => (
            <Tecla key={nota} nota={nota} activa={nota === notaActiva} onClick={() => onTocarNota(nota)} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Teclado;
