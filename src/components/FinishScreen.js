import { t } from "../i18n";

function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  lang,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "😑";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>{" "}
        {t("result", lang, {
          points,
          max: maxPossiblePoints,
          percent: Math.ceil(percentage),
        })}
      </p>
      <p className="highscore">{t("highscore", lang, { high: highscore })}</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        {t("restart", lang)}
      </button>
    </>
  );
}

export default FinishScreen;
