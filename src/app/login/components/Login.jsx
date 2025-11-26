import React from "react";
import "@/app/login/components/Login.css";
import Link from "next/link";
export default function Login() {
  return (
    <div className="login-wrapper">
      <form className="login-form">
        <h2>Login</h2>

        <label>
          Email
          <input type="email" name="email" placeholder="Enter email" required />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </label>

        <button type="submit">Login</button>

        <p className="note">
          Don't have an account? <Link href="/create">Create one</Link>
        </p>
      </form>
    </div>
  );
}
