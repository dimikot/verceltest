"use client";

import { useState } from "react";
import { getGreeting } from "./actions";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleClick() {
    const result = await getGreeting();
    setMessage(result);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <button
          onClick={handleClick}
          className="rounded-full bg-foreground px-6 py-3 text-background font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Press to see Error
        </button>
        {message && (
          <p className="text-lg text-black dark:text-zinc-50">{message}</p>
        )}
      </main>
    </div>
  );
}
