"use client";

import Chat from "./_components/chat/Chat";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-900 grid place-items-center">
      <div className="w-full h-full max-w-5xl grid place-items-center">
        <Chat />
      </div>
    </main>
  );
}
