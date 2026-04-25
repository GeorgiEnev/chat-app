import { useState } from "react";
import { Link } from "react-router";

import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <AuthCard title="Welcome Back" subtitle="Sign in to continue chatting.">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
