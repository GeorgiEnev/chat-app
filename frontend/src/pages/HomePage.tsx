import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            Real-Time Messaging Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connect Instantly <br />
            Chat Seamlessly
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            A modern full-stack chat application built for fast, secure,
            real-time communication.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


