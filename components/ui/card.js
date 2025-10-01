import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-lg border ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}