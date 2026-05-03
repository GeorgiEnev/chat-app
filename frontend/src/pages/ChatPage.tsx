import { useState } from "react";

import ChatHeader from "../components/ChatHeader.tsx";
import ChatSidebar from "../components/ChatSidebar.tsx";
import MessageInput from "../components/MessageInput.tsx";
import MessageList from "../components/MessageList.tsx";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);

  function handleSendMessages(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, text]);
  }

  return (
    <div className="h-screen grid grid-cols-[320px_1fr] bg-zinc-950 text-white">
      <ChatSidebar />

      <main className="flex flex-col">
        <ChatHeader />

        <MessageList messages={messages} />

        <MessageInput onSend={handleSendMessages} />
      </main>
    </div>
  );
}

