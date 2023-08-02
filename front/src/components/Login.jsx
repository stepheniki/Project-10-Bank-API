

import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { useDispatch } from "react-redux";
import Axios from "axios";

function Profil() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
console.log (handleSubmit)
    const credentials = { email: login, password };

    try {
      const response = await Axios.post(
        'http://localhost:3001/api/v1/user/login',
        credentials
      );

      const token = response.data.token;
      dispatch(login({ token }));

      // Redirigez l'utilisateur vers la page souhaitée après connexion réussie
      navigate("/user");
    } catch (error) {
      setErrorMessage("Mauvais e-mail ou mot de passe. Veuillez réessayer.");
    }
  }

  
  return (
    <>
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
          <a className="main-nav-item" href="./login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input onChange={e=>setLogin(e.target.value)} value={login} type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input onChange={e=>setPassword(e.target.value)} value={password} type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
              {/* Affichez le message d'erreur si un message est présent */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button onClick={handleSubmit} className="sign-in-button">
          Sign In
        </button>
                         
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

export default Profil;
