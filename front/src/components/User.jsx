import React, { useState } from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function User() {
  const token = useSelector((state) => state.auth.token);
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // déclencher l'appel à l'API
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // Une fois que la réponse de l'API est reçue avec succès, les propriétés firstName et lastName de l'objet response.data.body sont extraites
      // et utilisées pour mettre à jour les états firstName et lastName à l'aide des fonctions setFirstName et setLastName.
      .then((response) => {
        const { firstName, lastName } = response.data.body;
        setFirstName(firstName);
        setLastName(lastName);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, [token]);


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
            <a className="main-nav-item" href="./user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </a>
            <a className="main-nav-item" href="./">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
          </nav>
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