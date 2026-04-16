import React from 'react';
import { Link } from 'react-router';

const ErrorElementPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-7xl font-bold text-green-900">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found 😢
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default ErrorElementPage;