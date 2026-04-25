import { useState } from "react";
import { Link } from "react-router";

import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton.tsx";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log({
      username,
      email,
      password,
    });
  }

  return (
    <AuthCard title="Create Account" subtitle="Join and start chatting today.">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          placeholder="Choose a username"
          value={username}
          onChange={setUsername}
        />

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
          placeholder="Create a password"
          value={password}
          onChange={setPassword}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        <PrimaryButton type="submit">Create Account</PrimaryButton>

        <p className="mt-4 text-center text-sm text-zinc-400 bg">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
