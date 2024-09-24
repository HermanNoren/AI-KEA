"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  const chatContainer = useRef(null);

  const scroll = useCallback(() => {
    const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  }, []);

  useEffect(() => {
    scroll();
  }, [messages, scroll]);

  const renderResponse = useCallback(() => {
    return (
      <div className="flex flex-col text-left p-8 overflow-auto h-[calc(100vh-300px)] box-border">
        {messages.map((m, i) => {
          return (
            <div key={i} className="">
              <div className="w-16 h-16 rounded-full bg-neutral-50"></div>
              <div className="w-full ml-4">
                <p>{m.content}</p>
                {i < messages.length - 1 && (
                  <div className="w-full border border-neutral-50 border-opacity-30 my-8" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [messages]);

  return (
    <div ref={chatContainer} className="w-full relative">
      {renderResponse()}
      <form
        onSubmit={handleSubmit}
        className="absolute b-0 l-0 w-full my-auto box-border"
      >
        <input
          name="input-field"
          type="text"
          placeholder="Ask anything about the site"
          onChange={handleInputChange}
          value={input}
          className="w-full rounded-full p-4 border border-neutral-50 bg-transparent box-border"
        />
        <button
          type="submit"
          className="absolute px-4 py-2 border rounded-full right-3 top-[50%] translate-y-[-50%] bg-yellow-400 text-neutral-950"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
