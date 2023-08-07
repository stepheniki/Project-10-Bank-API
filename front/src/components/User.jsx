import React, { useState } from "react";
import argentBankLogo from "../assets/argentBankLogo.png";

function User() {
  const [isEditing, setIsEditing] = useState(false); // État pour gérer l'édition
  const [firstName, setFirstName] = useState("Tony"); // État pour le prénom
  const [lastName, setLastName] = useState("Jarvis"); // État pour le nom

  const handleEditClick = () => {
    setIsEditing(true); // Active l'édition lorsque l'utilisateur clique sur "Edit"
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Désactive l'édition lorsque l'utilisateur clique sur "Save"
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
              Tony
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