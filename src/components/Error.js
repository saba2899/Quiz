import { t } from "../i18n";

function Error({ lang }) {
  return (
    <p className="error">
      <span>💥</span> {t("error", lang)}
    </p>
  );
}

export default Error;
