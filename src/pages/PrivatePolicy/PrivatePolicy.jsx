// En tu estructura de proyecto, crea: src/components/PrivacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Política de Privacidad - Rycko.Online</h1>
      
      <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>

      <h2>1. Información General</h2>
      <p>
        Rycko.Online ("nosotros", "nuestro" o "el sitio") se compromete a proteger su privacidad. 
        Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos 
        su información cuando visita nuestro sitio web <strong>https://rycko.online</strong>.
      </p>
      <p>Al utilizar nuestro sitio, usted acepta las prácticas descritas en esta política.</p>

      <h2>2. Información que Recopilamos</h2>
      <p>En nuestra aplicación React con Vite, recopilamos:</p>
      <ul>
        <li><strong>Información técnica automática:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de visita</li>
        <li><strong>Datos de uso:</strong> Interacciones con la aplicación, preferencias de usuario</li>
        <li><strong>Cookies y almacenamiento local:</strong> Como se describe en nuestra Política de Cookies</li>
        <li><strong>Información que nos proporcionas voluntariamente:</strong> A través de formularios o contactos</li>
      </ul>

      <h2>3. Uso de la Información</h2>
      <p>Utilizamos la información recopilada para:</p>
      <ul>
        <li>Proporcionar, operar y mantener nuestra aplicación web</li>
        <li>Mejorar, personalizar y expandir nuestra aplicación</li>
        <li>Comprender y analizar cómo utiliza nuestra aplicación</li>
        <li>Desarrollar nuevas características y funcionalidades</li>
        <li>Comunicarnos con usted para soporte técnico</li>
        <li>Detectar y prevenir problemas técnicos y de seguridad</li>
      </ul>

      <h2>4. Tecnologías que Utilizamos</h2>
      <p>Como aplicación desarrollada con React y Vite, utilizamos:</p>
      <ul>
        <li><strong>React Hooks:</strong> Para el estado de la aplicación</li>
        <li><strong>Local Storage:</strong> Para almacenar preferencias del usuario</li>
        <li><strong>Session Storage:</strong> Para datos de sesión temporal</li>
        <li><strong>Cookies:</strong> Para funcionalidad esencial</li>
      </ul>

      <h2>5. Base Legal para el Procesamiento</h2>
      <p>Procesamos su información personal en base a:</p>
      <ul>
        <li>Su consentimiento mediante la aceptación de cookies</li>
        <li>La necesidad de cumplir con el funcionamiento técnico de la aplicación</li>
        <li>Nuestros intereses legítimos en mejorar la aplicación</li>
      </ul>

      <h2>6. Compartición de Información</h2>
      <p>No vendemos, comercializamos ni transferimos su información personal a terceros, excepto en las siguientes circunstancias:</p>
      <ul>
        <li>Proveedores de hosting que nos ayudan a operar nuestra aplicación</li>
        <li>Cumplimiento de obligaciones legales</li>
        <li>Protección de nuestros derechos, privacidad, seguridad o propiedad</li>
      </ul>

      <h2>7. Almacenamiento y Seguridad</h2>
      <p>
        Mantenemos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal. 
        Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
      </p>

      <h2>8. Retención de Datos</h2>
      <p>
        Conservaremos su información personal solo durante el tiempo necesario para los fines establecidos 
        en esta política o según lo requerido por ley.
      </p>

      <h2>9. Sus Derechos</h2>
      <p>De acuerdo con las leyes aplicables, usted tiene derecho a:</p>
      <ul>
        <li>Acceder a su información personal</li>
        <li>Rectificar información inexacta</li>
        <li>Solicitar la eliminación de sus datos</li>
        <li>Oponerse al procesamiento de sus datos</li>
        <li>Solicitar la portabilidad de sus datos</li>
        <li>Retirar su consentimiento en cualquier momento</li>
      </ul>
      <p>Para ejercer estos derechos, contáctenos en: <strong>rycko.arcr@gmail.com</strong></p>

      <h2>10. Enlaces a Terceros</h2>
      <p>
        Nuestra aplicación puede contener enlaces a otros sitios web. No somos responsables de 
        las prácticas de privacidad de estos sitios externos.
      </p>

      <h2>11. Cambios a Esta Política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Le notificaremos cualquier cambio 
        publicando la nueva política en esta página con una nueva fecha de "Última actualización".
      </p>

      <h2>12. Contacto</h2>
      <p>
        Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:<br/>
        <strong>Email:</strong> rycko.arcr@gmail.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;