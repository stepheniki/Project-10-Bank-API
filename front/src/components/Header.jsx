import React from "react";
import { useSelector, useDispatch } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { logout, clearToken } from "../store";

function Header() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  const [firstName, setFirstName] = useState("");

  // Ajouter une fonction de déconnexion
  const handleLogout = () => {
    dispatch(logout()); // Dispatch l'action pour vider le token dans le store
    dispatch(clearToken()); // Utilisez l'action clearToken pour vider complètement le token du store
    console.log("Logging out...");
    window.location.href = '/'; // rediriger vers la page d'accueil
  }


  useEffect(() => {
    if (token) { // Vérifier si le token est présent
      axios
        .post("http://localhost:3001/api/v1/user/profile", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { firstName } = response.data.body;
          setFirstName(firstName);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [token]);

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
        {token ? ( // Vérifier si le token est présent
          <>
            <a className="main-nav-item" href="./user">
              <i className="fa fa-user-circle"></i>
              <span className="main-nav-item">{firstName}</span>
            </a>
            {/* Ajouter un onClick à l'élément "Sign Out" pour appeler la fonction de déconnexion */}
            <a className="main-nav-item" href="./" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
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
