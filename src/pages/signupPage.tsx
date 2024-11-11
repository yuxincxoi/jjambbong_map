import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
