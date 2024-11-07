import React from 'react';
import { Howl } from 'howler';
import './Tecla.css';

type TeclaProps = {
  nota: string;
  activa: boolean;
  onClick: () => void;
  esNegra?: boolean; // Nueva propiedad para identificar si es una tecla negra
};

const Tecla: React.FC<TeclaProps> = ({ nota, activa, onClick, esNegra = false }) => {
  const sonido = new Howl({
    src: [`/sounds/${nota}.wav`],
    volume: 1,
  });

  const reproducirNota = () => {
    sonido.play();
    onClick();
  };

  return (
    <button
      className={`tecla ${esNegra ? 'negra' : 'blanca'} ${activa ? 'activa' : ''}`}
      onClick={reproducirNota}
    >
      {nota}
    </button>
  );
};

export default Tecla;
