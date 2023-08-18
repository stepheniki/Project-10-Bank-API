import React from "react";
import { useSelector } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";

function Header() {
  const firstName = useSelector((state) => state.auth.firstName);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {firstName ? (
          <>
            <span className="main-nav-item">{firstName}</span>
            <a className="main-nav-item" href="./logout">
              Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="./login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
