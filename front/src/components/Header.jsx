import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Importe les utilitaires de Redux pour la gestion de l'état
import argentBankLogo from "../assets/argentBankLogo.png"; // Importe le logo d'Argent Bank
import { useEffect, useState } from "react"; // Importe les utilitaires React
import axios from "axios"; // Importe Axios pour les requêtes HTTP
import { logout, clearToken } from "../store"; // Importe les actions de déconnexion depuis le store

function Header() {
  const dispatch = useDispatch(); // Initialise le dispatch pour déclencher les actions

  const token = useSelector((state) => state.token); // Récupère le token depuis le store
  const [firstName, setFirstName] = useState(""); // Initialise un état local pour stocker le prénom de l'utilisateur

  // Ajouter une fonction de déconnexion
  const handleLogout = () => {
    dispatch(logout()); // Dispatch l'action pour vider le token dans le store
    dispatch(clearToken()); // Utilisez l'action clearToken pour vider complètement le token du store
    console.log("Logging out...");
    window.location.href = '/'; // Rediriger vers la page d'accueil
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
          setFirstName(firstName); // Met à jour l'état local avec le prénom de l'utilisateur
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [token]); // Utilisez le token comme dépendance pour déclencher l'effet lorsque le token change

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
