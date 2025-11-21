// src/components/Analytics/Analytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageview } from '../../../utils/analytics';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default Analytics;