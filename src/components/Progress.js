import { t } from "../i18n";

function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
  lang,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        {t("questionProgress", lang, {
          current: index + 1,
          total: numQuestions,
        })}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
