"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/app/create/components/Create.css";

export default function Create() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    // prevent refersh
    e.preventDefault();

    console.log(formData);

    const response = await fetch("/api/backend", {
      method: "POST",
      body: JSON.stringify({ createData: formData }),
    });
    const data = await response.json();

    if (response.status === 400 && data.message === "Username already exists") {
      const usernameInput = document.querySelector("input[name='userName']");
      usernameInput.setCustomValidity("Username already exists");
      usernameInput.reportValidity(); // force the popup to show
      return; // stop here and do NOT clear the form
    }

    console.log(data);

    // clear form
    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label>
          Username
          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            required
            value={formData.userName}
            onChange={handleChange}
            onInput={(e) => e.target.setCustomValidity("")} // <- THIS CLEARS THE OLD ERROR
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={handleChange}
            onInput={() => {
              const confirm = document.querySelector(
                "input[name='confirmPassword']"
              );
              if (!confirm) return;

              confirm.setCustomValidity(
                formData.confirmPassword === ""
                  ? ""
                  : formData.password === formData.confirmPassword
                  ? ""
                  : "Passwords do not match"
              );
            }}
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            onInput={(e) =>
              e.target.setCustomValidity(
                formData.password === e.target.value
                  ? ""
                  : "Passwords do not match"
              )
            }
          />
        </label>

        <button type="submit">Create Account</button>

        <p className="note">
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
