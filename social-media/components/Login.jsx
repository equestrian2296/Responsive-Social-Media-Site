import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const usernameInput = "admin";
    const passwordInput = "password";
    if (username === usernameInput && password === passwordInput) {
      localStorage.setItem("token", "dummy_token"); // Store a dummy JWT
      router.push("/"); // Redirect to home page after successful login
      setError(""); // Clear any previous error messages

    } else {
      setError("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
