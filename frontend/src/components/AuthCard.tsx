import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
