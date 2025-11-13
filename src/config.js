// API configuration
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Check if we're in development mode
export const isDevelopment = process.env.NODE_ENV === 'development' ||
                             window.location.hostname === 'localhost' ||
                             window.location.hostname === '127.0.0.1';
