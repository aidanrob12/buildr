import React from "react";
import { Link } from "react-router";
import "../Auth/Auth.css";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth logic will be implemented later
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Create your account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Full name"
              required
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Confirm password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign up
          </button>
          <Link to="/login" className="auth-link">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
