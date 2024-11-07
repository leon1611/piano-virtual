
import React from 'react';
import { Howl } from 'howler';
import './Tecla.css';

type TeclaProps = {
  nota: string;
  activa: boolean;
  onClick: () => void;
};

const Tecla: React.FC<TeclaProps> = ({ nota, activa, onClick }) => {
  
  // Cargar el sonido correspondiente para cada nota en formato .wav
  const sonido = new Howl({
    src: [`/sounds/${nota}.wav`], // Usamos la ruta .wav
    volume: 1,
  });

  const reproducirNota = () => {
    sonido.play();
    onClick();
  };

  return (
    <button className={`tecla ${activa ? 'activa' : ''}`} onClick={reproducirNota}>
      {nota}
    </button>
  );
};

export default Tecla;
