"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2 className="text-5xl text-center text-red-800"> {error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
