// src/components/CookiesPolicy.jsx

import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="cookies-policy" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Política de Cookies - Rycko.Online</h1>
      
      <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>

      <h2>1. ¿Qué Son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
        nuestra aplicación web. En React applications, también utilizamos tecnologías similares como 
        Local Storage y Session Storage.
      </p>

      <h2>2. Cookies que Utilizamos en Nuestra Aplicación React</h2>
      
      <h3>Cookies Esenciales</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tipo</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Propósito</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>session_id</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Cookie de sesión</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mantener la sesión del usuario</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Sesión</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>csrf_token</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Cookie de seguridad</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Protección contra CSRF</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Sesión</td>
          </tr>
        </tbody>
      </table>

      <h3>Almacenamiento Local (LocalStorage)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Clave</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tipo</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Propósito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>userPreferences</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>LocalStorage</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Almacenar preferencias del usuario</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>appSettings</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>LocalStorage</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Configuración de la aplicación</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies de Analítica (Si las implementas)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Proveedor</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Propósito</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>_ga</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Google Analytics</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Distinguir usuarios únicos</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>2 años</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>_gid</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Google Analytics</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Distinguir usuarios</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>24 horas</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Gestión de Cookies</h2>
      <p>Puede controlar y/o eliminar las cookies como desee:</p>
      <ul>
        <li><strong>Configuración del navegador:</strong> Puede configurar su navegador para rechazar cookies</li>
        <li><strong>Herramientas del navegador:</strong> Puede eliminar cookies existentes</li>
        <li><strong>Almacenamiento local:</strong> Puede limpiar LocalStorage desde las herramientas de desarrollador</li>
      </ul>

      <h2>4. Cómo Deshabilitar Cookies</h2>
      <p>Puede deshabilitar las cookies a través de la configuración de su navegador:</p>
      <ul>
        <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
        <li><strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies</li>
        <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
      </ul>

      <h2>5. Contacto</h2>
      <p>
        Para cualquier pregunta sobre nuestra política de cookies:<br/>
        <strong>Email:</strong> rycko.arcr@gmail.com
      </p>
    </div>
  );
};

export default CookiesPolicy;