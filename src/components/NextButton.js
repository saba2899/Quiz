import { t } from "../i18n";

function NextButton({ dispatch, answer, index, numQuestions, lang }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        {t("next", lang)}
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        {t("finish", lang)}
      </button>
    );
}

export default NextButton;
