import { pluralize, t } from "../i18n";

function StartScreen({ numQuestions, dispatch, lang }) {
  return (
    <div className="start">
      <h2>{t("welcome", lang)}</h2>
      <h3>{pluralize("welcomeSub", numQuestions, lang)}</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {t("start", lang)}
      </button>
    </div>
  );
}

export default StartScreen;
