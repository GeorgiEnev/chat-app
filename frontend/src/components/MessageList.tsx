type MessageListProps = {
  messages: string[];
};

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="self-end rounded-lg bg-white px-4 py-2 text-black"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
