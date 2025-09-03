const translations = {
  en: {
    title: "Quiz",
    welcome: "Welcome to the Intellectual Challenge",
    welcomeSub_singular: "{count} questions to test your general knowledge",
    welcomeSub_plural: "{count} questions to test your general knowledge",
    start: "Let's Start",
    next: "Next",
    finish: "Finish",
    questionProgress: "Question {current} / {total}",
    loading: "Loading questions...",
    error: "There was an error fetching questions.",
    result: "You scored {points} out of {max} ({percent}%)",
    highscore: "(Highscore: {high} points)",
    restart: "Restart quiz",
    langLabel: "Language",
    lang_en: "English",
    lang_ka: "Georgian",
  },
  ka: {
    title: "ვიქტორინა",
    welcome: "მოგესალმებით ინტელექტუალურ გამოწვევაში",
    welcomeSub_singular: "{count} კითხვა ზოგადსაკაცობრიო ცოდნის შესამოწმებლად",
    welcomeSub_plural: "{count} კითხვა ზოგადსაკაცობრიო ცოდნის შესამოწმებლად",
    start: "დაწყება",
    next: "შემდეგი",
    finish: "დასრულება",
    questionProgress: "კითხვა {current} / {total}",
    loading: "იტვირთება კითხვები...",
    error: "კითხვების მიღების შეცდომა მოხდა.",
    result: "თქვენ მიიღეთ {points} ქულა {max}-დან ({percent}%)",
    highscore: "(რეკორდი: {high} ქულა)",
    restart: "ვიქტორინის თავიდან დაწყება",
    langLabel: "ენა",
    lang_en: "",
    lang_ka: "ქართული",
  },
};

function interpolate(template, params) {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    String(params?.[key] ?? "")
  );
}

export function t(key, lang, params) {
  const dict = translations[lang] || translations.en;
  const value = dict[key] || translations.en[key] || key;
  if (params) return interpolate(value, params);
  return value;
}

export function pluralize(baseKey, count, lang) {
  const key = count === 1 ? `${baseKey}_singular` : `${baseKey}_plural`;
  return t(key, lang, { count });
}

export const supportedLanguages = [
  { code: "ka", labelKey: "lang_ka" },
  { code: "en", labelKey: "lang_en" },
];
