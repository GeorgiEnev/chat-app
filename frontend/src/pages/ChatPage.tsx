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
          <div className="rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition cursor-pointer">
            Jon Doe
          </div>
        </div>
      </aside>

      <main className="flex flex-col">
        <header className="border-b border-zinc-800 p-4">
          <h2 className="font-semibold">John Doe</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="flex flex-col space-y-2">
            <div className="self-start rounded-lg bg-zinc-800 px-4 py-2">
              Hello!
            </div>

            <div className="self-end rounded-lg bg-white px-4 py-2 text-black">
              Hi, how are you?
            </div>

            <div className="self-start rounded-lg bg-zinc-800 px-4 py-2">
              I'm good, thanks!
            </div>
          </div>
        </div>

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
      </main>
    </div>
  );
}
