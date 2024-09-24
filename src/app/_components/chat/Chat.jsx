"use client";

import React, { useRef } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  const chatContainer = useRef(null);

  const renderResponse = () => {
    <div className="">
      {messages.map((m, i) => {
        <div key={i} className="">
          <div className="w-16 h-16 rounded-full bg-neutral-50"></div>
          <div className="w-full ml-4">
            <p>{m.content}</p>
            {index < messages.length - 1 && <div className="" />}
          </div>
        </div>;
      })}
    </div>;
  };

  return (
    <div ref={chatContainer} className="w-full">
      {renderResponse()}
      <form className="absolute b-0 l-0 r-0 w-96 mx-8 my-auto box-border pl-20 pr-7">
        <input />
        <button />
      </form>
    </div>
  );
}
