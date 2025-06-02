import React from "react";
import { Link } from "react-router";
import "../Auth/Auth.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth logic will be implemented later
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Sign in to your account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign in
          </button>
          <Link to="/signup" className="auth-link">
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
