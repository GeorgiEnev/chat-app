export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
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
  );
}
