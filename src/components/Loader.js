import { t } from "../i18n";

export default function Loader({ lang }) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{t("loading", lang)}</p>
    </div>
  );
}
