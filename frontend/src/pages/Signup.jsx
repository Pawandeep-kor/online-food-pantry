import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // 👈 Add this

  const handleLoginClick = () => {
    navigate("/login"); // 👈 Navigate to login page
  };

  return (
    <div className="signup-container">
      <div className="signup-window">
        <div className="signup-header">
          <div className="signup-profile">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>

        <div className="signup-content">
          <div className="signup-title">
            <i className="fas fa-lock"></i>
            <span className="signup-text">{t("signup")}</span>
          </div>

          <p className="signup-subtitle">{t("signupSubtitle")}</p>

          <form className="signup-form">
            <div className="signup-input">
              <i className="fas fa-user"></i>
              <input type="text" placeholder={t("username")} />
            </div>
            <div className="signup-input">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder={t("email")} />
            </div>
            <div className="signup-input">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder={t("password")} />
            </div>
            <div className="signup-input">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder={t("confirmPassword")} />
            </div>
            <button type="submit" className="signup-button">
              {t("signup")}
            </button>
          </form>

          <div className="signup-or">{t("or")}</div>

          <button className="signup-google">{t("signupWithGoogle")}</button>

          <p className="signup-login-link">
            {t("alreadyHaveAccount")}{" "}
            <span
              className="login-clickable"
              onClick={handleLoginClick}
              style={{ color: "orange", cursor: "pointer", textDecoration: "underline" }}
            >
              {t("login")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
