// components/ErrorMessage.js
import '../../public/css/filterComponent.css'

import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="error-message">
        <i className="fa-solid fa-circle-exclamation"></i> 
        {message}
    </div>
  );
};

export default ErrorMessage;
