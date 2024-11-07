import React, { useState, useEffect, useRef } from 'react';
import Teclado from '../components/Teclado';
import Grabadora from '../components/Grabadora';
import { Howl } from 'howler';
import './PianoPage.css';

const PianoPage: React.FC = () => {
  const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Notas del piano
  const [notaActiva, setNotaActiva] = useState<string | null>(null); // Nota activa al presionar
  const [notasGrabadas, setNotasGrabadas] = useState<string[]>([]); // Notas grabadas
  const [enGrabar, setEnGrabar] = useState(false); // Estado de grabación
  const grabacionRef = useRef<string[]>([]); // Referencia para almacenar las notas grabadas
  const [sonidoAgudo, setSonidoAgudo] = useState(false); // Estado para manejar si el sonido es más agudo

  // Función para manejar cuando una tecla es tocada
  const manejarTocarNota = (nota: string) => {
    setNotaActiva(nota);
    if (enGrabar) grabacionRef.current.push(nota); // Si estamos grabando, almacenamos la nota
  };

  // Función para manejar la grabación
  const manejarGrabar = () => {
    setEnGrabar(!enGrabar);
    if (enGrabar) {
      setNotasGrabadas([...grabacionRef.current]); // Guardar notas grabadas
      grabacionRef.current = []; // Limpiar la grabación
    }
  };

  // Función para manejar la reproducción de las notas grabadas
  const manejarReproducir = () => {
    const interval = 500; // Intervalo entre notas (en milisegundos)
    const frecuencia = sonidoAgudo ? 1.5 : 1; // Factor para hacer el tono más agudo

    // Reproducir las notas grabadas con un intervalo y aplicar la frecuencia
    notasGrabadas.forEach((nota, idx) => {
      setTimeout(() => {
        const sonido = new Howl({
          src: [`/sounds/${nota}.wav`], // Ruta de los archivos .wav
          volume: 1,
          rate: frecuencia, // Aplicamos la frecuencia para hacer el tono más agudo o normal
        });
        sonido.play(); // Reproducimos el sonido correspondiente
        setNotaActiva(nota); // Activamos la tecla correspondiente
      }, idx * interval); // Reproducir las notas con el intervalo adecuado
    });

    // Limpiar después de reproducir todas las notas
    setTimeout(() => setNotaActiva(null), notasGrabadas.length * interval); 
  };

  // UseEffect para manejar la reproducción de la nota activa
  useEffect(() => {
    if (notaActiva) {
      const frecuencia = sonidoAgudo ? 1.5 : 1; // Factor para hacer el tono más agudo
      const sonido = new Howl({
        src: [`/sounds/${notaActiva}.wav`], // Ruta de los archivos .wav
        volume: 1,
        rate: frecuencia, // Cambiamos la frecuencia para hacer el sonido más agudo
      });
      sonido.play(); // Reproducimos el sonido correspondiente

      // Desactivamos la tecla después de cierto tiempo
      const timer = setTimeout(() => setNotaActiva(null), 300);
      return () => clearTimeout(timer); // Limpiamos el timeout cuando se desmonta el componente
    }
  }, [notaActiva, sonidoAgudo]);

  return (
    <div className="piano-page">
      <Teclado
        notas={notas}  // Pasa las notas como prop al teclado
        notaActiva={notaActiva}  // Pasa la nota activa al teclado
        onTocarNota={manejarTocarNota}  // Función para manejar el clic en las teclas
      />
      <button onClick={() => setSonidoAgudo(!sonidoAgudo)}>
        Cambiar a Sonido Agudo
      </button>
      <Grabadora
        notasGrabadas={notasGrabadas}  // Pasa las notas grabadas
        enGrabar={enGrabar}  // Estado de grabación
        onGrabar={manejarGrabar}  // Función para manejar la grabación
        onReproducir={manejarReproducir}  // Función para manejar la reproducción
      />
    </div>
  );
};

export default PianoPage;
