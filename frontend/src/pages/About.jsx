import React from "react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{t("aboutTitle")}</h2>
      <p>{t("aboutContent")}</p>
    </div>
  );
}
