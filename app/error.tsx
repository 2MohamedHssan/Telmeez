"use client"; // Required for error components

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-lg text-gray-700">{error.message}</p>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try Again
      </button>
    </div>
  );
}
