// src/utils/analytics.js
export const GA_MEASUREMENT_ID = 'G-65S3XZGWSZ'; // Reemplaza con tu ID

export const pageview = (url) => {
  // ✅ Verificamos que window.gtag sea una función antes de ejecutarla
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  // ✅ Misma verificación aquí
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};