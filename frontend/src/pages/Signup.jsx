import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "English" ? "Français" : "English"));
  };

  return (
    <div className="signup-container">
      <div className="signup-window">
        <div className="signup-header">
          <button className="signup-lang" onClick={toggleLanguage}>
            {language === "English" ? "Français" : "English"}
          </button>
          <div className="signup-profile">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>

        <div className="signup-content">
          <div className="signup-title">
            <i className="fas fa-lock"></i>
            <span className="signup-text">
              {language === "English" ? "Sign Up" : "S'inscrire"}
            </span>
          </div>

          <p className="signup-subtitle">
            {language === "English" ? "Create an account" : "Créer un compte"}
          </p>

          <form className="signup-form">
            <div className="signup-input">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder={language === "English" ? "Username" : "Nom d'utilisateur"}
              />
            </div>
            <div className="signup-input">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder={language === "English" ? "Email" : "Email"} />
            </div>
            <div className="signup-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder={language === "English" ? "Password" : "Mot de passe"}
              />
            </div>
            <div className="signup-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder={
                  language === "English" ? "Confirm Password" : "Confirmer le mot de passe"
                }
              />
            </div>
            <button type="submit" className="signup-button">
              {language === "English" ? "Sign Up" : "S'inscrire"}
            </button>
          </form>

          <div className="signup-or">{language === "English" ? "OR" : "OU"}</div>

          <button className="signup-google">
            {language === "English" ? "Sign up with Google" : "S'inscrire avec Google"}
          </button>

          <p className="signup-login-link">
            {language === "English" ? "Already have an account?" : "Vous avez déjà un compte?"}{" "}
            <span>{language === "English" ? "Login" : "Connexion"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
