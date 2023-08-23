import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import axios from "axios";
import Header from "./Header";

function User() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate(); // Obtenir la fonction de navigation

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Vérifier si le token est présent
    if (!token) {
      // Rediriger vers la page de connexion si le token est vide, le chemin /user inaccessible si pas connecté
      navigate("/login");
    } else {
      axios
        .post("http://localhost:3001/api/v1/user/profile", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { firstName, lastName } = response.data.body;
          setFirstName(firstName);
          setLastName(lastName);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [token, navigate]);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Si la requête réussit, désactive le mode édition
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };
  return (
    <div className="body-css">
      <Header/>
      <main className="main bg-dark">
        <div className="header">
          {/* Affiche le contenu du nom et du prénom dans un champ de texte si l'édition est activée */}
          {isEditing ? (
            <>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          ) : (
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
          )}

          {/* Bouton "Edit" ou "Save" en fonction de l'état d'édition */}
          {isEditing ? (
            <button className="edit-button" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
        </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    )
}

export default User;