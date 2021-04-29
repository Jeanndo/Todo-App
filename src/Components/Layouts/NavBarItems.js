import React from "react";
import { Link } from "react-router-dom";

export default function NavBarItems() {
  return (
    <>
       <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/logout" className="nav-link">
        Logout
      </Link>
      <Link to="/signUp" className="nav-link">
        SignUp
      </Link>
    </>
  );
}
