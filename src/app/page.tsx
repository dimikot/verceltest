"use client";

import { useState } from "react";
import { getGreeting } from "./actions";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    try {
      const result = await getGreeting();
      setMessage(result);
    } catch {
      setError("Internal server error; see logs");
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="relative mb-4">
          <svg width="100" height="100" viewBox="0 0 100 100" className="animate-bounce">
            <rect x="5" y="5" width="40" height="40" rx="8" fill="#f25022" transform="rotate(-8 25 25)" />
            <rect x="55" y="5" width="40" height="40" rx="8" fill="#7fba00" transform="rotate(10 75 25)" />
            <rect x="5" y="55" width="40" height="40" rx="8" fill="#00a4ef" transform="rotate(10 25 75)" />
            <rect x="55" y="55" width="40" height="40" rx="8" fill="#ffb900" transform="rotate(-8 75 75)" />
            {/* Clown nose */}
            <circle cx="50" cy="50" r="12" fill="#ff1744" />
            {/* Eyes */}
            <circle cx="30" cy="30" r="5" fill="white" />
            <circle cx="30" cy="30" r="2.5" fill="black" />
            <circle cx="70" cy="30" r="5" fill="white" />
            <circle cx="70" cy="30" r="2.5" fill="black" />
            {/* Goofy smile */}
            <path d="M 30 65 Q 50 85 70 65" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <p className="text-center text-sm font-bold tracking-widest" style={{ color: "#737373" }}>
            Nanosoft™
          </p>
        </div>

        <button
          onClick={handleClick}
          className="rounded-full bg-foreground px-6 py-3 text-background font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Press to see Error
        </button>
        <div className="min-h-[1.75rem]">
          {error && (
            <p className="text-lg text-red-600">{error}</p>
          )}
          {message && !error && (
            <p className="text-lg text-black dark:text-zinc-50">{message}</p>
          )}
        </div>
      </main>
    </div>
  );
}
