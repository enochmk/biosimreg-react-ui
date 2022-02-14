import React from 'react';

const ErrorMessage = ({ input, message }) => {
  return input && message ? (
    <span className="text-error text-sm">{message}</span>
  ) : null;
};

export default ErrorMessage;