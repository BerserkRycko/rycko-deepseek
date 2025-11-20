import React from 'react';

const WordPress404ErrorSolution = () => {
  return (
    <div className="blog-content">
      <h2>Solution to 404 "Page Not Found" Error in WordPress, Nginx, DigitalOcean and Ubuntu</h2>
      <p>The 404 "Page Not Found" error is one of the most common problems when managing WordPress sites on Linux servers like Ubuntu, especially when using Nginx on platforms like DigitalOcean. This article will show you, step by step, how to identify and fix this error with reference to Rycko - Every web's video.</p>
      
      <h3>Why does the 404 error occur in WordPress on Nginx?</h3>
      <p>The error usually appears due to poor configuration of your site files in Nginx, mainly when permalinks are not properly defined or the configuration file doesn't allow correct interpretation of pretty URLs.</p>
      
      <h3>Step-by-step solution</h3>
      
      <h4>1. Locate your Nginx configuration file</h4>
      <p>The file is usually located in <code>/etc/nginx/sites-available/</code>, with the name of the configured site (for example, <code>catering-life</code>).</p>
      
      <h4>2. Edit the site configuration</h4>
      <p>Open the file using an editor like nano or vim:</p>
      <pre><code>{`sudo nano /etc/nginx/sites-available/your-site`}</code></pre>
      
      <h4>3. Permalinks and URL structure</h4>
      <p>It's essential to have the correct configuration for WordPress to manage permalinks. If an incorrect format is forced in WordPress or Nginx, the 404 error will appear.</p>
      
      <h4>4. Recommended basic configuration in Nginx</h4>
      <p>Add the following directives, replacing <code>your-domain</code> with the actual domain:</p>
      <pre><code>{`location / {
   try_files $uri $uri/ /index.php?$args;
}`}</code></pre>
      <p>Make sure the block that manages permalinks is enabled and that the domain matches your site.</p>
      
      <h4>5. SSL certificate and index files</h4>
      <p>Verify that the configuration file includes the appropriate indexes (<code>index.php</code>, <code>index.html</code>) and has the section regarding SSL if you use HTTPS.</p>
      
      <h4>6. Restart Nginx</h4>
      <p>Once the configuration is modified, apply the changes:</p>
      <pre><code>{`sudo systemctl restart nginx`}</code></pre>
      
      <div className="tip-box">
        <strong>💡 Pro Tip:</strong> Always backup your configuration file before making changes. You can use <code>sudo cp /etc/nginx/sites-available/your-site /etc/nginx/sites-available/your-site.backup</code>
      </div>
      
      <h3>Additional verification</h3>
      <p>After restarting Nginx, verify that the configuration is correct with:</p>
      <pre><code>{`sudo nginx -t`}</code></pre>
      <p>This command will show you if there are syntax errors in your configuration before they affect your production site.</p>
      
      <h3>Conclusion</h3>
      <p>Solving the 404 error in WordPress with Nginx requires attention to configuration details. By following these steps you should be able to fix the problem and have your site working correctly with pretty URLs.</p>
    </div>
  );
};

export default WordPress404ErrorSolution;