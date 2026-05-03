import ChatHeader from "../components/ChatHeader.tsx";
import ChatSidebar from "../components/ChatSidebar.tsx";
import MessageInput from "../components/MessageInput.tsx";
import MessageList from "../components/MessageList.tsx";

export default function ChatPage() {
  return (
    <div className="h-screen grid grid-cols-[320px_1fr] bg-zinc-950 text-white">
      <ChatSidebar />

      <main className="flex flex-col">
        <ChatHeader />

        <MessageList />

        <MessageInput />
      </main>
    </div>
  );
}
