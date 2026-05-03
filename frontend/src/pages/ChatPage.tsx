export default function ChatPage() {
  return (
    <div className="h-screen grid grid-cols-[320px_1fr] bg-zinc-950 text-white">
      <aside className="flex flex-col border-r border-zinc-800 p-4">
        <h1 className="text-xl font-bold">Chat App</h1>

        <input
          type="text"
          placeholder="Search..."
          className="mt-4 rounded-lg bg-zinc-800 px-3 py-2 text-sm outline-none"
        />

        <div className="mt-6 flex-1">
          <div className="rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition cursor-pointer">Jon Doe</div>
        </div>
      </aside>

      <main>Main Chat Area</main>
    </div>
  );
}
