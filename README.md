
# Simulador de Notas Musicales

## Descripción

Esta aplicación simula un piano virtual donde los usuarios pueden interactuar con teclas para reproducir notas musicales, ver las notas tocadas, grabar secuencias y reproducirlas. Este proyecto utiliza React y fue diseñado para mejorar habilidades en el desarrollo de aplicaciones interactivas mediante el uso de componentes, manejo de eventos, estado y efectos en React.

## Habilidades

Este proyecto cubre las siguientes habilidades de React y desarrollo de aplicaciones interactivas:

---

### 1. Escribir tu primer componente de React

#### Descripción
Esta habilidad implica crear un componente básico de React llamado `Tecla`, que representa cada tecla del piano virtual.

#### Código

```jsx
// Tecla.tsx
import React from 'react';
import { Howl } from 'howler';
import './Tecla.css';

type TeclaProps = {
  nota: string;
  activa: boolean;
  onClick: () => void;
};

const Tecla: React.FC<TeclaProps> = ({ nota, activa, onClick }) => {
  const sonido = new Howl({
    src: [`/sounds/${nota}.wav`],
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
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Representa una tecla del piano virtual. Al hacer clic, reproduce el sonido de la nota asociada.
- **¿Cómo cumple con el requisito de la habilidad?**: Es el primer componente React básico del proyecto, siguiendo la convención de componentes funcionales.
- **¿Por qué es la mejor forma de implementarlo?**: Un componente separado para cada tecla permite modularidad, facilitando el manejo individual de cada tecla y su sonido.

---

### 2. Crear archivos con múltiples componentes

#### Descripción
Esta habilidad implica organizar el código en varios archivos de componentes, como `Tecla`, `Teclado`, `Grabadora`, etc.

#### Código

```jsx
// Teclado.tsx
import React from 'react';
import Tecla from './Tecla';
import './Teclado.css';

type TecladoProps = {
  notas: string[];
  notaActiva: string | null;
  onTocarNota: (nota: string) => void;
};

const Teclado: React.FC<TecladoProps> = ({ notas, notaActiva, onTocarNota }) => (
  <div className="teclado">
    {notas.map((nota) => (
      <Tecla key={nota} nota={nota} activa={nota === notaActiva} onClick={() => onTocarNota(nota)} />
    ))}
  </div>
);

export default Teclado;
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Renderiza una serie de componentes `Tecla` para formar el teclado completo.
- **¿Cómo cumple con el requisito de la habilidad?**: Organiza la aplicación en múltiples componentes, cada uno con una función específica.
- **¿Por qué es la mejor forma de implementarlo?**: La estructura modular facilita la organización, lectura y mantenimiento del código.

---

### 3. Añadir marcado a JavaScript con JSX

#### Descripción
Usar JSX permite escribir HTML directamente en el JavaScript, haciendo el código más claro y fácil de leer.

#### Código

```jsx
// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PianoPage from './pages/PianoPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/piano" element={<PianoPage />} />
    </Routes>
  </Router>
);

export default App;
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Define la estructura de la aplicación usando JSX y organiza las rutas.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa JSX para estructurar y organizar los componentes de la aplicación.
- **¿Por qué es la mejor forma de implementarlo?**: JSX combina JavaScript y HTML en una sola sintaxis, ideal para organizar aplicaciones en React.

---

### 4. Añadir llaves con JSX

#### Descripción
Las llaves en JSX permiten incluir expresiones JavaScript dentro del HTML. Aquí se usa para gestionar el contenido dinámico de los componentes.

#### Código

```jsx
{notas.map((nota) => (
  <Tecla key={nota} nota={nota} activa={nota === notaActiva} onClick={() => onTocarNota(nota)} />
))}
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Renderiza cada nota como un componente `Tecla` y usa llaves para acceder a las propiedades de cada nota.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa llaves para manejar contenido dinámico y único en la lista de componentes `Tecla`.
- **¿Por qué es la mejor forma de implementarlo?**: Las llaves aseguran que cada componente `Tecla` tenga una clave única, necesaria para la renderización eficiente en listas.

---

### 5. Configurar componentes con props

#### Descripción
Las `props` permiten pasar información de un componente a otro. En este caso, las `props` de `Tecla` incluyen `nota`, `activa` y `onClick`.

#### Código

```jsx
<Tecla key={nota} nota={nota} activa={nota === notaActiva} onClick={() => onTocarNota(nota)} />
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Configura el componente `Tecla` pasando `props` que controlan el sonido y estado de cada nota.
- **¿Cómo cumple con el requisito de la habilidad?**: Utiliza `props` para comunicar información y controlar la funcionalidad de cada componente `Tecla`.
- **¿Por qué es la mejor forma de implementarlo?**: Usar `props` en React es fundamental para una comunicación eficiente entre componentes.

---

### 6. Renderizar condicionalmente

#### Descripción
Esta habilidad implica mostrar visualmente cuando una tecla es presionada o está siendo reproducida en la secuencia, utilizando renderizado condicional.

#### Código

```jsx
// Tecla.tsx
<button className={`tecla ${activa ? 'activa' : ''}`} onClick={reproducirNota}>
  {nota}
</button>
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Muestra una clase adicional `activa` en la tecla cuando está presionada o siendo reproducida.
- **¿Cómo cumple con el requisito de la habilidad?**: Utiliza renderizado condicional para cambiar el estilo de la tecla según su estado.
- **¿Por qué es la mejor forma de implementarlo?**: El renderizado condicional es una forma eficiente de reflejar el estado actual en la UI sin complejidad adicional.

---

### 7. Renderizar múltiples componentes a la vez

#### Descripción
Renderiza todas las teclas del teclado utilizando `map` para crear un conjunto de componentes `Tecla`.

#### Código

```jsx
// Teclado.tsx
<div className="teclado">
  {notas.map((nota) => (
    <Tecla key={nota} nota={nota} activa={nota === notaActiva} onClick={() => onTocarNota(nota)} />
  ))}
</div>
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Renderiza todas las teclas del piano en una estructura de lista, usando `map` para iterar sobre las notas.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa `map` para crear múltiples componentes de forma dinámica y eficiente.
- **¿Por qué es la mejor forma de implementarlo?**: `map` permite una renderización limpia y eficiente de listas de componentes en React.

---

### 8. Mantener componentes puros

#### Descripción
Esta habilidad se refiere a asegurar que los componentes no muten el estado directamente, sino que reciban información a través de `props`.

#### Código

```jsx
// Tecla.tsx
const Tecla: React.FC<TeclaProps> = ({ nota, activa, onClick }) => {
  // Componente puro, no muta el estado, sino que usa props y funciones de callback.
};
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Define el componente `Tecla` como un componente puro que no cambia el estado, sino que recibe datos a través de `props`.
- **¿Cómo cumple con el requisito de la habilidad?**: Al mantener el componente puro, aseguramos que el estado no se altere inesperadamente.
- **¿Por qué es la mejor forma de implementarlo?**: Los componentes puros son más fáciles de entender y depurar, ya que sus salidas dependen únicamente de sus entradas (`props`).

---

### 9. Entender la UI como árboles

#### Descripción
Organizar la interfaz en una estructura jerárquica, donde el teclado, la grabación y la reproducción se organizan de forma lógica en componentes padres e hijos.

#### Código

```jsx
// App.tsx
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/piano" element={<PianoPage />} />
  </Routes>
</Router>
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Estructura la aplicación en diferentes rutas, permitiendo una navegación clara y una organización jerárquica.
- **¿Cómo cumple con el requisito de la habilidad?**: La estructura en árbol facilita la comprensión y manejo de los componentes y su flujo de datos.
- **¿Por qué es la mejor forma de implementarlo?**: Una UI en árbol permite descomponer la aplicación en secciones manejables y reutilizables.

---

### 10. Controlar eventos del usuario

#### Descripción
Capturar eventos para tocar una tecla, grabar una secuencia y reproducir las notas utilizando manejadores de eventos.

#### Código

```jsx
// Tecla.tsx
<button onClick={reproducirNota}>
  {nota}
</button>
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Controla el evento de clic del usuario en cada tecla, reproduciendo el sonido de la nota.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa eventos de usuario para interactuar con el componente y realizar acciones.
- **¿Por qué es la mejor forma de implementarlo?**: Controlar eventos permite una experiencia interactiva y responde a las acciones del usuario en tiempo real.

---

### 11. Gestionar el estado

#### Descripción
Gestionar el estado de las notas grabadas, las teclas presionadas y la reproducción de la secuencia.

#### Código

```jsx
// PianoPage.tsx
import React, { useState } from 'react';

const PianoPage: React.FC = () => {
  const [notasGrabadas, setNotasGrabadas] = useState<string[]>([]);
  const [notaActiva, setNotaActiva] = useState<string | null>(null);

  const grabarNota = (nota: string) => {
    setNotasGrabadas([...notasGrabadas, nota]);
    setNotaActiva(nota);
  };

  return (
    <div>
      {/* Código del teclado y botones de grabación/reproducción */}
    </div>
  );
};

export default PianoPage;
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Gestiona el estado de las notas grabadas y la nota activa.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa `useState` para controlar el estado de la aplicación.
- **¿Por qué es la mejor forma de implementarlo?**: `useState` es la mejor herramienta para manejar el estado local en componentes funcionales en React.

---

### 12. Levantar el estado

#### Descripción
Compartir el estado entre los componentes del teclado y la grabadora para que las notas se graben y reproduzcan correctamente.

#### Código

```jsx
// PianoPage.tsx
<Teclado notas={notas} notaActiva={notaActiva} onTocarNota={grabarNota} />
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Levanta el estado de `notaActiva` y `grabarNota` al componente `Teclado`.
- **¿Cómo cumple con el requisito de la habilidad?**: Permite que el estado se comparta entre componentes hijos y padres.
- **¿Por qué es la mejor forma de implementarlo?**: Levantar el estado facilita la comunicación entre componentes, permitiendo compartir y sincronizar información.

---

### 13. Sincronización de efectos

#### Descripción
Usar `useEffect` para manejar la reproducción de notas en una secuencia grabada.

#### Código

```jsx
import React, { useState, useEffect } from 'react';

const PianoPage: React.FC = () => {
  const [notasGrabadas, setNotasGrabadas] = useState<string[]>([]);

  useEffect(() => {
    if (notasGrabadas.length > 0) {
      // Lógica para reproducir la secuencia
    }
  }, [notasGrabadas]);

  return (
    <div>
      {/* Código del teclado y botones */}
    </div>
  );
};

export default PianoPage;
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Ejecuta un efecto cuando cambian las notas grabadas, permitiendo su reproducción.
- **¿Cómo cumple con el requisito de la habilidad?**: `useEffect` permite ejecutar código en respuesta a cambios en el estado.
- **¿Por qué es la mejor forma de implementarlo?**: `useEffect` sincroniza los efectos con el ciclo de vida del componente, asegurando que las actualizaciones se apliquen correctamente.

---

### 14. Acceder a valores del DOM

#### Descripción
Usar `useRef` para manipular el DOM directamente, en este caso para asegurar que el teclado responde correctamente a la interacción del usuario.

#### Código

```jsx
import React, { useRef } from 'react';

const Teclado: React.FC = () => {
  const tecladoRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={tecladoRef}>
      {/* Código del teclado */}
    </div>
  );
};

export default Teclado;
```

#### Explicación
- **¿Qué hace este fragmento de código?**: Usa `useRef` para acceder al DOM del teclado, permitiendo controlar aspectos específicos de la interfaz.
- **¿Cómo cumple con el requisito de la habilidad?**: Usa referencias para interactuar con elementos del DOM, útil para responder a eventos o estados.
- **¿Por qué es la mejor forma de implementarlo?**: `useRef` permite interactuar con el DOM de forma controlada sin causar renderizados innecesarios.





 
