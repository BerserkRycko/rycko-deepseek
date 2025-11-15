import React from 'react';

const ComenzandoConReact = () => {
  return (
    <div className="blog-content">
      <h2>Introducción a React</h2>
      <p>React es una librería popular de JavaScript para construir interfaces de usuario, especialmente aplicaciones web. Creada por Facebook, permite a los desarrolladores crear grandes aplicaciones web que pueden cambiar datos sin recargar la página.</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li><strong>Arquitectura Basada en Componentes:</strong> Construye componentes encapsulados que gestionan su propio estado</li>
        <li><strong>DOM Virtual para Rendimiento:</strong> React crea una estructura de datos en memoria</li>
        <li><strong>Flujo Unidireccional de Datos:</strong> Los datos fluyen desde el componente padre al hijo</li>
        <li><strong>Sintaxis JSX:</strong> Extensión de sintaxis de JavaScript que se parece a HTML</li>
      </ul>
      
      <h2>Configurando Tu Primer Proyecto</h2>
      <p>Para comenzar con React, puedes usar Create React App o Vite. Estas herramientas configuran tu entorno de desarrollo para que puedas usar las últimas características de JavaScript.</p>
      
      <pre><code>{`// Ejemplo de componente React
function Welcome() {
  return <h1>¡Hola, React!</h1>;
}

// Usando el componente
function App() {
  return (
    <div>
      <Welcome />
      <p>¡Bienvenido al desarrollo con React!</p>
    </div>
  );
}`}</code></pre>
      
      <h2>¿Por Qué Elegir React?</h2>
      <p>React hace que sea sencillo crear interfaces de usuario interactivas. Diseña vistas simples para cada estado en tu aplicación, y React actualizará y renderizará eficientemente solo los componentes correctos cuando tus datos cambien.</p>
      
      <div className="tip-box">
        <strong>💡 Consejo:</strong> Comienza con componentes pequeños y gradualmente construye otros más complejos a medida que te familiarices con los conceptos de React.
      </div>
    </div>
  );
};

export default ComenzandoConReact;