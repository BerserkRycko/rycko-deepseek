import React from 'react';

const SolucionError404WordPress = () => {
  return (
    <div className="blog-content">
      <h2>Solución al error 404 "Page Not Found" en WordPress, Nginx, DigitalOcean y Ubuntu</h2>
      <p>El error 404 "Page Not Found" es uno de los problemas más frecuentes al gestionar sitios WordPress en servidores Linux como Ubuntu, especialmente al usar Nginx en plataformas como DigitalOcean. Este artículo te mostrará, paso a paso, cómo identificar y solucionar este error tomando como referencia el video de Rycko - Every web.</p>
      
      <h3>¿Por qué ocurre el error 404 en WordPress sobre Nginx?</h3>
      <p>El error suele aparecer por la mala configuración de los archivos de tu sitio en Nginx, principalmente cuando los enlaces permanentes (permalinks) no están correctamente definidos o el archivo de configuración no permite una correcta interpretación de las URLs amigables (pretty URLs).</p>
      
      <h3>Solución paso a paso</h3>
      
      <h4>1. Localiza tu archivo de configuración Nginx</h4>
      <p>El archivo suele estar en <code>/etc/nginx/sites-available/</code>, con el nombre del sitio configurado (por ejemplo, <code>catering-life</code>).</p>
      
      <h4>2. Edita la configuración del sitio</h4>
      <p>Abre el archivo usando un editor como nano o vim:</p>
      <pre><code>{`sudo nano /etc/nginx/sites-available/tu-sitio`}</code></pre>
      
      <h4>3. Permalinks y estructura de las URLs</h4>
      <p>Es fundamental tener la configuración correcta para que WordPress gestione los enlaces permanentes. Si se fuerza un formato incorrecto en WordPress o Nginx, aparecerá el error 404.</p>
      
      <h4>4. Configuración básica recomendada en Nginx</h4>
      <p>Agrega las siguientes directivas, sustituyendo <code>tu-dominio</code> por el dominio real:</p>
      <pre><code>{`location / {
   try_files $uri $uri/ /index.php?$args;
}`}</code></pre>
      <p>Asegúrate de que el bloque que gestiona los permalinks esté habilitado y que el dominio coincida con tu sitio.</p>
      
      <h4>5. Certificado SSL y archivos index</h4>
      <p>Verifica que el archivo de configuración incluya los index adecuados (<code>index.php</code>, <code>index.html</code>) y tenga la sección referente a SSL si usas HTTPS.</p>
      
      <h4>6. Reinicia Nginx</h4>
      <p>Una vez modificada la configuración, aplica los cambios:</p>
      <pre><code>{`sudo systemctl restart nginx`}</code></pre>
      
      <div className="tip-box">
        <strong>💡 Consejo Profesional:</strong> Siempre haz una copia de seguridad de tu archivo de configuración antes de realizar cambios. Puedes usar <code>sudo cp /etc/nginx/sites-available/tu-sitio /etc/nginx/sites-available/tu-sitio.backup</code>
      </div>
      
      <h3>Verificación adicional</h3>
      <p>Después de reiniciar Nginx, verifica que la configuración sea correcta con:</p>
      <pre><code>{`sudo nginx -t`}</code></pre>
      <p>Este comando te mostrará si hay errores de sintaxis en tu configuración antes de que afecten tu sitio en producción.</p>
      
      <h3>Conclusión</h3>
      <p>Resolver el error 404 en WordPress con Nginx requiere atención a los detalles de configuración. Siguiendo estos pasos deberías poder solucionar el problema y tener tu sitio funcionando correctamente con URLs amigables.</p>
    </div>
  );
};

export default SolucionError404WordPress;