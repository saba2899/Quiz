import { t } from "../i18n";

function Header({ lang, onChangeLang }) {
  return (
    <header className="app-header">
      <img src="cap.png" alt="React logo" />
      <h1>{t("title", lang)}</h1>
      <div className="lang-switch">
        <button
          type="button"
          className={`btn flag-btn ${lang === "en" ? "active" : ""}`}
          aria-label="English"
          onClick={() => onChangeLang("en")}
        >
          <img src="/flag/en.png" alt="English" className="flag-icon" />
        </button>
        <button
          type="button"
          className={`btn flag-btn ${lang === "ka" ? "active" : ""}`}
          aria-label="Georgian"
          onClick={() => onChangeLang("ka")}
        >
          <img src="/flag/ge.png" alt="Georgian" className="flag-icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
