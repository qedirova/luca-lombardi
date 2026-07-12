"use client";
import { BiErrorCircle } from "react-icons/bi";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center">
      <BiErrorCircle className="text-red-500 text-6xl" />

      <h1 className="text-3xl font-bold">500 — Something went wrong!</h1>

      <p className="text-gray-400 max-w-md">{error.message}</p>

      <button
        onClick={reset}
        className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
}
