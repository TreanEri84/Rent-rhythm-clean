import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-xl border bg-white p-4 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`text-sm text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
}
