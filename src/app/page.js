"use client";

import Chat from "./_components/chat/Chat";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-900">
      <header className="fixed flex justify-between items-center t-0 l-0 w-full px-4 py-4">
        <h1 className="text-4xl text-neutral-50">AI-KEA</h1>
        <div>Swag</div>
      </header>
      <div className="w-full h-full max-w-5xl m-auto grid place-items-center">
        <Chat />
      </div>
    </main>
  );
}
