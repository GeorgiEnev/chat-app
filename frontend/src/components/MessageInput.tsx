export default function MessageInput() {
  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none"
        />

        <button className="rounded-lg bg-white px-4 py-2 font-semibold text-black">
          Send
        </button>
      </div>
    </div>
  );
}
