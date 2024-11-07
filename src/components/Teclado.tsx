import React from 'react';
import Tecla from './Tecla';
import './Teclado.css';

type TecladoProps = {
  notaActiva: string | null;
  onTocarNota: (nota: string) => void;
};

const Teclado: React.FC<TecladoProps> = ({ notaActiva, onTocarNota }) => {
  const keys = [
    { note: 'C', black: false },
    { note: 'C#', black: true },
    { note: 'D', black: false },
    { note: 'D#', black: true },
    { note: 'E', black: false },
    { note: 'F', black: false },
    { note: 'F#', black: true },
    { note: 'G', black: false },
    { note: 'G#', black: true },
    { note: 'A', black: false },
    { note: 'A#', black: true },
    { note: 'B', black: false },
  ];

  return (
    <div className="teclado-container">
      <div className="image-section">
        <img src="https://s1.best-wallpaper.net/wallpaper/m/1708/Blue-hair-anime-girl-play-piano_m.webp" alt="Imagen del piano" />
      </div>
      <div className="piano-section">
        <div className="teclado-grid">
          {keys.map(({ note, black }) => (
            <Tecla
              key={note}
              nota={note}
              activa={note === notaActiva}
              onClick={() => onTocarNota(note)}
              esNegra={black}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teclado;
