import React from "react";
import Link from "next/link";
import "@/app/create/components/Create.css";
export default function Create() {
  return (
    <div className="auth-wrapper">
      <form className="auth-form">
        <h2>Create Account</h2>

        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
        </label>

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

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            required
          />
        </label>

        <button type="submit">Create Account</button>

        <p className="note">
          Already have an account? <Link href="/login"> Log in</Link>
        </p>
      </form>
    </div>
  );
}
