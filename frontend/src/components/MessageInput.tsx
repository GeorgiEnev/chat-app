import { useState } from "react";

type MessageInputProps = {
  onSend: (text: string) => void;
};

export default function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-lg bg-white px-4 py-2 font-semibold text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
}
