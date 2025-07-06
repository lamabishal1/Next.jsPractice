"use client";
import './globals.css';
import { useState } from 'react';

function ErrorSimulator({ message }) {
  const [error, setError] = useState(false);

  if (error) throw new Error("An error has occurred");

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
}

export default function ErrorWrapper({ children }) {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
}
