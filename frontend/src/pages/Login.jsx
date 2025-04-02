import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "password123") {
      navigate("/");
    } else {
      setError(t("loginError"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{t("loginTitle")}</h2>
        <p>{t("loginSubtitle")}</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">{t("login")}</button>
        </form>
        <p>{t("or")}</p>
        <button className="google-btn">{t("loginWithGoogle")}</button>
        <p><a href="/forgot-password">{t("forgotPassword")}</a></p>
        <p>
          <a href="/signup">{t("noAccount")} {t("signup")}</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
