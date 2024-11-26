import React, { useState } from "react";
import "../components/login.css"

const LoginP = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/crecedentials");
      const users = await response.json();

      const user = users.find(
        (user) => user.name === username && user.password === password
      );

      if (user) {
        alert("Login successful!");
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
      console.error(error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "whitesmoke" }}>
        This is Login Page
      </h1>
      <br></br>

      <div className="loginpage">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default LoginP;
