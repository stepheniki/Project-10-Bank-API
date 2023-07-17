import React from "react"
import argentBankLogo from "../assets/argentBankLogo.png"

function Profil () {

    return (
<>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Argent Bank - Home Page</title>
    <link rel="stylesheet" href="./css/main.css" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>

        <body>
        <nav class="main-nav">
          <a class="main-nav-logo" href="./">
            <img
              class="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
          </a>
          <div>
            <a class="main-nav-item" href="./sign-in">
              <i class="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        </nav>
        <main class="main bg-dark">
          <section class="sign-in-content">
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div class="input-wrapper">
                <label for="username">Username</label
                ><input type="text" id="username" />
              </div>
              <div class="input-wrapper">
                <label for="password">Password</label
                ><input type="password" id="password" />
              </div>
              <div class="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me"
                  >Remember me</label>
              </div>
               {/* PLACEHOLDER DUE TO STATIC SITE */}  
              <a href="./user" class="sign-in-button">Sign In</a>
              {/* SHOULD BE THE BUTTON BELOW 
              <button class="sign-in-button">Sign In</button> */}
            </form>
          </section>
        </main>
        <footer class="footer">
          <p class="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
          </body>
          </>
    )
}

export default Profil;