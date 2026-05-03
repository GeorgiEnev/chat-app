export default function ChatSidebar() {
  return (
    <aside className="flex flex-col border-r border-zinc-800 p-4">
      <h1 className="text-xl font-bold">Chat App</h1>

      <input
        type="text"
        placeholder="Search..."
        className="mt-4 rounded-lg bg-zinc-800 px-3 py-2 text-sm outline-none"
      />

      <div className="mt-6 flex-1 space-y-2">
        <div className="rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition cursor-pointer">
          John Doe
        </div>
        <div className="rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition cursor-pointer">
          Jane Smith
        </div>
        <div className="rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition cursor-pointer">
          Alex Johnson
        </div>
      </div>
    </aside>
  );
}
